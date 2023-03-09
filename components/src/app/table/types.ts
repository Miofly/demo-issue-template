import type { Ref } from 'vue';

type AlignType = 'left' | 'center' | 'right';

export interface ColumnsProps {
  /** 列头显示文字 */
  title: Numberish;
  /** 是否固定在左侧 */
  fixed?: boolean;
  /** 列宽 */
  width?: Numberish;
  /** 设置列的对齐方式 */
  align?: AlignType;
  /** 设置表体对齐方式 优先级 > align */
  cellAlign?: AlignType;
  /** 列数据在数据项中对应的路径 */
  dataIndex?: string;
  /** 自定义 render 参数分别为当前行的值，当前行数据，行索引 */
  render?: (text, record, index) => JSX.Element | Numberish;
  /** render 的上一级 Dom 完全自定义 */
  renderCell?: (text, record, index) => JSX.Element | Numberish;
  /** 自定义列 class */
  cellClassName?: string | ((record) => string);
  /** 自定义表头 class */
  headerClassName?: string;
  /** 是否开启排序 */
  sorter?: boolean;
  /** 排序设置的默认顺序 */
  sortDirection?: 'desc' | 'asc';
  /** 空数据占位符 */
  emptyPlaceholder?: string
}

export type TargetRef = Element | Ref<Element | undefined> | Window | any;

export const EXTRA_WIDTH = 10;

/** 排序的信息 */
export type SortDataProps = {
  /** 索引 */
  index: number;
  item: ColumnsProps;
  /** 当前表格的 scrollLeft 值 */
  scrollLeft?: number;
} & Pick<ColumnsProps, 'dataIndex' | 'sortDirection'>;
