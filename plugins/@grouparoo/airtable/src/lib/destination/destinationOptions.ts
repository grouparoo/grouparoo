import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
  PluginOptionType,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { TableField } from "../client/models";
import { IClient } from "../client/interfaces/iClient";
import { mapTypesFromAirtableToGrouparoo } from "./destinationMappingOptions";

export interface AirtableDestinationOptions extends SimpleDestinationOptions {
  table: string;
  primaryKey: string;
}

export const destinationOptions: DestinationOptionsMethod<IClient> = async ({
  connection,
  destinationOptions,
}) => {
  const optionHandler = new DestinationOptionsHandler(
    connection,
    destinationOptions as AirtableDestinationOptions
  );
  return optionHandler.getDestinationOptions();
};

interface OptionGetter {
  type: PluginOptionType;
  options?: string[];
  descriptions?: string[];
}

class DestinationOptionsHandler {
  private client: IClient;
  private options: AirtableDestinationOptions;
  private meta: boolean;
  constructor(
    connection: IClient,
    destinationOptions: AirtableDestinationOptions
  ) {
    this.client = connection;
    this.options = destinationOptions;
    this.meta = null;
  }

  public async getDestinationOptions(): Promise<DestinationOptionsMethodResponse> {
    const { access } = await this.client.checkMeta();
    this.meta = access;

    const out: DestinationOptionsMethodResponse = {};
    out.table = await this.getTableOptions();
    out.primaryKey = await this.getKeyOptions();
    return out;
  }

  private async getTableOptions(): Promise<OptionGetter> {
    const table = this.options.table;
    if (!this.meta) {
      // can't inspect, put in the name!
      return { type: "text" };
    }
    const sortedTables = await this.getTablesAndIds();
    const options = sortedTables.map((value) => value.option);
    if (!options.includes(table)) {
      this.options.table = "";
      this.options.primaryKey = "";
    }
    const descriptions = sortedTables.map((value) => value.description);
    return { type: "list", options, descriptions };
  }

  private async getKeyOptions(): Promise<OptionGetter> {
    const table = this.options.table;
    const primaryKey = this.options.primaryKey;
    if (!table) {
      // hasn't set yet
      return { type: "pending", options: [] };
    }

    const options = await this.getTableFields(table);
    if (options.length === 0) {
      return { type: "text" };
    }
    if (!options.includes(primaryKey)) {
      this.options.primaryKey = "";
    }

    return { type: "typeahead", options };
  }

  private async getTablesAndIds(): Promise<
    Array<{ option: string; description: string }>
  > {
    const tables = await this.client.listTables();
    const mapped = new Map(tables.map((table) => [table.id, table]));
    const sortedTables = Array.from(mapped)
      .map(([, table]) => {
        return {
          option: table.id,
          description: table.name,
        };
      })
      .sort((a, b) => a.description.localeCompare(b.description));
    return sortedTables;
  }

  private async getTableFields(tableIdOrName: string): Promise<string[]> {
    const table = await this.client.getTable(tableIdOrName);
    const names = [];
    if (table.fields) {
      for (const property of table.fields) {
        if (tableFieldIsWritable(property)) {
          names.push(property.name);
        }
      }
    }
    return [...new Set(names.sort())];
  }
}

export const tableFieldIsWritable = (field: TableField): boolean => {
  return !!mapTypesFromAirtableToGrouparoo(field);
};
