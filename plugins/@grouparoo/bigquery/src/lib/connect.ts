const { BigQuery } = require("@google-cloud/bigquery");
import { SimpleAppOptions } from "@grouparoo/core";

export async function connect(options: SimpleAppOptions) {
  const projectId = options.project_id.toString();
  const client_email = options.client_email.toString();
  const private_key = options.private_key.toString().replace(/\\n/g, "\n");
  const client = new BigQuery({
    projectId,
    credentials: { client_email, private_key },
  });
  return client;
}
