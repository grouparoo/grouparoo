import { PluginConnection } from "@grouparoo/core";
import { propertyOptions } from "./propertyOptions";
import { sourcePreview } from "./sourcePreview";
import { importRecords } from "./importRecords";
import { sourceRunPercentComplete } from "./sourceRunPercentComplete";
import { getSourceOptions } from "../shared/connectionOptions";

const connection: PluginConnection = {
  name: "mailchimp-import-contacts",
  displayName: "Mailchimp Import Contacts",
  direction: "import",
  description: "Import or update records with data from Mailchimp contacts.",
  supportIncrementalSchedule: true,
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
    importRecords,
    sourceRunPercentComplete,
  },
};

export default connection;
