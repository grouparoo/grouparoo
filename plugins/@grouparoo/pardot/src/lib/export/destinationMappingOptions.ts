import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseProperty,
  DestinationMappingOptionsResponseTypes,
} from "@grouparoo/core";

import PardotClient from "../client";
import { connect } from "./../connect";

// Prospect field spec https://developer.pardot.com/kb/object-field-references/#prospect
const requiredProspectFields: DestinationMappingOptionsResponseProperty[] = [
  { key: "email", type: "email" },
];

const defaultProspectFields: DestinationMappingOptionsResponseProperty[] = [
  { key: "salutation", type: "string" },
  { key: "first_name", type: "string", important: true },
  { key: "last_name", type: "string", important: true },
  { key: "password", type: "string" },
  { key: "company", type: "string" },
  { key: "website", type: "string" },
  { key: "job_title", type: "string" },
  { key: "department", type: "string" },
  { key: "country", type: "string" },
  { key: "address_one", type: "string" },
  { key: "address_two", type: "string" },
  { key: "city", type: "string" },
  { key: "state", type: "string" },
  { key: "territory", type: "string" },
  { key: "zip", type: "string" },
  { key: "phone", type: "phoneNumber" },
  { key: "fax", type: "phoneNumber" },
  { key: "source", type: "string" },
  { key: "annual_revenue", type: "string" },
  { key: "employees", type: "string" },
  { key: "industry", type: "string" },
  { key: "years_in_business", type: "string" },
  { key: "comments", type: "string" },
  { key: "notes", type: "string" },
  { key: "score", type: "integer" },
];

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
}) => {
  const client = await connect(appOptions);
  const known = await getProspectFields(client);

  return {
    labels: {
      property: {
        singular: "Pardot Field",
        plural: "Pardot Fields",
      },
      group: {
        singular: "Pardot List",
        plural: "Pardot Lists",
      },
    },
    properties: {
      known,
      required: requiredProspectFields,
      allowOptionalFromProperties: false,
    },
  };
};

const mapTypesToGrouparoo = (
  pardotType: string
): DestinationMappingOptionsResponseTypes => {
  // https://help.salesforce.com/articleView?id=sf.pardot_field_types.htm&type=5

  const map = {
    Text: "string",
    Number: "number",
    Date: "date",
    Textarea: "string",
    Dropdown: "string",
    Hidden: "string",
    "Radio Button": "string",
    "CRM User": "string",

    // TODO:
    "Multi-Select": null,
    Checkbox: null,
  };

  const grouparooType = map[pardotType];
  if (grouparooType) {
    return grouparooType;
  }

  return null;
};

export const getProspectFields = async (
  client: PardotClient
): Promise<DestinationMappingOptionsResponseProperty[]> => {
  const fields = await client.getCustomFields();
  const out = [];

  for (const field of fields) {
    // TODO check how isRecordMultipleResponses affects the field. Ignoring for now.
    if (field.isRecordMultipleResponses) continue;

    const type = mapTypesToGrouparoo(field.type);
    if (type) {
      out.push({
        key: field.fieldId,
        type,
      });
    }
  }

  return [...defaultProspectFields, ...out];
};
