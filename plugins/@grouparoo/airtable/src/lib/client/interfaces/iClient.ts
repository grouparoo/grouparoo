import { CreateRecord, HealthResponse, Table } from "../models";
import { FieldSet, Record, RecordData, Records } from "airtable";

export interface IClient {
  health(): Promise<HealthResponse>;

  close(): Promise<void>;

  listTables(): Promise<Table[]>;

  getTable(tableId: string): Promise<Table>;

  listRecords(tableId: string): Promise<Records<FieldSet>>;

  listRecordsByField(
    tableId: string,
    primaryKey: string,
    foreignKeys: string[]
  ): Promise<Records<FieldSet>>;

  deleteRecord(tableId: string, recordId: string): Promise<Record<FieldSet>>;

  deleteRecords(
    tableId: string,
    recordIds: string[]
  ): Promise<Records<FieldSet>>;

  updateRecord(
    tableId: string,
    record: RecordData<Partial<FieldSet>>
  ): Promise<Record<FieldSet>>;

  updateRecords(
    tableId: string,
    record: RecordData<Partial<FieldSet>>[]
  ): Promise<Records<FieldSet>>;

  createRecord(
    tableId: string,
    record: Partial<FieldSet>
  ): Promise<Record<FieldSet>>;

  createRecords(
    tableId: string,
    record: CreateRecord<FieldSet>[]
  ): Promise<Records<FieldSet>>;
}
