import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";
import { connect } from "./../connect";

export const destinationOptions: DestinationOptionsMethod = async ({
  appOptions,
}) => {
  const response: DestinationOptionsMethodResponse = {
    listId: { type: "list", options: [], descriptions: [] },
  };

  const client = await connect(appOptions);

  const { lists } = await client.get(`/lists`);
  lists.map((list) => {
    response.listId.options.push(list.id);
    response.listId.descriptions.push(list.name);
  });

  return response;
};
