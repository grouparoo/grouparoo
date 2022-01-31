import {
  GetColumnDefinitionsMethod,
  GetSampleRowsMethod,
  DataResponseRow,
  DataResponse,
  ColumnDefinitionMap,
  SimpleAppOptions,
} from "./pluginMethods";
import { FilterOperation, SimpleSourceOptions } from "@grouparoo/core";

export interface GetExampleRowsMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    appId: string;
    tableName: string;
    columns?: ColumnDefinitionMap;
    getSampleRows: GetSampleRowsMethod;
    getColumns: GetColumnDefinitionsMethod;
  }): Promise<DataResponseRow[]>;
}

export interface GetColumnExamplesMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    appId: string;
    tableName: string;
    getSampleRows: GetSampleRowsMethod;
    getColumns: GetColumnDefinitionsMethod;
  }): Promise<
    {
      key: string;
      description?: string;
      examples?: DataResponse[];
    }[]
  >;
}

export const getExampleRows: GetExampleRowsMethod = async ({
  connection,
  appOptions,
  sourceOptions,
  appId,
  tableName,
  columns,
  getSampleRows,
  getColumns,
}) => {
  let rows = await getSampleRows({
    connection,
    appOptions,
    sourceOptions,
    appId,
    tableName,
  });
  if (!rows || rows.length === 0) {
    if (!columns) {
      columns = await getColumns({
        connection,
        appOptions,
        sourceOptions,
        appId,
        tableName,
      });
    }
    rows = makeRowsFromColumns(columns);
  }
  return rows;
};

function makeRowsFromColumns(columns: ColumnDefinitionMap): DataResponseRow[] {
  // use columns for preview
  const sample: DataResponseRow = {};
  Object.keys(columns).forEach((colName) => {
    sample[colName] = null;
  });
  return [sample];
}

export const getColumnExamples: GetColumnExamplesMethod = async ({
  connection,
  appOptions,
  appId,
  sourceOptions,
  tableName,
  getSampleRows,
  getColumns,
}) => {
  const rows = await getExampleRows({
    connection,
    appOptions,
    sourceOptions,
    appId,
    tableName,
    getSampleRows,
    getColumns,
  });
  const columns = Object.keys(rows[0]);
  return columns.map((col) => {
    return {
      key: col,
      examples: rows.map((row) => row[col]),
    };
  });
};

export const getSortableColumnExamples: GetColumnExamplesMethod = async ({
  connection,
  appOptions,
  sourceOptions,
  appId,
  tableName,
  getSampleRows,
  getColumns,
}) => {
  const columns = await getColumns({
    connection,
    appOptions,
    sourceOptions,
    appId,
    tableName,
  });
  const rows = await getExampleRows({
    connection,
    appOptions,
    sourceOptions,
    appId,
    tableName,
    columns,
    getSampleRows,
    getColumns,
  });

  // only handle columns that support >=
  const choices = [];
  Object.keys(columns).map((colName) => {
    choices.push(colName);
  });

  return choices.map((col) => {
    return {
      key: col,
      examples: rows.map((row) => row[col]),
    };
  });
};
