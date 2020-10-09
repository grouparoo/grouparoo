import { SimpleAppOptions } from "@grouparoo/core";
export { SimpleAppOptions };

import { DataResponse, DataResponseRow } from "../shared/types";
export { DataResponse, DataResponseRow };

export const aggregationMethodKey = "aggregation method";
export const sortColumnKey = "sort column";
export const columnNameKey = "column";
export const tableNameKey = "table";

export enum AggregationMethod {
  Exact = "exact",
  Average = "average",
  Count = "count",
  Sum = "sum",
  Min = "min",
  Max = "max",
  MostRecentValue = "most recent value",
  LeastRecentValue = "least recent value",
}
export enum FilterOperation {
  Equal = "equals",
  NotEqual = "does not equal",
  GreaterThan = "greater than",
  GreaterThanOrEqual = "greater than or equal to",
  LessThan = "less than",
  LessThanOrEqual = "less than or equal to",
  Contain = "contains",
  NotContain = "does not contain",
}

export interface MatchCondition {
  columnName: string;
  filterOperation: FilterOperation;
  value: DataResponse;
  // TODO: there is more in ProfilePropertyRuleFiltersWithKey. How does those happen?
  // TODO: match (now value) is optional. Is that with presence operation?
  // export interface ProfilePropertyRuleFiltersWithKey {
  //     key: string;
  //     op: string;
  //     match?: string | number | boolean;
  //     relativeMatchNumber?: number;
  //     relativeMatchUnit?: string;
  //     relativeMatchDirection?: string;
  // }
}
export interface ColumnDefinition {
  name: string;
  filterOperations: FilterOperation[];
  data?: any;
}
export interface ColumnDefinitionMap {
  [columnName: string]: ColumnDefinition;
}
export interface GetColumnDefinitionsMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    appGuid: string;
    tableName: string;
  }): Promise<ColumnDefinitionMap>;
}

export interface GetSampleRowsMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    appGuid: string;
    tableName: string;
  }): Promise<DataResponseRow[]>;
}
export interface GetPropertyValueMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    appGuid: string;
    tableName: string;
    columnName: string;
    sortColumn: string;
    matchConditions: MatchCondition[];
    aggregationMethod: AggregationMethod;
    isArray: boolean;
  }): Promise<DataResponse[]>;
}
export interface TableDefinition {
  name: string;
  data?: any;
}
export interface TableDefinitionMap {
  [tableName: string]: TableDefinition;
}
export interface GetTablesMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    appGuid: string;
  }): Promise<TableDefinitionMap>;
}
export interface GetChangedRowsMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    appGuid: string;
    tableName: string;
    highWaterMarkCondition: MatchCondition;
    limit: number;
    sourceOffset: number | string;
    highWaterMarkAndSortColumnASC: string;
    secondarySortColumnASC: string;
    highWaterMarkKey: string; // for the result in the returned row
  }): Promise<DataResponseRow[]>;
}

export interface GetChangedRowCountMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    appGuid: string;
    tableName: string;
    highWaterMarkCondition: MatchCondition;
  }): Promise<number>;
}
