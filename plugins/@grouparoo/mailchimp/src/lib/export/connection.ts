import { PluginConnection } from "@grouparoo/core";
import { exportProfile } from "./exportProfile";

import { getDestinationOptions } from "../shared/connectionOptions";
import { getDestinationMappingOptions } from "../shared/destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

const connection: PluginConnection = {
  name: "mailchimp-export",
  direction: "export",
  description: "Export Profiles to a Mailchimp list with MergeVars and Tags.",
  app: "mailchimp",
  syncModes: ["sync", "additive", "enrich"],
  defaultSyncMode: "sync",
  options: [
    {
      key: "listId",
      required: true,
      description: "Mailchimp list id",
    },
  ],
  methods: {
    destinationOptions: getDestinationOptions(["listId"]),
    destinationMappingOptions: getDestinationMappingOptions("email"),
    exportProfile,
    exportArrayProperties,
  },
};

export default connection;
