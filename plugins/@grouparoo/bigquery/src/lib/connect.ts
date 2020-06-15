import { BigQuery } from "@google-cloud/bigquery";
import { ConnectPluginAppMethod } from "@grouparoo/core";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const projectId = appOptions.project_id || "";
  const dataset = appOptions.dataset || "";
  const client_email = appOptions.client_email || "";
  const private_key = (appOptions.private_key || "").replace(/\\n/g, "\n");
  const client = new BigQuery({
    projectId,
    credentials: { client_email, private_key },
  });

  return client.dataset(dataset);
};
