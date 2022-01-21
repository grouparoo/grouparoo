const namespace = "batchSize";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}

export const DEFAULT = {
  [namespace]: () => {
    // prettier-ignore
    return {
      // How many Imports and should a Run enqueue in each batch before deferring to associate those Imports already enqueued?
      imports: parseInt(process.env.GROUPAROO_IMPORTS_BATCH_SIZE ?? "1000"),
      // How many Records needing import should we process at once? Affects the query size to sources.
      recordProperties: parseInt(process.env.GROUPAROO_RECORDS_BATCH_SIZE ?? "500"),
      // How many Records should a Run try to send at once to Destinations which support batch exporting?
      exports: parseInt(process.env.GROUPAROO_EXPORTS_BATCH_SIZE ?? "100"),
      // How many rows can we update in the Grouparoo database at a time. Affects db performance.
      internalWrite: parseInt(process.env.GROUPAROO_INTERNAL_BATCH_SIZE ?? "5000"),
    };
  },
};
