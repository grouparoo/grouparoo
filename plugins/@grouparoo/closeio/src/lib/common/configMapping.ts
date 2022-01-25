import { KnownCloseioField } from "./destinationMappingOptions";

interface EntityConfig {
  fields: Partial<KnownCloseioField>[];
}

export const configMapping = {
  lead: <EntityConfig>{
    fields: [
      {
        key: "Name",
        closeioKey: "name",
        required: true,
      },
      {
        key: "URL",
        closeioKey: "url",
        type: "url",
      },
      {
        key: "Description",
        closeioKey: "description",
      },
      {
        key: "Status Label",
        closeioKey: "status_label",
      },
      {
        key: "Display Name",
        closeioKey: "display_name",
      },
      {
        key: "Address Label",
        closeioKey: "addresse[0].label",
      },
      {
        key: "Address Line 1",
        closeioKey: "addresse[0].address_1",
      },
      {
        key: "Address Line 2",
        closeioKey: "addresse[0].address_2",
      },
      {
        key: "City",
        closeioKey: "addresse[0].city",
        important: true,
      },
      {
        key: "State",
        closeioKey: "addresse[0].state",
        important: true,
      },
      {
        key: "Zip Code",
        closeioKey: "addresse[0].zipcode",
      },
      {
        key: "Country",
        closeioKey: "addresse[0].country",
      },
    ],
  },
  contact: <EntityConfig>{
    fields: [
      {
        key: "Name",
        closeioKey: "name",
        required: true,
      },
      {
        key: "Lead",
        closeioKey: "lead_id",
        required: true,
      },
      {
        key: "Email",
        closeioKey: "emails[0].email",
        important: true,
      },
      {
        key: "Title",
        closeioKey: "title",
      },
      {
        key: "Display Name",
        closeioKey: "display_name",
      },
      {
        key: "URL",
        closeioKey: "urls[0].url",
      },
      {
        key: "Phone",
        closeioKey: "phones[0].phone",
      },
    ],
  },
} as const;

export type EntityType = keyof typeof configMapping;
