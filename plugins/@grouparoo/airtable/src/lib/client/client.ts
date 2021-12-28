import Airtable, { FieldSet, Record, RecordData, Records } from "airtable";
import { AirtableAppOptions } from "../appOptions";
import Axios, { AxiosRequestHeaders, AxiosError } from "axios";
import { URL } from "url";
import {
  AirtablePropertyTypes,
  ApiTable,
  CreateRecord,
  HealthResponse,
  ListTablesResponse,
  MetaResponse,
  Table,
} from "./models";
import { IClient } from "./interfaces/iClient";
import AirtableError from "airtable/lib/airtable_error";

export class Client implements IClient {
  private readonly apiKey: string;
  private readonly baseClient: Airtable.Base;
  private readonly apiURL: URL;
  private readonly baseId: string;
  private metaChecked: number;
  private metaAccess: boolean;
  constructor(appOptions: AirtableAppOptions) {
    this.apiKey = appOptions.apiKey;
    this.baseClient = new Airtable({
      apiKey: appOptions.apiKey,
      endpointUrl: appOptions.airtableHost,
    }).base(appOptions.baseId);
    this.baseId = appOptions.baseId;
    this.apiURL = new URL(appOptions.airtableHost);
    this.metaChecked = null;
    this.metaAccess = null;
  }
  private defaultHeaders(): AxiosRequestHeaders {
    return {
      Authorization: `Bearer ${this.apiKey}`,
    };
  }
  async health(): Promise<HealthResponse> {
    const meta = await this.checkMeta();
    if (!meta.access) {
      const error = meta.error;
      const statusCode = meta.statusCode || "Unknown";
      switch (meta.statusCode) {
        case 401:
          return { success: false, message: `${error}. Invalid API Key` };
        case 404:
          // doesn't have meta access
          return {
            success: true,
            message:
              "API key valid, but account does not have meta API access. Verify base id manually.",
          };
        default:
          return {
            success: false,
            message: `${error}. Status code: ${statusCode}`,
          };
      }
    }

    try {
      const tables = await this.listTables();
      const message = `Meta API access confirmed. Tables found: ${tables.length}`;
      return { success: true, message };
    } catch (err) {
      const statusCode = err?.response?.status || "Unknown";
      const error = getErrorMessage(err);
      switch (statusCode) {
        case 404:
          // only got here because we have meta access
          // so that means missing base id
          return { success: false, message: `${error}. Invalid Base Id` };
        default:
          return {
            success: false,
            message: `${error}. Status code: ${statusCode}`,
          };
      }
    }
  }

  async checkMeta(): Promise<MetaResponse> {
    const metaEndpoint = new URL("/v0/meta/bases", this.apiURL);
    return Axios.get<MetaResponse>(metaEndpoint.href, {
      headers: this.defaultHeaders(),
    })
      .then((resp) => {
        return {
          body: resp.data,
          statusCode: resp.status,
          error: null,
          access: true,
        };
      })
      .catch((err) => {
        return {
          body: err?.response?.data,
          statusCode: err?.response?.status,
          error: getErrorMessage(err),
          access: false,
        };
      });
  }

  async hasMeta(): Promise<boolean> {
    let check = false;
    // check if we don't know
    if (this.metaAccess !== true && this.metaAccess !== false) check = true;

    // check if it's been 1 hour
    if (this.metaChecked) {
      const checkEvery = 1 * 60 * 60 * 1000;
      const howLong = Date.now() - this.metaChecked;
      if (howLong > checkEvery) check = true;
    }

    if (check) {
      const { access } = await this.checkMeta();
      this.metaChecked = Date.now();
      this.metaAccess = access;
    }

    return this.metaAccess;
  }

  /**
   * Gets a list of tables from the Airtable metadata endpoint
   * @throws AxiosError - Error whenever there is a non 200 response from the api endpoint
   * @returns {Promise<Table[]>} - A Promise of a Airtable Array Table Object
   */
  async listTables(): Promise<ApiTable[]> {
    const listTablesEndpoint = new URL(
      `/v0/meta/bases/${this.baseId}/tables`,
      this.apiURL
    );

    return Axios.get<ListTablesResponse>(listTablesEndpoint.href, {
      headers: this.defaultHeaders(),
    }).then((value) => value.data.tables);
  }

  /**
   * Gets a single table from the list tables endpoints
   * @throws  AxiosError - A potential Axios Error explaining why the request failed
   * @throws AirtableError - Error if there are no tables that match the given tableId
   * @param tableId - String representing the table ID
   * @returns {Promise<Table>} - A Promise of a Airtable Table Object
   */
  async getTable(tableId: string): Promise<Table> {
    const meta = await this.hasMeta();
    if (meta) {
      const tables = await this.listTables();
      for (const table of tables) {
        if (table.id === tableId) {
          return Object.assign({}, table, { idOrName: table.id });
        }
      }
      // also support name
      for (const table of tables) {
        if (table.name === tableId) {
          return Object.assign({}, table, { idOrName: table.id });
        }
      }
    }
    const records = await this.listRecords(tableId);
    return makeTableFromRecords(tableId, records);
  }

  /**
   * @throws  AirtableError
   * @param tableId
   */
  async listRecords(tableId: string): Promise<Records<FieldSet>> {
    return this.baseClient(tableId).select().all();
  }

  async listRecordsByField(
    tableId: string,
    primaryKey: string,
    foreignKeys: string[]
  ): Promise<Records<FieldSet>> {
    const conditionals = foreignKeys.map((key) => `{${primaryKey}}="${key}"`);
    const filterString = `OR(${conditionals.join(",")})`;
    return this.baseClient(tableId)
      .select({
        filterByFormula: filterString,
        maxRecords: foreignKeys.length,
      })
      .all();
  }

  /**
   * @throws AirtableError - Airtable will throw an error if there is any issue destroying the record
   * @param tableId - unique identifier of the table
   * @param recordId - unique record identifier within the table
   * @returns Promise<Record<FieldSet>> - A destroyed record with only its id in the returned field set
   */
  async deleteRecord(
    tableId: string,
    recordId: string
  ): Promise<Record<FieldSet>> {
    return this.baseClient(tableId).destroy(recordId);
  }
  /**
   * @throws AirtableError - Airtable will throw an error if there is any issue destroying the record
   * @param tableId - unique identifier of the table
   * @param recordIds - unique record identifiers within the table
   * @returns Promise<Record<FieldSet>> - An array of destroyed records with only their id in the returned field set
   */
  async deleteRecords(
    tableId: string,
    recordIds: string[]
  ): Promise<Records<FieldSet>> {
    return this.baseClient(tableId).destroy(recordIds);
  }

  /**
   * @throws AirtableError - Airtable will throw an error if there is any issue updating the record
   * @param tableId - unique identifier of the table
   * @param record - unique record identifier with the partial set of fields to update
   * @returns Promise<Record<FieldSet>> -  record with its updated fields and other unchanged fields
   */
  async updateRecord(tableId: string, record: RecordData<Partial<any>>) {
    return this.baseClient(tableId).update(record.id, record.fields);
  }

  /**
   * @throws AirtableError - Airtable will throw an error if there is any issue destroying the record
   * @param tableId - unique identifier of the table
   * @param records - unique record identifiers with the partial set of fields to update
   */
  async updateRecords(
    tableId: string,
    records: RecordData<Partial<FieldSet>>[]
  ): Promise<Records<FieldSet>> {
    return this.baseClient(tableId).update(records);
  }

  /**
   * Create a single record given a map of fields
   * @param tableId - unique identifier of the table
   * @param record - unique record fields
   */
  async createRecord(
    tableId: string,
    record: Partial<FieldSet>
  ): Promise<Record<FieldSet>> {
    return this.baseClient(tableId).create(record);
  }

  /**
   * Create Multiple records
   * @param tableId - unique identifier of the table
   * @param records - unique record fields with updates to
   */
  async createRecords(tableId: string, records: CreateRecord<FieldSet>[]) {
    return this.baseClient(tableId).create(records);
  }
}

function typeFromValue(value) {
  if (Array.isArray(value)) {
    return AirtablePropertyTypes.multipleSelects;
  }
  if (value instanceof Date) {
  }
  switch (typeof value) {
    case "string":
      return AirtablePropertyTypes.singleLineText;
    case "number":
      return AirtablePropertyTypes.number;
    default:
      return null;
  }
}

function makeTableFromRecords(
  tableId: string,
  records: Records<FieldSet>
): Table {
  const table = { idOrName: tableId, fields: [] };
  const types = {};
  for (const record of records) {
    for (const column in record.fields) {
      if (!types[column]) {
        const value = record.fields[column];
        types[column] = typeFromValue(value);
      }
    }
  }

  for (const column in types) {
    // default to string
    const type = types[column] || AirtablePropertyTypes.singleLineText;
    table.fields.push({ name: column, type });
  }

  return table;
}

function getErrorMessage(err): string {
  const error = err?.response?.data?.error;
  // so many different forms!
  // {
  //   error: "NOT_FOUND";
  // }
  // {
  //   error: {
  //     type: 'AUTHENTICATION_REQUIRED',
  //     message: 'Authentication required'
  //   }
  // }
  // {
  //   error:
  //   {
  //     type: 'NOT_FOUND'
  //   }
  // }
  if (typeof error === "string") return error;
  const known = error?.message || error?.type;
  if (known) return known;
  return err?.message || "Error";
}
