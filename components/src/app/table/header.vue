<script setup lang="tsx">
import { addUnit, createNamespace } from '@vft/utils';
import type { ColumnsProps } from './types';

interface Props {
  /** 表头数据 */
  columns: ColumnsProps[];
}

const { columns } = defineProps<Props>();

const emit = defineEmits(['SortChange']);

const [name, bem] = /* hoist-static*/ createNamespace('thead');

defineOptions({
  name
});

let theadRight = ref();

// const [thNoWidthRefs, setThNoWidthRefs] = useRefs();

const slots = useSlots();

const _style = $computed(() => {
  return (item) => {
    const alignType = item?.align === 'left' ? 'flex-start' : item?.align === 'right' ? 'flex-end' : 'center';
    const _align = { justifyContent: alignType || 'center', textAlign: item?.align || 'center' };
    return item.width ? { width: addUnit(item.width, true), ..._align } : _align;
  };
});

// 当前排序的索引
const activeIndex = $computed(() => {
  const _columns = columns as ColumnsProps[] & { activeIndex?: number };
  return _columns?.activeIndex
    ? _columns?.activeIndex
    : columns.findIndex((item) => {
        return item.sorter === true;
      });
});

const sortClass = $computed(() => {
  return (item, index) => {
    return ['translate-x-2px', bem('sort'), { 'rotate-180': item.sortDirection === 'asc' }, activeIndex === index ? 'opacity-100' : 'opacity-0'];
  };
});

// 排序事件
function onSortChange(item, index, columns) {
  item.sortDirection = item.sortDirection === 'asc' ? 'desc' : 'asc';
  columns.activeIndex = index;
  columns.scrollLeft = theadRight.value.scrollLeft;
  emit('SortChange', {
    sortDirection: item.sortDirection,
    dataIndex: item?.dataIndex,
    index,
    item
  });
}

// 渲染表头单元格
const renderItem = (isFixed?) => {
  return (
    <div class={bem('tr')}>
      {columns.map((item, index) => {
        return (isFixed && item.fixed) || (!isFixed && !item.fixed) ? (
          <span
            class={[bem('th'), item?.headerClassName, { [bem('th__custom_width') as string]: !item.width }, { 'translate-x-7px': item?.sorter }]}
            key={index}
            style={_style(item)}
            onClick={item?.sorter ? () => onSortChange(item, index, columns) : () => {}}
          >
            <span class={bem('cell')}>{item.title}</span>
            {item?.sorter ? <span class={sortClass(item, index)}>&emsp;</span> : null}
          </span>
        ) : null;
      })}
    </div>
  );
};

// 表头内容
const renderHeader = () => {
  return (
    <div id={`${namespace}-thead`} class={bem()}>
      <div class={bem('left')}>{renderItem(true)}</div>
      <div ref={theadRight} class={bem('right')}>
        {renderItem()}
      </div>
      {slots.default?.()}
    </div>
  );
};

// function handleScroll(e) {
//   console.log('currentScrollName', currentScrollName);
//   const tbody = document.querySelector(`#${namespace}-tbody .${namespace}-table__tbody__right`);
//   if (tbody && currentScrollName === 'thead') {
//     console.log(e.target.scrollLeft, tbody.scrollLeft);
//     tbody.scrollLeft = e.target.scrollLeft;
//   }
// }

defineRender(() => {
  return renderHeader();
});

defineExpose({
  theadRight
});
</script>

<style lang="less">
@prefix-cls: ~'@{pro-namespace}-thead';
@prefix-var: ~'--@{prefix-cls}';
@prefix-var-table: ~'--@{pro-namespace}-table';

body {
  @{prefix-var}-height: 40px;
  @{prefix-var}-background: white;
  @{prefix-var}-color: black;
  @{prefix-var}-font-size: 14px;
  @{prefix-var}-font-weight: 500;
  @{prefix-var}-padding: 10px 5px;
  @{prefix-var}-line-clamp: 4;
  @{prefix-var}-border-bottom-color: #eee;
  @{prefix-var}-show-border-bottom: none;
}

.@{prefix-cls} {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  background: var(~'@{prefix-var}-background');
  box-sizing: border-box;

  &::after {
    display: var(~'@{prefix-var}-show-border-bottom');
    .hairline-bottom(var(~'@{prefix-var}-border-bottom-color'));
  }

  .@{prefix-cls}__right {
    flex: auto;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;

    &::-webkit-scrollbar {
      display: none;
    }


    .@{prefix-cls}__th:last-child {
      padding-right: var(~'@{prefix-var-table}-last-col-padding-right');
    }
  }

  .@{prefix-cls}__left {
    box-sizing: border-box;

    .@{prefix-cls}__th:first-child {
      padding-left: var(~'@{prefix-var-table}-first-col-padding-left');
    }
  }

  .@{prefix-cls}__tr {
    display: flex;
    color: var(~'@{prefix-var}-color');
    font-size: var(~'@{prefix-var}-font-size');
    font-weight: var(~'@{prefix-var}-font-weight');

    .@{prefix-cls}__th {
      box-sizing: border-box;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      padding: var(~'@{prefix-var}-padding');
      width: var(~'@{prefix-var-table}-base-th-width');

      .@{prefix-cls}__cell {
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(~'@{prefix-var}-line-clamp');
        //width: 100%;
      }
    }

  }

  .@{prefix-cls}__sort {
    display: inline-block;
    width: 7px;
    height: 10px;
    background: url(./assets/sort_triangle.png) no-repeat;
    background-size: cover;
  }
}
</style>
