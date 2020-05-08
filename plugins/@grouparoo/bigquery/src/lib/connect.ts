import { BigQuery } from "@google-cloud/bigquery";
import { SimpleAppOptions } from "@grouparoo/core";

export async function connect(options: SimpleAppOptions) {
  const projectId = options.project_id || "";
  const dataset = options.dataset || "";
  const client_email = options.client_email || "";
  const private_key = (options.private_key || "").replace(/\\n/g, "\n");
  const client = new BigQuery({
    projectId,
    credentials: { client_email, private_key },
  });
  return client.dataset(dataset);
}
