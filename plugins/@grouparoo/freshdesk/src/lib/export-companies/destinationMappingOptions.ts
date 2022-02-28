import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { FreshdeskClient } from "../client";
import { KnownFreshdeskField } from "../common/destinationMappingOptions";

export const getKnownFields = (): KnownFreshdeskField[] => {
  return [
    {
      key: "Name",
      freshdeskKey: "name",
      type: "string",
      required: true,
    },
    {
      key: "Domain",
      freshdeskKey: "domains",
      toArray: true,
      type: "url",
      important: true,
    },
    {
      key: "Note",
      freshdeskKey: "note",
      type: "string",
      important: true,
    },
    {
      key: "Description",
      freshdeskKey: "description",
      type: "string",
    },
    {
      key: "Health Score",
      freshdeskKey: "health_score",
      type: "string",
    },
    {
      key: "Account Tier",
      freshdeskKey: "account_tier",
      type: "string",
    },
    {
      key: "Renewal Date",
      freshdeskKey: "renewal_date",
      type: "date",
    },
    {
      key: "Industry",
      freshdeskKey: "industry",
      type: "string",
    },
  ];
};

export const getKnownFieldsMap = (): Record<string, KnownFreshdeskField> => {
  return Object.fromEntries(
    getKnownFields().map((field) => [field.key, field])
  );
};

export const companyDestinationMappingOptions: DestinationMappingOptionsMethod<
  FreshdeskClient
> = async () => {
  const allKnown = getKnownFields();
  const required = allKnown.filter((field) => field.required);
  const knownNotRequired = allKnown.filter((field) => !field.required);

  return {
    labels: {
      property: {
        singular: "Freshdesk Field",
        plural: "Freshdesk Fields",
      },
    },
    properties: {
      known: knownNotRequired,
      required,
      allowOptionalFromProperties: false,
    },
  };
};
