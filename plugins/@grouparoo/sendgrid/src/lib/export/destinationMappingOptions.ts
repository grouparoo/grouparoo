import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
  SimpleAppOptions,
} from "@grouparoo/core";
import { getFields } from "./fieldsMethods";
import { connect } from "./../connect";
import { SendgridClient } from "../client";

const importantFields = ["first_name", "last_name"];
const reservedFields = [
  "first_name",
  "last_name",
  "email",
  "alternate_emails",
  "address_line_1",
  "address_line_2",
  "city",
  "state_province_region",
  "postal_code",
  "country",
  "phone_number",
  "whatsapp",
  "line",
  "facebook",
  "unique_name",
];
const readOnlyFields = [
  "email_domains",
  "last_clicked",
  "last_opened",
  "last_emailed",
  "singlesend_id",
  "automation_id",
  "created_at",
  "updated_at",
  "contact_id",
];

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions, appId }) => {
    const client = await connect(appOptions);
    const required = getRequiredFields();
    const known = await getUserFields(client, appOptions, appId);

    return {
      labels: {
        property: {
          singular: "Sendgrid Contact Field",
          plural: "Sendgrid Contact Fields",
        },
        group: {
          singular: "Sendgrid List",
          plural: "Sendgrid Lists",
        },
      },
      properties: {
        required: required,
        known: known,
        allowOptionalFromProperties: false,
      },
    };
  };

export const isReservedField = (key): boolean => {
  return reservedFields.includes(key);
};

export const isReadOnlyField = (key): boolean => {
  return readOnlyFields.includes(key);
};

export const getRequiredFields = (): {
  key: string;
  type: DestinationMappingOptionsResponseType;
}[] => {
  return [{ key: "email", type: "email" }];
};

const isImportant = (key): Boolean => {
  return importantFields.includes(key);
};

const mapTypesFromSendgridToGrouparoo = (fieldKey, sendgridType) => {
  switch (fieldKey) {
    case "phone_number":
      return "phoneNumber";
  }
  const map = {
    Text: "string",
    Date: "date",
    Number: "float",
  };
  const grouparooType = map[sendgridType];
  if (grouparooType) {
    return grouparooType;
  }
  return null;
};

export const getUserFields = async (
  client: SendgridClient,
  appOptions: SimpleAppOptions,
  appId: String
): Promise<
  {
    key: string;
    type: DestinationMappingOptionsResponseType;
    important?: boolean;
  }[]
> => {
  const fields = await getFields(client, appId, appOptions, true);
  const out = [];

  for (const field of fields) {
    if (field["name"] !== "email" && !field["read_only"]) {
      const type: DestinationMappingOptionsResponseType =
        mapTypesFromSendgridToGrouparoo(field["name"], field["field_type"]);
      if (type) {
        out.push({
          key: field["name"],
          type,
          important: isImportant(field["name"]),
        });
      }
    }
  }
  return out;
};
