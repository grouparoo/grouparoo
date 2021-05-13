import { SimpleAppOptions } from "@grouparoo/core";
import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";
import { BigQuery } from "@google-cloud/bigquery";

const dirPath = path.resolve(path.join(__dirname, ".."));
const nockPath = path.join(dirPath, ".env.example");
const realPath = path.join(dirPath, ".env");

let jobIdIncrement = 0;
const uniqueTimestamp = new Date().getTime().toString();

function readEnv(filePath) {
  return dotenv.parse(fs.readFileSync(filePath));
}
export function loadAppOptions(newNock: boolean = false): SimpleAppOptions {
  let envFile;
  if (newNock) {
    envFile = realPath;
    process.env.BIGQUERY_JEST_TIMESTAMP = uniqueTimestamp;
  } else {
    envFile = nockPath;
    // process.env.BIGQUERY_JEST_TIMESTAMP set by nock file
  }

  // stub out jobIds so nock works
  const origCreateJob = BigQuery.prototype.createJob;
  const spy = jest.spyOn(BigQuery.prototype, "createJob");
  spy.mockImplementation(function () {
    const options = arguments[0];
    jobIdIncrement++; // might be better to use options.query?
    options.jobId = `grouparoo-job-${jobIdIncrement}-${process.env.BIGQUERY_JEST_TIMESTAMP}`;
    origCreateJob.apply(this, arguments);
  });

  const parsed = readEnv(envFile);
  return {
    project_id: parsed.GOOGLE_SERVICE_PROJECT_ID,
    dataset: parsed.GOOGLE_SERVICE_DATASET,
    client_email: parsed.GOOGLE_SERVICE_CLIENT_EMAIL,
    private_key: parsed.GOOGLE_SERVICE_PRIVATE_KEY,
  };
}

export const updater = {
  prepend: function () {
    return `process.env.BIGQUERY_JEST_TIMESTAMP = "${uniqueTimestamp}"`;
  },
  rewrite: function (nockCall: string) {
    // manually stub out oAuth req/res
    nockCall = nockCall.replace(
      /, "grant_type=.+?\"/,
      ", { grant_type: /.+/g, assertion: /.+/g }"
    );

    return nockCall;
  },
};
