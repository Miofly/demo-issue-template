export interface ResultData<T> {
  code: number,
  subCode: string,
  data: T | null | undefined,
  msg: string
}

export interface PageResultData<T> {
  code: number,
  subCode: string,
  data: T | null | undefined,
  msg: string,
  pageSize: number,
  pageIndex: number,
  totalCount: number,
  pageCount: number
}
