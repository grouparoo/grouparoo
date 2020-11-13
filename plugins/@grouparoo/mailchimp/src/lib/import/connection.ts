import { PluginConnection } from "@grouparoo/core";
import { profilePropertyRuleOptions } from "./profilePropertyRuleOptions";
import { sourcePreview } from "./sourcePreview";
import { profiles } from "./profiles";
import { profileProperty } from "./profileProperty";
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
  profilePropertyRuleOptions,
  methods: {
    sourceOptions: getSourceOptions(["listId"]),
    sourcePreview,
    profiles,
    profileProperty,
    sourceRunPercentComplete,
  },
};

export default connection;
