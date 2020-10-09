import { DataResponse, DataResponseRow } from "../shared/types";
export { DataResponse, DataResponseRow };

export const queryKey = "query";

export interface ExecuteQueryMethod {
  (argument: { connection: any; query: string }): Promise<DataResponseRow[]>;
}

export interface ValidateQueryMethod {
  (argument: { query: string }): void;
}
