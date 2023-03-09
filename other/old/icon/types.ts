export interface IconProps {
  /** 是否显示图标右上角小红点 */
  dot?: boolean;
  /** 图标名称或图片链接 */
  icon: string;
  /** 图标大小 */
  size?: Numberish;
  /** 图标右上角徽标的内容 */
  badge?: Numberish;
  /** 图标颜色 */
  color?: string;
  /** 类名前缀，用于使用自定义图标 */
  classPrefix?: string;
  spin?: boolean;
  cursor?: boolean;
}
