import { PluginConnection } from "@grouparoo/core";
import { exportProfile } from "./exportProfile";

import { getDestinationOptions } from "../shared/destinationOptions";
import { getDestinationMappingOptions } from "../shared/destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

const connection: PluginConnection = {
  name: "mailchimp-export-external-id",
  direction: "export",
  description:
    "Updates contacts in a Mailchimp list based on a MergeVar match.",
  app: "mailchimp",
  options: [
    {
      key: "listId",
      required: true,
      description: "Mailchimp list id",
    },
    {
      key: "mergeVarMatch",
      required: true,
      description: "The MergeVar to match for updating",
    },
  ],
  methods: {
    destinationOptions: getDestinationOptions(["listId", "mergeVarMatch"]),
    destinationMappingOptions: getDestinationMappingOptions("setting"),
    exportProfile,
    exportArrayProperties,
  },
};

export default connection;
