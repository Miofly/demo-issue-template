/** 推迟解析条件类型的额外效果 */
type Other = "a" | "b";
type Merge<T> = T extends "x" ? T : Other; // T 等于匹配的类型，然后加上 Other 联合类型一起返回

type Values = Merge<"x" | "y">;
