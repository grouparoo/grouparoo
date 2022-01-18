import { PluginConnection } from "@grouparoo/core";
import { propertyOptions } from "./propertyOptions";
import { sourcePreview } from "./sourcePreview";
import { records } from "./records";
import { sourceRunPercentComplete } from "./sourceRunPercentComplete";
import { getSourceOptions } from "../shared/connectionOptions";

const connection: PluginConnection = {
  name: "mailchimp-import-contacts",
  displayName: "Mailchimp Import Contacts",
  direction: "import",
  description: "Import or update records with data from Mailchimp contacts.",
  supportIncrementalSchedule: false,
  apps: ["mailchimp", "mailchimp-oauth"],
  options: [
    {
      key: "listId",
      required: true,
      description: "Mailchimp list id",
    },
  ],
  methods: {
    sourceOptions: getSourceOptions(["listId"]),
    sourcePreview,
    propertyOptions,
    records,
    sourceRunPercentComplete,
  },
};

export default connection;
