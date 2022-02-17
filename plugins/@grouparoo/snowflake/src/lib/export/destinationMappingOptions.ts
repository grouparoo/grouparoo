import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ connection, destinationOptions }) => {
    const schema = connection.schemaName;
    const tableName = destinationOptions.table;
    const query = `SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = :1 AND TABLE_NAME = :2`;
    const params = [schema, tableName];

    // Run the query
    const rows = await connection.execute(query, params);

    const required: {
      key: string;
      type: DestinationMappingOptionsResponseType;
      important: boolean;
    }[] = [];

    const known: {
      key: string;
      type: DestinationMappingOptionsResponseType;
      important: boolean;
    }[] = [];

    for (const row of rows) {
      const type = mapTypesFromSnowflakeToGrouparoo(row.DATA_TYPE);
      if (type) {
        if (
          row.IS_NULLABLE === "NO" ||
          row.COLUMN_NAME === destinationOptions.primaryKey
        ) {
          required.push({
            key: row.COLUMN_NAME,
            type: mapTypesFromSnowflakeToGrouparoo(row.DATA_TYPE),
            important: true,
          });
        } else {
          known.push({
            key: row.COLUMN_NAME,
            type: mapTypesFromSnowflakeToGrouparoo(row.DATA_TYPE),
            important: true,
          });
        }
      }
    }

    return {
      labels: {
        property: {
          singular: "Exported Property",
          plural: "Exported Properties",
        },
        group: {
          singular: "Exported Groups",
          plural: "Exported Groups",
        },
      },
      properties: {
        required,
        known,
        allowOptionalFromProperties: false,
      },
    };
  };

const mapTypesFromSnowflakeToGrouparoo = (snowflakeType) => {
  switch (snowflakeType) {
    case "NUMBER":
    case "DECIMAL":
    case "NUMERIC":
    case "INT":
    case "INTEGER":
    case "BIGINT":
    case "SMALLINT":
    case "TINYINT":
    case "BYTEINT":
      return "integer";
    case "FLOAT":
    case "FLOAT4":
    case "FLOAT8":
    case "DOUBLE":
    case "DOUBLE PRECISION":
    case "REAL":
      return "float";
    case "VARCHAR":
    case "CHAR":
    case "CHARACTER":
    case "TEXT":
    case "STRING":
    case "BINARY":
    case "VARBINARY":
      return "string";
    case "DATE":
      return "date";
    case "DATETIME":
    case "TIME":
    case "TIMESTAMP":
    case "TIMESTAMP_LTZ":
    case "TIMESTAMP_NTZ":
    case "TIMESTAMP_TZ":
      return "string";
    case "BOOLEAN":
      return "boolean";
  }
  return null;
};
