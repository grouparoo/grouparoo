import { AirtablePropertyTypes, Table, TableField } from '../../../src/lib/client/models';

export const primaryFieldID = 'fld1234';
export const name = 'Fake Table';
export const tableId = 'tbl1234';
export const primaryKeyName = 'fake field';
export const badField = "UNKNOWN"
export const successfulGetTableFields: TableField[] = [
  {
    type: AirtablePropertyTypes.SINGLELINE,
    name: primaryKeyName,
    id: primaryFieldID,
  },
  {
    type: AirtablePropertyTypes.MULTISELECT,
    name: AirtablePropertyTypes.MULTISELECT,
    id: AirtablePropertyTypes.MULTISELECT,
  },
  {
    type: AirtablePropertyTypes.CHECKBOX,
    name: AirtablePropertyTypes.CHECKBOX,
    id: AirtablePropertyTypes.CHECKBOX,
  },
  {
    type: AirtablePropertyTypes.DATE,
    name: AirtablePropertyTypes.DATE,
    id: AirtablePropertyTypes.DATE,
  },
  {
    type: AirtablePropertyTypes.EMAIL,
    name: AirtablePropertyTypes.EMAIL,
    id: AirtablePropertyTypes.EMAIL,
  },
  {
    type: AirtablePropertyTypes.MULTILINE,
    name: AirtablePropertyTypes.MULTILINE,
    id: AirtablePropertyTypes.MULTILINE,
  },
  {
    type: AirtablePropertyTypes.SINGLELINE,
    name: AirtablePropertyTypes.SINGLELINE,
    id: AirtablePropertyTypes.SINGLELINE,
  },
  {
    type: badField,
    name: badField,
    id: badField,
  },
];

export const successfulGetTableResponses: Table = {
  fields: successfulGetTableFields,
  id: tableId,
  name: name,
  primaryFieldId: primaryFieldID,
};
export const successfulListTableResponses: Table[] = [
  successfulGetTableResponses,
  {
    fields: successfulGetTableFields,
    id: 'table2',
    name: 'table 2',
    primaryFieldId: primaryFieldID,
  },
  {
    fields: successfulGetTableFields,
    id: 'table3',
    name: 'table 3',
    primaryFieldId: primaryFieldID,
  },
];

test.todo("Fixtures don't need tests y'all");
