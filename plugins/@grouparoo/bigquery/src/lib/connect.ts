import { BigQuery } from "@google-cloud/bigquery";
import { ConnectPluginAppMethod } from "@grouparoo/core";
import { log } from "actionhero";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const projectId = appOptions.project_id?.toString() || "";
  const dataset = appOptions.dataset?.toString() || "";
  const client_email = appOptions.client_email?.toString() || "";
  const private_key = (appOptions.private_key || "")
    .toString()
    .replace(/\\n/g, "\n");
  const client = new BigQuery({
    projectId,
    credentials: { client_email, private_key },
  });

  const bqClient = client.dataset(dataset);
  const queryShim: typeof bqClient.query = bqClient.query.bind(bqClient);
  (bqClient as any).query = (
    options: Parameters<typeof bqClient.query>[0],
    callback?: Parameters<typeof bqClient.query>[1]
  ) => {
    log(`[ bigquery ] ${options.query}`, "debug", options.params);
    return queryShim(options, callback);
  };
  return bqClient;
};
