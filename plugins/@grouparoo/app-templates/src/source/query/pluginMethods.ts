import { SimpleAppOptions, SimpleSourceOptions } from "@grouparoo/core";
export { SimpleAppOptions };

import { DataResponse, DataResponseRow } from "../shared/types";
export { DataResponse, DataResponseRow };

export const queryKey = "query";

export interface ExecuteQueryMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    appId: string;
    query: string;
  }): Promise<DataResponseRow[]>;
}

export interface ValidateQueryMethod {
  (argument: { query: string }): void;
}
