import { App, SimpleAppOptions } from "@grouparoo/core";
import { connect } from "./connect";

export async function test(app: App, options: SimpleAppOptions) {
  const client = await connect(options);
  const { lists } = await client.get("/lists");

  let found = false;
  lists.forEach((l) => {
    if (l.id === options.listId) {
      found = true;
    }
  });

  if (!found) {
    throw new Error(
      `listId not found in lists for this API Key: ${lists
        .map((l) => l.id)
        .join(", ")}`
    );
  }

  return found;
}
