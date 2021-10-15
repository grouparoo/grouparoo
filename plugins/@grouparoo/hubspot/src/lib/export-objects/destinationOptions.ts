import { DestinationOptionsMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { HubspotClient } from "../client/client";

export const destinationOptions: DestinationOptionsMethod = async ({
  appId,
  appOptions,
}) => {
  const customObjects = await getCustomObjects({ appId, appOptions });
  return {
    recordObject: { type: "typeahead", options: ["blau", "blona"] },
    recordMatchField: { type: "typeahead", options: ["blau1", "blona1"] },
    groupObject: { type: "typeahead", options: ["blau2", "blona2"] },
    groupNameField: { type: "typeahead", options: ["blau2", "blona2"] },
  };
};

async function getCustomObjects({ appId, appOptions }) {
  const client: HubspotClient = await connect(appOptions);
  const customObjects = await client.objects.getSchemas();
  return customObjects || [];
}
