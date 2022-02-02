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
        key: "Address Label",
        closeioKey: "addresses[0].label",
      },
      {
        key: "Address Line 1",
        closeioKey: "addresses[0].address_1",
      },
      {
        key: "Address Line 2",
        closeioKey: "addresses[0].address_2",
      },
      {
        key: "City",
        closeioKey: "addresses[0].city",
        important: true,
      },
      {
        key: "State",
        closeioKey: "addresses[0].state",
        important: true,
      },
      {
        key: "Zip Code",
        closeioKey: "addresses[0].zipcode",
      },
      {
        key: "Country",
        closeioKey: "addresses[0].country",
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
