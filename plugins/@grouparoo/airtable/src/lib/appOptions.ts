import { AppOptionsOption, SimpleAppOptions } from "@grouparoo/core/dist";

export const DEFAULT_AIRTABLE_API = "https://api.airtable.com";
export class AirtableAppOptions implements SimpleAppOptions {
  apiKey: string;
  baseId: string;
  airtableHost: string;
  constructor(simpleOptions: SimpleAppOptions) {
    this.apiKey = simpleOptions.apiKey ? simpleOptions.apiKey.toString() : "";
    this.baseId = simpleOptions.baseId ? simpleOptions.baseId.toString() : "";
    this.airtableHost = simpleOptions.airtableHost
      ? simpleOptions.airtableHost.toString()
      : DEFAULT_AIRTABLE_API;
  }

  [key: string]: string | number | boolean;
}

export const AirtableAppOptionsOptions: Array<AppOptionsOption> = [
  {
    key: "apiKey",
    type: "password",
    displayName: "Airtable API Key",
    required: true,
    description: "Airtable (API) key",
  },
  {
    key: "baseId",
    type: "text",
    displayName: "Airtable Base",
    required: true,
    description: "Airtable Base to read tables from",
  },
  {
    key: "airtableHost",
    type: "text",
    displayName: "Airtable API Host",
    required: false,
    defaultValue: "https://api.airtable.com",
    placeholder: "https://api.airtable.com",
    description: "Host for the Airtable API",
  },
];
