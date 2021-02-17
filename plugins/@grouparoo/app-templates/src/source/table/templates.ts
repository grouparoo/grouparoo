import path from "path";
import { ConfigTemplate, PropertyTypes, App } from "@grouparoo/core";
import {
  AggregationMethod,
  FilterOperation,
  GetTablesMethod,
  GetColumnDefinitionsMethod,
  TableDefinitionMap,
  ColumnDefinitionMap,
} from "./";

interface ConfigTemplateColumn {
  column: string;
  type: typeof PropertyTypes[number];
  unique: boolean;
}

abstract class ConfigTemplateWithGetters extends ConfigTemplate {
  getters: {
    getTables: GetTablesMethod;
    getColumns: GetColumnDefinitionsMethod;
  };
}

const templateRoot = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "public",
  "templates"
);

export class TableSourceTemplate extends ConfigTemplateWithGetters {
  constructor(
    name: string,
    getters: {
      getTables: GetTablesMethod;
      getColumns: GetColumnDefinitionsMethod;
    },
    files = [path.join(templateRoot, "table-source", "*.template")]
  ) {
    super();
    this.name = `${name}:table:source`;
    this.description = `Config for a ${name} Table Source. Construct properties from the data in the table without writing SQL.`;
    this.files = files;
    this.destinationDir = "sources";
    this.parentId = "appId";
    this.getters = getters;
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["schedule_id"] = this.extendId("schedule");

    let columnsMap: ConfigTemplateColumn[] = await loadTablesAndColumns(
      this,
      params
    );

    if (params.mapping) {
      const parts = JSON.parse(params.mapping).split("=");
      if (!params.mapping.includes("=") || parts.length !== 2) {
        throw new Error("invalid mapping format");
      }
      params["__mappingKey"] = JSON.stringify(parts[0]);
      params["__mappingValue"] = JSON.stringify(parts[1]);

      // are we bootstrapping?
      const columns = columnsMap.map((o) => o.column);
      if (columns.includes(parts[0])) {
        const bootstrappedCol = columnsMap.find((o) => o.column === parts[0]);
        params["__bootstrappedId"] = JSON.stringify(parts[1]);
        params["__bootstrappedColumn"] = JSON.stringify(bootstrappedCol.column);
        params["__bootstrappedType"] = JSON.stringify(bootstrappedCol.type);
        columnsMap = columnsMap.filter((o) => o.column !== parts[0]);
      }
    }

    if (Object.keys(columnsMap).length > 0) {
      params.columnsMap = columnsMap;
      // mustache helpers to pluck a property from the object
      params.__column = function () {
        return JSON.stringify(this.column);
      };
      params.__type = function () {
        return JSON.stringify(this.type);
      };
      params.__unique = function () {
        return this.unique;
      };
    }

    return this.mustacheAllFiles(params);
  }
}

export class TablePropertyTemplate extends ConfigTemplate {
  constructor(
    name: string,
    files = [path.join(templateRoot, "table-property", "*.template")]
  ) {
    super();
    this.name = `${name}:table:property`;
    this.description = `Config for a ${name} Table Property`;
    this.files = files;
    this.destinationDir = "properties";
    this.parentId = "sourceId";
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    params["__aggregationMethodOptions"] = Object.values(AggregationMethod)
      .map((v) => `"${v}"`)
      .join(", ");
    params["__filterOptions"] = Object.values(FilterOperation).join(", ");
    return this.mustacheAllFiles(params);
  }
}

async function loadTablesAndColumns(
  template: ConfigTemplateWithGetters,
  params
) {
  let tables: TableDefinitionMap = {};
  let columns: ColumnDefinitionMap = {};
  let map: ConfigTemplateColumn[] = [];

  const appId = params.parent ? JSON.parse(params.parent) : null;
  const tableName = params.from ? JSON.parse(params.from) : null;
  const withColumns: string[] = params.with
    ? JSON.parse(params.with)
        .split(",")
        .map((e) => e.trim())
    : ["*"];

  if (!appId || !tableName) return map;

  const app = await App.findById(appId);
  const appOptions = await app.getOptions();
  const connection = await app.getConnection();

  try {
    if (template?.getters.getTables) {
      tables = await template.getters.getTables({
        appId,
        appOptions,
        connection,
      });
    }
    if (template?.getters.getColumns) {
      if (!tables[tableName]) {
        throw new Error(`table ${tableName} not found within app ${appId}`);
      }

      columns = await template.getters.getColumns({
        appId,
        tableName,
        appOptions,
        connection,
      });

      for (const k in columns) {
        if (withColumns.includes(k) || withColumns[0] === "*") {
          map.push({
            column: k,
            type: columns[k].type,
            unique: uniqueColumnNames.includes(k),
          });
        }
      }
    }
  } finally {
    await app.disconnect();
  }

  return map;
}

// TODO: Hack!
const uniqueColumnNames = [
  "email",
  "email_address",
  "id",
  "user_id",
  "userId",
  "uuid",
  "guid",
];
