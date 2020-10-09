import {
  GetColumnDefinitionsMethod,
  GetSampleRowsMethod,
  DataResponseRow,
  ColumnDefinitionMap,
  FilterOperation,
} from "./pluginMethods";

export interface GetExampleRowsMethod {
  (argument: {
    connection: any;
    tableName: string;
    columns?: ColumnDefinitionMap;
    getSampleRows: GetSampleRowsMethod;
    getColumns: GetColumnDefinitionsMethod;
  }): Promise<DataResponseRow[]>;
}

export interface GetColumnExamplesMethod {
  (argument: {
    connection: any;
    tableName: string;
    getSampleRows: GetSampleRowsMethod;
    getColumns: GetColumnDefinitionsMethod;
  }): Promise<
    Array<{
      key: string;
      description?: string;
      examples?: Array<any>;
    }>
  >;
}

export const getExampleRows: GetExampleRowsMethod = async ({
  connection,
  tableName,
  columns,
  getSampleRows,
  getColumns,
}) => {
  let rows = await getSampleRows({ connection, tableName });
  if (!rows || rows.length === 0) {
    if (!columns) {
      columns = await getColumns({ connection, tableName });
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
  tableName,
  getSampleRows,
  getColumns,
}) => {
  const rows = await getExampleRows({
    connection,
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
  tableName,
  getSampleRows,
  getColumns,
}) => {
  const columns = await getColumns({ connection, tableName });
  const rows = await getExampleRows({
    connection,
    tableName,
    columns,
    getSampleRows,
    getColumns,
  });

  // only handle columns that support >=
  const choices = [];
  Object.keys(columns).map((colName) => {
    const { filterOperations } = columns[colName];
    if (filterOperations.includes(FilterOperation.GreaterThanOrEqual)) {
      choices.push(colName);
    }
  });

  return choices.map((col) => {
    return {
      key: col,
      examples: rows.map((row) => row[col]),
    };
  });
};
