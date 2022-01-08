import {
  ApiTable,
  CreateRecord,
  HealthResponse,
  MetaResponse,
  Table,
} from "../models";
import { FieldSet, Record, RecordData, Records } from "airtable";

export interface IClient {
  health(): Promise<HealthResponse>;

  checkMeta(): Promise<MetaResponse>;
  hasMeta(): Promise<boolean>;

  listTables(): Promise<ApiTable[]>;

  getTable(tableIdOrName: string): Promise<Table>;

  listRecords(tableIdOrName: string): Promise<Records<FieldSet>>;

  getRecordByKey(
    tableIdOrName: string,
    primaryKey: string,
    foreignKey: string
  ): Promise<Record<FieldSet>>;

  getRecordById(
    tableIdOrName: string,
    recordId: string
  ): Promise<Record<FieldSet>>;

  deleteRecord(
    tableIdOrName: string,
    recordId: string
  ): Promise<Record<FieldSet>>;

  deleteRecords(
    tableIdOrName: string,
    recordIds: string[]
  ): Promise<Records<FieldSet>>;

  updateRecord(
    tableIdOrName: string,
    record: RecordData<Partial<FieldSet>>
  ): Promise<Record<FieldSet>>;

  updateRecords(
    tableIdOrName: string,
    record: RecordData<Partial<FieldSet>>[]
  ): Promise<Records<FieldSet>>;

  createRecord(
    tableIdOrName: string,
    record: Partial<FieldSet>
  ): Promise<Record<FieldSet>>;

  createRecords(
    tableIdOrName: string,
    record: CreateRecord<FieldSet>[]
  ): Promise<Records<FieldSet>>;
}
