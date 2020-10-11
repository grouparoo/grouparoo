import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
} from "@grouparoo/app-templates/src/source/table";

export const getColumns: GetColumnDefinitionsMethod = async ({
  connection,
  tableName,
}) => {
  return getColumnsInternal({ connection, tableName });
};

export const getColumnsInternal = async ({ connection, tableName }) => {
  const query = `SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName`;
  const options = {
    query,
    params: {
      tableName,
    },
  };

  // Run the query
  const [rows] = await connection.query(options);

  const map: ColumnDefinitionMap = {};
  for (const row of rows) {
    const name = row.column_name;
    map[row.column_name] = {
      name,
      filterOperations: getFilterOperations(row.data_type),
      data: row,
    };
  }
  return map;
};

const getFilterOperations = function (dataType: string): FilterOperation[] {
  const ops = [FilterOperation.Equal, FilterOperation.NotEqual];

  switch (dataType) {
    case "DATE":
    case "DATETIME":
    case "TIME":
    case "TIMESTAMP":
    case "NUMERIC":
    case "INT64":
    case "FLOAT64":
      ops.push(FilterOperation.GreaterThan);
      ops.push(FilterOperation.GreaterThanOrEqual);
      ops.push(FilterOperation.LessThan);
      ops.push(FilterOperation.LessThanOrEqual);
      break;
    case "STRING":
      ops.push(FilterOperation.Contain);
      ops.push(FilterOperation.NotContain);
      break;
    case "BOOL":
      break;
    case "GEOGRAPHY":
    case "ARRAY":
    case "STRUCT":
    case "BYTES":
    default:
      break;
  }

  return ops;
};

// export async function getColumns(
//   connection,
//   tableName: string
// ): Promise<{ [colName: string]: any }> {
//   const query = `SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName`;
//   const options = {
//     query,
//     params: {
//       tableName,
//     },
//   };

//   // Run the query
//   const [rows] = await connection.query(options);
//   const response = {};
//   for (const row of rows) {
//     response[row.column_name] = row;
//   }
//   return response;
// }

// export function supportedEquality(column): Array<string> {
//   const dataType = column.data_type;
//   const ops = ["equals", "does not equal"];

//   switch (dataType) {
//     case "DATE":
//     case "DATETIME":
//     case "TIME":
//     case "TIMESTAMP":
//     case "NUMERIC":
//     case "INT64":
//     case "FLOAT64":
//       ops.push("greater than");
//       ops.push("less than");
//       break;
//     case "STRING":
//       ops.push("contains");
//       ops.push("does not contain");
//       break;
//     case "BOOL":
//       break;
//     case "GEOGRAPHY":
//     case "ARRAY":
//     case "STRUCT":
//     case "BYTES":
//     default:
//       break;
//   }

//   return ops;
// }
