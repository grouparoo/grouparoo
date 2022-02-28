import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { FreshdeskClient } from "../client";
import { KnownFreshdeskField } from "../common/destinationMappingOptions";

export const getKnownFields = (primaryKey: string): KnownFreshdeskField[] => {
  return [
    {
      key: "Name",
      freshdeskKey: "name",
      type: "string",
      required: true,
    },
    {
      key: "Company Name",
      freshdeskKey: "company_id",
      type: "string",
      important: true,
    },
    {
      key: "Email",
      freshdeskKey: "email",
      type: "email",
      required: primaryKey === "Email",
      important: true,
    },
    {
      key: "Phone",
      freshdeskKey: "phone",
      type: "phoneNumber",
      required: primaryKey === "Phone",
      important: true,
    },
    {
      key: "Mobile",
      freshdeskKey: "mobile",
      type: "phoneNumber",
      required: primaryKey === "Mobile",
      important: true,
    },
    {
      key: "External ID",
      freshdeskKey: "unique_external_id",
      type: "number",
      required: primaryKey === "External ID",
      important: true,
    },
    {
      key: "Address",
      freshdeskKey: "address",
      type: "string",
    },
    {
      key: "Description",
      freshdeskKey: "description",
      type: "string",
    },
    {
      key: "Job Title",
      freshdeskKey: "job_title",
      type: "string",
    },
  ];
};

export const getKnownFieldsMap = (): Record<string, KnownFreshdeskField> => {
  return Object.fromEntries(
    getKnownFields(null).map((field) => [field.key, field])
  );
};

export const contactDestinationMappingOptions: DestinationMappingOptionsMethod<
  FreshdeskClient
> = async ({ destinationOptions }) => {
  const allKnown = getKnownFields(destinationOptions.primaryKey as string);
  const required = allKnown.filter((field) => field.required);
  const knownNotRequired = allKnown.filter((field) => !field.required);

  return {
    labels: {
      property: {
        singular: "Freshdesk Field",
        plural: "Freshdesk Fields",
      },
      group: {
        singular: "Freshdesk Filter",
        plural: "Freshdesk Filters",
      },
    },
    properties: {
      known: knownNotRequired,
      required,
      allowOptionalFromProperties: false,
    },
  };
};
