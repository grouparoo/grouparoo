import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);

  try {
    const lists = await client.lists.getAll();
    console.log(lists);
    return {
      success: true,
      message: `Found ${lists.elements.length} lists`,
    };
  } catch (err) {
    throw err.errorMessage || err;
  }
};
