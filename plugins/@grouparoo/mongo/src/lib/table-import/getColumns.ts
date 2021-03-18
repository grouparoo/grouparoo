import {
  GetColumnDefinitionsMethod,
  ColumnDefinitionMap,
  FilterOperation,
  ColumnType,
} from "@grouparoo/app-templates/dist/source/table";

import { getMostTrendingType } from "./util";

export const getColumns: GetColumnDefinitionsMethod = async ({
  connection,
  tableName,
  appOptions,
  sourceOptions,
}) => {
  const map: ColumnDefinitionMap = {};
  if (sourceOptions) {
    const fields = sourceOptions.fields.toString().split(",");
    for (const field of fields) {
      const name = String(field);
      const { type, filterOperations } = await getTypeInfo(
        connection,
        tableName,
        name
      );
      map[name] = {
        name,
        type,
        filterOperations,
        data: field,
      };
    }
  }
  return map;
};

const getTypeInfo = async function (
  connection: any,
  tableName: string,
  fieldName: string
): Promise<{ type: ColumnType; filterOperations: FilterOperation[] }> {
  const ops = [FilterOperation.Equal, FilterOperation.NotEqual];
  let type: ColumnType = null;
  let compare = false;
  let contains = false;

  let fieldType: string = await getMostTrendingType(
    connection,
    tableName,
    fieldName
  );

  switch (fieldType.toLowerCase()) {
    // https://docs.mongodb.com/manual/reference/operator/aggregation/type/
    // numeric
    case "int":
    case "long":
      type = "integer";
      compare = true;
      break;

    case "decimal":
    case "double":
      type = "float";
      compare = true;
      break;

    // date and time
    case "timestamp":
    case "date":
      type = "date";
      compare = true;
      break;

    // String types
    case "objectid":
    case "string":
    case "symbol":
      type = "string";
      contains = true;
      break;

    // binary types
    case "bindata":
      break;

    // boolean types
    case "bool":
      type = "boolean";
      break;

    // semi-structured types
    case "javascript":
    case "array":
      break;

    // other?
    default:
      break;
  }

  if (compare) {
    ops.push(FilterOperation.GreaterThan);
    ops.push(FilterOperation.GreaterThanOrEqual);
    ops.push(FilterOperation.LessThan);
    ops.push(FilterOperation.LessThanOrEqual);
  }
  if (contains) {
    ops.push(FilterOperation.Contain);
    ops.push(FilterOperation.NotContain);
  }
  return { type, filterOperations: ops };
};
