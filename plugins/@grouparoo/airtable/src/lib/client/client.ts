import Airtable, { FieldSet, Record, RecordData, Records } from "airtable";
import { AirtableAppOptions } from "../appOptions";
import Axios, { AxiosRequestHeaders, AxiosError } from "axios";
import { URL } from "url";
import {
  CreateRecord,
  HealthResponse,
  ListTablesResponse,
  Table,
} from "./models";
import { IClient } from "./interfaces/iClient";
import AirtableError from "airtable/lib/airtable_error";

export class Client implements IClient {
  private readonly apiKey: string;
  private readonly baseClient: Airtable.Base;
  private readonly apiURL: URL;
  private readonly baseId: string;
  constructor(appOptions: AirtableAppOptions) {
    this.apiKey = appOptions.apiKey;
    this.baseClient = new Airtable({
      apiKey: appOptions.apiKey,
      endpointUrl: appOptions.airtableHost,
    }).base(appOptions.baseId);
    this.baseId = appOptions.baseId;
    this.apiURL = new URL(appOptions.airtableHost);
  }
  private defaultHeaders(): AxiosRequestHeaders {
    return {
      Authorization: `Bearer ${this.apiKey}`,
    };
  }
  async health(): Promise<HealthResponse> {
    const healthEndpoint = new URL("/v0/meta/bases", this.apiURL);
    return Axios.get<HealthResponse>(healthEndpoint.href, {
      headers: this.defaultHeaders(),
    })
      .then((resp) => {
        return {
          body: resp.data,
          statusCode: resp.status,
        };
      })
      .catch((reason: AxiosError) => {
        return {
          body: reason.response.data,
          statusCode: reason.response.status,
        };
      });
  }

  /**
   * Gets a list of tables from the Airtable metadata endpoint
   * @throws AxiosError - Error whenever there is a non 200 response from the api endpoint
   * @returns {Promise<Table[]>} - A Promise of a Airtable Array Table Object
   */
  async listTables(): Promise<Table[]> {
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
    return this.listTables()
      .then((tables) => {
        return tables.find((table) => table.id === tableId);
      })
      .then((value) => {
        if (!value) {
          throw new AirtableError(
            "NOT FOUND",
            `Could not find table ${tableId}`,
            404
          );
        }
        return value;
      });
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

  /**
   * NOOP method for mocking out a clossing of the client
   */
  async close(): Promise<void> {
    return Promise.resolve();
  }
}
