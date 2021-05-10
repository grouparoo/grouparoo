import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
} from "@grouparoo/core";
import { connect } from "./../connect";
import { log } from "actionhero";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions }) => {
    const client = await connect(appOptions);
    const { known, required } = await getFields(client);

    return {
      labels: {
        property: {
          singular: "Marketo Field",
          plural: "Marketo Fields",
        },
        group: {
          singular: "Marketo List",
          plural: "Marketo Lists",
        },
      },
      properties: {
        required,
        known,
        allowOptionalFromProperties: false,
      },
    };
  };

const mapTypesFromMarketoToGrouparoo = (marketoType) => {
  // https://developers.marketo.com/rest-api/lead-database/fields/field-types/
  const map = {
    string: "string",
    text: "string",
    textarea: "string",
    integer: "integer",
    boolean: "boolean",
    email: "email",
    float: "float",
    datetime: "date",
    score: "integer",
    currency: "float",
    // unhandled:
    lead_function: null,
    reference: null,
    formula: null,
    // TODO:
    date: null, // like birthday (just date)
    phone: null,
    url: null,
    percent: "integer", // 0 to 100 (should we more specific?)
  };

  const grouparooType = map[marketoType];
  if (grouparooType === undefined) {
    log(`Unknown marketo type: ${marketoType}`);
    return null;
  }
  return grouparooType;
};

const importantFieldNames = ["firstName", "lastName"];
const isFieldImportant = function (field: any): Boolean {
  const name = field.rest.name;
  return importantFieldNames.indexOf(name) >= 0;
};

export const getFields = async (
  client: any
): Promise<{
  required: Array<{
    key: string;
    type: DestinationMappingOptionsResponseTypes;
  }>;
  known: Array<{
    key: string;
    type: DestinationMappingOptionsResponseTypes;
    important?: boolean;
  }>;
}> => {
  const required = [];
  let known = [];
  const list = (await client.lead.describe()).result;
  for (const field of list) {
    const readOnly = field.rest.readOnly;
    const key = field.rest.name;
    const type = mapTypesFromMarketoToGrouparoo(field.dataType);
    const important = isFieldImportant(field);
    if (key && readOnly === false && type) {
      if (key === "email" && type === "email") {
        required.push({ key, type });
      } else {
        known.push({ key, type, important });
      }
    }
  }

  if (known.length < 1) {
    throw new Error("Marketo email field not found");
  }

  known = known.sort((a, b) => {
    return a.key.localeCompare(b.key);
  });
  return { required, known };
};
