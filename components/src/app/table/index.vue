<script setup lang="tsx">
import { useEventListener } from '@vft/use';
import { addUnit, createNamespace, isFunction, generateCssVars } from '@vft/utils';
import { useDebounceFn, useInfiniteScroll, useResizeObserver } from '@vueuse/core';
import type { EmptyProps } from '../../common/empty';
import { Empty } from '../../common/empty';
import { Spin } from '../../common/spin';
import { PageLoading } from '../page-loading';
import TableHeader from './header.vue';
import type { ColumnsProps } from './types';
import { EXTRA_WIDTH } from './types';

interface TableProps {
  /** 表头数据 */
  columns: ColumnsProps[];
  /** 表格数据 */
  tableData: any[];
  /** 空数据占位符 */
  emptyPlaceholder?: string;
  /** 表头是否应用 sticky */
  headerSticky?: boolean;
  /** sticky Top 的值 */
  stickyTop?: number;
  /** 空状态配置 */
  emptyCfg?: EmptyProps;
  /** 分页加载每页数量 */
  pageSize?: number;
  /**  */
  wrapperContainerId?: string;
  /** 自适应表格宽高 */
  autoSize?: boolean;
  /** 是否在加载中 */
  loading?: boolean;
  /** 清除排序 */
  clearSort?: boolean;
}

const namespace = 'vri';

const {
  tableData,
  columns,
  emptyPlaceholder = '-',
  headerSticky,
  stickyTop = 0,
  emptyCfg,
  pageSize = 0,
  autoSize = false,
  loading = false,
  wrapperContainerId
  // clearSort = false
} = defineProps<TableProps>();

const [name, bem] = /* hoist-static*/ createNamespace('table');

const emit = defineEmits(['onTbodyScroll', 'sortChange']);

defineOptions({
  name
});

// 标示当前是表头还是表体滚动
let currentScrollName = $ref('');
// 判断表格渲染状态
let tableRenderStatus = $ref(false);

// 分页参数相关
let page = $ref(1);
const pageNum = $computed(() => Math.ceil(tableData.length / pageSize));

const instance = getCurrentInstance();

// 表格的一些 ref
let table = ref();
let thead = ref();
let tbody = ref();
let tbodyLeft = ref();
let tbodyRight = ref();

const showLoading = $computed(() => {
  return page - 1 < pageNum;
});

const debouncedInit = useDebounceFn(() => init(), 120);

watch(
  [() => loading, () => tableData, () => columns],
  () => {
    tableRenderStatus = false;
    debouncedInit();
  },
  {
    immediate: true
  }
);

// 初始化表格的一些方法
function init() {
  nextTick(() => {
    // 以下监控表格状态滚动相关
    useResizeObserver(tbody, () => {
      if (thead?.value?.theadRight?.offsetHeight && tbody?.value) {
        tbody.value.style.height = `calc(100% - ${thead.value.theadRight.offsetHeight}px)`;
      }
    });

    useResizeObserver(table, () => {
      if (table?.value) {
        table.value.style.height = `calc(100% - ${table.value.getBoundingClientRect().top - 1}px)`;
      }
    });

    if (isFunction(instance?.vnode?.props?.onOnTbodyScroll)) {
      useEventListener(
        tbody,
        'scroll',
        (e) => {
          emit('onTbodyScroll', e);
        },
        {
          passive: true
        }
      );
    }

    if (autoSize) {
      useEventListener(
        window,
        'resize',
        () => {
          resetTableSize();
        },
        {
          passive: true
        }
      );
    }

    if (pageSize) {
      // const _scrollTarget = isString(scrollTarget) ? document.querySelector(scrollTarget) : scrollTarget;

      useInfiniteScroll(
        tbody,
        () => {
          if (page - 1 < pageNum) {
            page++;
            resetTableSize();
          }
        },
        { distance: 10 }
      );
    }

    initScroll();

    resetTableSize();
  });
}

// 表头表体滚动联动
function initScroll() {
  const theadScroll = thead?.value?.theadRight;

  useEventListener(tbodyRight, 'touchstart', () => {
    currentScrollName = 'tbody';
  });

  if (thead?.value?.theadRight) {
    useEventListener(theadScroll, 'touchstart', () => {
      currentScrollName = 'thead';
    });
  }

  useEventListener(
    tbodyRight,
    'scroll',
    (e) => {
      if (theadScroll && currentScrollName === 'tbody') {
        theadScroll.scrollLeft = (e?.target as HTMLElement)?.scrollLeft;
      }
    },
    {
      passive: true
    }
  );

  useEventListener(
    theadScroll,
    'scroll',
    (e) => {
      if (tbodyRight?.value && currentScrollName === 'thead') {
        tbodyRight.value.scrollLeft = (e?.target as HTMLElement)?.scrollLeft;
      }
    },
    {
      passive: true
    }
  );
}

const tableVars = $computed(() => {
  if (autoSize) {
    return generateCssVars({
      tableBaseThWidth: 'auto',
      tbodyTrHeight: 'auto'
    });
  }
});

const _style = $computed(() => {
  return (item) => {
    const _align = { textAlign: item?.cellAlign || item?.align || 'center' };
    return item.width ? { width: addUnit(item.width, true), ..._align } : _align;
  };
});

// 渲染单元格
const renderCell = (isLeft?) => {
  const _bemTbody = bem('tbody');
  return (
    <div class={[isLeft ? _bemTbody + '__left' : _bemTbody + '__right']} ref={isLeft ? tbodyLeft : tbodyRight}>
      {tableData.slice(0, pageSize ? pageSize * page : undefined).map((item, index) => {
        return (
          <div class={[_bemTbody + '__tr']} key={index}>
            {columns.map((subItem, subIndex) => {
              const _dataIndex = subItem?.dataIndex;
              const _cellName = subItem?.cellClassName;
              return (isLeft ? !subItem.fixed : subItem.fixed) ? null : (
                <span
                  key={_dataIndex || subIndex}
                  class={[_bemTbody + '__td', _cellName ? (isFunction(_cellName) ? _cellName?.(item) : _cellName) : '', { [_bemTbody + '__custom_width']: !subItem.width }]}
                  style={_style(subItem)}
                >
                  <span class={_bemTbody + '__cell'}>{subItem?.render ? subItem?.render?.(item?.[_dataIndex!], item, index) : item[_dataIndex!] ?? (subItem?.emptyPlaceholder || emptyPlaceholder)}</span>
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

// const showTable = $computed(() => tableRenderStatus || !autoSize);

// 表格非固定列总宽度
let rightTableWidth = $ref(0);

function resetTableSize() {
  if (tbody?.value && thead?.value && tbody.value?.offsetHeight && thead.value?.theadRight?.offsetHeight) {
    rightTableWidth = 0;

    let tbodyCustom = '.vft-table__tbody__custom_width';
    let thCustom = '.vft-thead__th__custom_width';

    if (wrapperContainerId) {
      tbodyCustom = '#' + wrapperContainerId + ' ' + tbodyCustom;
      thCustom = '#' + wrapperContainerId + ' ' + thCustom;
    }
    // 重置表体列宽
    const tds: NodeListOf<HTMLElement> = document.querySelectorAll(tbodyCustom);
    const ths: NodeListOf<HTMLElement> = document.querySelectorAll(thCustom);

    if (autoSize) {
      for (let i = 0; i < tds.length; i++) {
        tds[i].style.width = 'auto';
      }
      for (const item of ths) {
        item.style.width = 'auto';
      }
    }

    nextTick(() => {
      if (autoSize) {
        resetTableWidthSize(true);
        resetTableWidthSize();
        resetTableHeightSize();
      } else {
        resetTableHeightSize();
      }
    });
  }
}

// 表格宽度大小重置
function resetTableWidthSize(isLeft = false) {
  const headerClassName = '.' + namespace + '-thead__';
  const tbodyClassName = '.' + namespace + '-table__tbody__';
  let theadFixClassName = isLeft ? `${headerClassName}left ${headerClassName}tr` : `${headerClassName}right ${headerClassName}tr`;
  let tbodyFixClassName = isLeft ? `${tbodyClassName}left ${tbodyClassName}tr` : `${tbodyClassName}right ${tbodyClassName}tr`;
  let tbodyTr = isLeft ? `${tbodyClassName}left` : `${tbodyClassName}right`;

  if (wrapperContainerId) {
    theadFixClassName = '#' + wrapperContainerId + ' ' + theadFixClassName;
    tbodyFixClassName = '#' + wrapperContainerId + ' ' + tbodyFixClassName;
    tbodyTr = '#' + wrapperContainerId + ' ' + tbodyTr;
  }


  // 记录宽度
  let arrWidth: number[][] = $ref([]);
  // 表头单元格
  const headerTr = document.querySelector(theadFixClassName) as HTMLElement;
  const headerCell: NodeListOf<HTMLElement> = headerTr.querySelectorAll(`${headerClassName}th`);
  const bodyMain: HTMLElement = document.querySelector(tbodyTr)!;
  // 表体单元格
  const bodyTr: NodeListOf<HTMLElement> = document.querySelectorAll(tbodyFixClassName);

  for (let i = 0; i < bodyTr.length; i++) {
    const bodyTrTd: NodeListOf<HTMLElement> = bodyTr[i].querySelectorAll(`${tbodyClassName}td`);
    for (let j = 0; j < bodyTrTd.length; j++) {
      if (!arrWidth[j]) {
        arrWidth[j] = [];
      }
      arrWidth[j].push(bodyTrTd[j].offsetWidth);
    }
  }

  // 重置表头列宽
  for (let i = 0; i < headerCell.length; i++) {
    arrWidth[i].push(headerCell[i].offsetWidth);
    let maxWidth = Math.max.apply(null, arrWidth[i]);
    if (headerCell[i].className.includes('thead__th__custom_width')) {
      headerCell[i].style.width = maxWidth + EXTRA_WIDTH + 'px';
    }
  }

  // 重置表体列宽
  for (let i = 0; i < bodyTr.length; i++) {
    const bodyTrTd: NodeListOf<HTMLElement> = bodyTr[i].querySelectorAll(`${tbodyClassName}td`);
    for (let j = 0; j < bodyTrTd.length; j++) {
      let maxWidth = Math.max.apply(null, arrWidth[j]);
      if (bodyTrTd[j].className.includes('table__tbody__custom_width')) {
        bodyTrTd[j].style.width = maxWidth + EXTRA_WIDTH + 'px';
      }
    }
  }

  for (const item of arrWidth) {
    rightTableWidth += Math.max.apply(null, item);
  }
  bodyMain.style.width = rightTableWidth + 'px';
  headerTr.style.width = rightTableWidth + 'px';
}

// 表格高度大小重置
function resetTableHeightSize() {
  const tbodyClassName = '.' + namespace + '-table__tbody__';
  let tbodyLeftClassName = `${tbodyClassName}left ${tbodyClassName}tr`;
  let tbodyRightClassName = `${tbodyClassName}right ${tbodyClassName}tr`;

  if (wrapperContainerId) {
    tbodyLeftClassName = '#' + wrapperContainerId + ' ' + tbodyLeftClassName;
    tbodyRightClassName = '#' + wrapperContainerId + ' ' + tbodyRightClassName;
  }

  let tbodyLeftTr: NodeListOf<HTMLElement> = document.querySelectorAll(tbodyLeftClassName);
  let tbodyRightTr: NodeListOf<HTMLElement> = document.querySelectorAll(tbodyRightClassName);

  for (let i = 0; i < tbodyLeftTr.length; i++) {
    tbodyLeftTr[i].style.height = 'auto';
  }

  for (let i = 0; i < tbodyRightTr.length; i++) {
    tbodyRightTr[i].style.height = 'auto';
  }

  nextTick(() => {
    // 记录宽度
    let arrHeight: number[][] = $ref([]);

    for (let i = 0; i < tbodyLeftTr?.length; i++) {
      const bodyTrTd: NodeListOf<HTMLElement> = tbodyLeftTr[i].querySelectorAll(`${tbodyClassName}td`);
      for (let j = 0; j < bodyTrTd.length; j++) {
        if (!arrHeight[i]) {
          arrHeight[i] = [];
        }
        arrHeight[i].push(bodyTrTd[j].offsetHeight);
      }
    }

    for (let i = 0; i < tbodyRightTr?.length; i++) {
      const bodyTrTd: NodeListOf<HTMLElement> = tbodyRightTr[i].querySelectorAll(`${tbodyClassName}td`);
      for (let j = 0; j < bodyTrTd.length; j++) {
        if (!arrHeight[i]) {
          arrHeight[i] = [];
        }
        arrHeight[i].push(bodyTrTd[j].offsetHeight);
      }
    }

    for (let i = 0; i < tbodyLeftTr.length; i++) {
      let maxHeight = Math.max.apply(null, arrHeight[i]);
      tbodyLeftTr[i].style.height = maxHeight + 'px';
    }

    for (let i = 0; i < tbodyRightTr.length; i++) {
      let maxHeight = Math.max.apply(null, arrHeight[i]);
      tbodyRightTr[i].style.height = maxHeight + 'px';
    }

    nextTick(() => {
      tableRenderStatus = true;
      const _columns = columns as ColumnsProps[] & { scrollLeft?: number };
      if (_columns?.scrollLeft) {
        const theadScroll = thead?.value?.theadRight;
        theadScroll.scrollLeft = _columns?.scrollLeft;
        tbodyRight.value.scrollLeft = _columns?.scrollLeft;
      }
    });
  });
}

const headerStickyStyle = computed(() => {
  return headerSticky
    ? {
        position: 'sticky',
        top: addUnit(stickyTop, true),
        zIndex: 1
      }
    : null;
});

const slots = useSlots();

function onSortChange(data) {
  emit('sortChange', { ...data, scrollLeft: tbodyRight.value.scrollLeft });
}

// v-slots={{
//  loading: <span class={bem('loading')}></span>
// }}
const initLoadingStyle = generateCssVars({
  pageLoadingHeight: '100%'
});

defineRender(() => {
  return (
    <div ref={table} id={`${namespace}-table`} class={bem()} style={{ ...tableVars }}>
      {loading ? (
        <div class={[bem('loading-con'), 'flex-center h-full']}>
          <PageLoading spinCfg={{ size: 35 }} style={initLoadingStyle} />
        </div>
      ) : tableData?.length ? (
        <div style={{ opacity: tableRenderStatus ? 1 : 0 }} class="h-full">
          <TableHeader ref={thead} style={headerStickyStyle.value} columns={columns} onSortChange={onSortChange}>
            {slots['thead-right']?.()}
          </TableHeader>
          <div ref={tbody} id={`${namespace}-tbody`} class={bem('tbody')}>
            {renderCell(true)}
            {renderCell()}
          </div>
          {pageSize && showLoading ? (
            <div class={[bem('spin')]}>
              <Spin>加载中...</Spin>
            </div>
          ) : null}
        </div>
      ) : (
        <Empty class="h-full" {...emptyCfg}></Empty>
      )}
    </div>
  );
});

defineExpose({
  table,
  thead,
  tbody,
  tbodyLeft,
  tbodyRight
});
</script>

<style lang="less">
@import './index.less';
</style>
