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
import { TableSpeculation } from "./tableSpeculation";

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
    }
  ) {
    super();
    this.name = `${name}:table:source`;
    this.description = `Config for a ${name} table Source. Construct Sources and Properties without writing SQL.`;
    this.parentId = "appId";
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Source`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of the ${name} App to use for this Source, e.g: \`--parent data_warehouse\``,
      },
      from: {
        required: false,
        description: "The table to use for this source, e.g: `--from users`",
      },
      mapping: {
        required: false,
        description:
          'The mapping between a column in this table and a Grouparoo Property, e.g: `--mapping "id=user_id"`',
      },
      with: {
        required: false,
        description:
          "The names of the columns to create properties from, e.g: `--with users,id,first_name,last_name`. Defaults to '*'",
      },
      "high-water-mark": {
        required: false,
        description:
          "The name of the column to uses for this Source's Schedule, e.g: `--high-water-mark updated_at`.",
      },
    };
    this.getters = getters;
  }

  async run({ params }) {
    params["__pluginName"] = this.name.split(":")[0];
    params["schedule_id"] = this.extendId("schedule");

    if (typeof params.highWaterMark === "boolean") {
      throw new Error(
        "You must pass a column name with the --high-water-mark option."
      );
    }

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

    // write the source + schedule
    let response = await this.mustacheAllFiles(
      params,
      [path.join(templateRoot, "table-source", "*.template")],
      "sources"
    );

    // write the properties
    params.sourceId = params.id;
    params["__typeOptions"] = PropertyTypes.map((v) => `"${v}"`).join(", ");
    params["__aggregationMethodOptions"] = Object.values(AggregationMethod)
      .map((v) => `"${v}"`)
      .join(", ");
    params["__filterOptions"] = Object.values(FilterOperation).join(", ");

    const propertyResponses = await Promise.all(
      columnsMap.map(async (col) => {
        const propertyParams = Object.assign({}, params);
        propertyParams.id = JSON.stringify(col.column);
        propertyParams.column = JSON.stringify(col.column);
        propertyParams.type = JSON.stringify(col.type);
        propertyParams.unique = JSON.stringify(col.unique);
        return this.mustacheAllFiles(
          propertyParams,
          [path.join(templateRoot, "table-property", "*.template")],
          "properties"
        );
      })
    );

    propertyResponses.forEach((r) => Object.assign(response, r));

    return response;
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
    this.inputs = {
      id: {
        required: true,
        description: `The id of this new Property`,
        formatter: (p) => this.formatId(p),
      },
      parent: {
        required: true,
        description: `The id of the ${name} Source to use for this Property, e.g: \`--parent table_source\``,
      },
    };
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
    : []; // by default, we use no columns from the source table

  if (!appId || !tableName) return map;

  let app: App;
  try {
    app = await App.findById(appId);
  } catch (error) {
    error.message += ".  Did you `grouparoo apply` to add your parent?";
    throw error;
  }
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
            type: TableSpeculation.columnType(k, columns[k].type),
            unique: TableSpeculation.isUniqueColumn(k),
          });
        }
      }

      if (params.with.replace(/['"]+/g, "") && map.length === 0) {
        throw new Error(
          'Could not find any listed columns in source. If using * make sure you used quotes ("*")?'
        );
      }
    }
  } finally {
    await app.disconnect();
  }

  return map;
}
