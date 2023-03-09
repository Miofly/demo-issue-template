## Props

| 参数             | 说明                                                | 类型           | 默认值  |
| ---------------- | --------------------------------------------------- | -------------- | ------- |
| columns          | 表头数据                                            | ColumnsProps[] | -       |
| tableData        | 表格数据                                            | any[]          | -       |
| emptyPlaceholder | 空数据占位符                                        | Numberish      | `-`     |
| headerSticky     | 表头是否应用 `sticky`(注意 `sticky` 与外部布局有关) | boolean        | `false` |
| stickyTop        | sticky top 的值                                     | number         | 0       |

### ColumnsProps

| 参数            | 说明                                                     | 类型                                              | 默认值   |
| --------------- | -------------------------------------------------------- | ------------------------------------------------- | -------- |
| title           | 列头显示的文字                                           | Numberish                                         | -        |
| fixed           | 是否固定在左侧                                           | boolean                                           | `false`  |
| width           | 列宽                                                     | Numberish                                         | -        |
| align           | 设置列的对齐方式                                         | AlignType                                         | `center` |
| cellAlign       | 设置表体对齐方式 优先级大于 `align`                      | AlignType                                         | -        |
| dataIndex       | 列数据在数据项中对应的索引                               | string                                            | -        |
| render          | 自定义 `render` 参数分别为当前行的值，当前行数据，行索引 | (text, record, index) => JSX.Element or Numberish | -        |
| cellClassName   | 自定义列 `class`                                         | string                                            | -        |
| headerClassName | 自定义表头 `class`                                       | string                                            | -        |
