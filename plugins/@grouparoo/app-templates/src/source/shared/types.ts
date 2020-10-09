export type DataResponse = string | number | boolean | Date;

export interface DataResponseRow {
  [column: string]: DataResponse;
}
