import { RecordData } from "airtable/lib/record_data";
import { FieldSet } from "airtable";

export interface HealthResponse {
  body: any;
  statusCode: number;
}
export type ListTablesResponse = {
  tables: Table[];
};
export type Table = {
  id: string;
  name: string;
  primaryFieldId: string;
  fields: TableField[];
};
export type TableField = {
  type: string;
  id: string;
  name: string;
};
export enum AirtablePropertyTypes {
  SINGLELINE = "singleLineText",
  MULTILINE = "multilineText",
  CHECKBOX = "checkbox",
  DATE = "date",
  EMAIL = "email",
  MULTISELECT = "multipleSelects",
}
export type CreateRecord<TFields> = Pick<
  RecordData<Partial<TFields>>,
  "fields"
>;
