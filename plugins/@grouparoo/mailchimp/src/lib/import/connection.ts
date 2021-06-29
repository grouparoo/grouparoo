import { PluginConnection } from "@grouparoo/core";
import { propertyOptions } from "./propertyOptions";
import { sourcePreview } from "./sourcePreview";
import { profiles } from "./profiles";
import { sourceRunPercentComplete } from "./sourceRunPercentComplete";
import { getSourceOptions } from "../shared/connectionOptions";

const connection: PluginConnection = {
  name: "mailchimp-import",
  direction: "import",
  description: "Import or update profiles with data from Mailchimp contacts.",
  app: "mailchimp",
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
    profiles,
    sourceRunPercentComplete,
  },
};

export default connection;
