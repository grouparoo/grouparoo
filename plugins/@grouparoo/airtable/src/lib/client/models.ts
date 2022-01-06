import { RecordData } from "airtable/lib/record_data";

export interface HealthResponse {
  success: boolean;
  message: string;
}
export interface MetaResponse {
  message: string;
  health: boolean;
  access: boolean;
}
export type ListTablesResponse = {
  tables: ApiTable[];
};
export type ApiTable = {
  id: string;
  name: string;
  fields: TableField[];
};
export type Table = {
  idOrName: string;
  fields: TableField[];
};
export type TableField = {
  type: AirtablePropertyTypes;
  name: string;
};
//https://airtable.com/api/meta
export enum AirtablePropertyTypes {
  autoNumber = "autoNumber",
  barcode = "barcode",
  button = "button",
  checkbox = "checkbox",
  count = "count",
  createdBy = "createdBy",
  createdTime = "createdTime",
  currency = "currency",
  date = "date",
  dateTime = "dateTime",
  duration = "duration",
  email = "email",
  externalSyncSource = "externalSyncSource",
  formula = "formula",
  lastModifiedBy = "lastModifiedBy",
  lastModifiedTime = "lastModifiedTime",
  multilineText = "multilineText",
  multipleAttachments = "multipleAttachments",
  multipleCollaborators = "multipleCollaborators",
  multipleLookupValues = "multipleLookupValues",
  multipleRecordLinks = "multipleRecordLinks",
  multipleSelects = "multipleSelects",
  number = "number",
  percent = "percent",
  phoneNumber = "phoneNumber",
  rating = "rating",
  richText = "richText",
  rollup = "rollup",
  singleCollaborator = "singleCollaborator",
  singleLineText = "singleLineText",
  singleSelect = "singleSelect",
  url = "url",
}
export type CreateRecord<TFields> = Pick<
  RecordData<Partial<TFields>>,
  "fields"
>;
