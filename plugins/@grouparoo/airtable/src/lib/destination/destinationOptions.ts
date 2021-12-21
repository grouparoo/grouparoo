import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { AirtablePropertyTypes, Table, TableField } from "../client/models";
import { IClient } from "../client/interfaces/iClient";

export interface AirtableDestinationOptions extends SimpleDestinationOptions {
  tableId: string;
  primaryKey: string;
}

export const destinationOptions: DestinationOptionsMethod<IClient> = async ({
  connection,
  destinationOptions,
}) => {
  const optionHandler = new DestinationOptionsHandler(connection);

  return await optionHandler.getDestinationOptions(
    destinationOptions as AirtableDestinationOptions
  );
};

class DestinationOptionsHandler {
  private client: IClient;
  constructor(connection: IClient) {
    this.client = connection;
  }

  public async getDestinationOptions(
    destinationOptions: AirtableDestinationOptions
  ): Promise<DestinationOptionsMethodResponse> {
    const out: DestinationOptionsMethodResponse = {};
    Object.assign(out, await this.getRecordOptions(destinationOptions));
    return out;
  }

  private async getTables(): Promise<Map<string, Table>> {
    const tables = await this.client.listTables();
    return new Map(tables.map((table) => [table.id, table]));
  }

  private async getSchema(tableId: string): Promise<string[]> {
    return this.getTableFields(tableId);
  }

  private async getRecordOptions(
    destinationOptions: AirtableDestinationOptions
  ): Promise<DestinationOptionsMethodResponse> {
    const out: DestinationOptionsMethodResponse = {
      tableId: { type: "list", options: [], descriptions: [] },
      primaryKey: { type: "pending", options: [] },
    };
    const tables = await this.getTables();
    const sortedTables = Array.from(tables)
      .map(([, table]) => {
        return {
          option: table.id,
          description: table.name,
        };
      })
      .sort((a, b) => a.description.localeCompare(b.description));

    out.tableId.options = sortedTables.map((value) => value.option);
    out.tableId.descriptions = sortedTables.map((value) => value.description);

    const tableId = destinationOptions.tableId;
    if (tableId) {
      const fields = await this.getSchema(tableId);
      out.primaryKey.type = "typeahead";
      out.primaryKey.options = fields;
      if (!fields.includes(destinationOptions.primaryKey)) {
        destinationOptions.primaryKey = "";
      }
    } else {
      destinationOptions.tableId = "";
      destinationOptions.primaryKey = "";
    }
    return out;
  }

  private async getTableFields(tableId: string): Promise<string[]> {
    const table = await this.getTableById(tableId);
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

  private async getTableById(tableId: string): Promise<Table> {
    return this.client.getTable(tableId);
  }
}

function tableFieldIsWritable(field: TableField): boolean {
  switch (field.type) {
    case AirtablePropertyTypes.EMAIL:
      return true;
    case AirtablePropertyTypes.SINGLELINE:
      return true;
    case AirtablePropertyTypes.DATE:
      return true;
    default:
      return false;
  }
}

export { DestinationOptionsHandler };
