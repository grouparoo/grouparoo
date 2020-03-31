import { App, SimpleAppOptions } from "@grouparoo/core";
import { connect } from "./../connect";

export async function destinationOptions(
  app: App,
  appOptions: SimpleAppOptions
) {
  const response = {
    listId: { type: "list", options: [], descriptions: [] },
  };

  const client = await connect(appOptions);

  const { lists } = await client.get(`/lists`);
  lists.map((list) => {
    response.listId.options.push(list.id);
    response.listId.descriptions.push(list.name);
  });

  return response;
}
