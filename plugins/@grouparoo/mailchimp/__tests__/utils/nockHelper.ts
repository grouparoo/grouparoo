import {
  SimpleAppOptions,
  SimpleSourceOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";

const dirPath = path.resolve(path.join(__dirname, ".."));
const nockPath = path.join(dirPath, ".env.example");
const realPath = path.join(dirPath, ".env");

function readEnv(filePath) {
  return dotenv.parse(fs.readFileSync(filePath));
}
export function loadAppOptions(
  newNock = false,
  useOAuth = false
): SimpleAppOptions {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
  }

  const parsed = readEnv(envFile);
  return useOAuth
    ? { oAuthToken: parsed.MAILCHIMP_OAUTH_TOKEN }
    : { apiKey: parsed.MAILCHIMP_API_KEY };
}

export function loadSourceOptions(
  newNock: boolean = false
): SimpleSourceOptions {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
  }

  const parsed = readEnv(envFile);
  return {
    listId: parsed.MAILCHIMP_SOURCE_LIST_ID,
  };
}

export function loadDestinationOptions(
  newNock: boolean = false
): SimpleDestinationOptions {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
  }

  const parsed = readEnv(envFile);
  return {
    listId: parsed.MAILCHIMP_DESTINATION_LIST_ID,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    const realServerPieces = realEnv.MAILCHIMP_API_KEY.split("-");
    const nockServerPieces = nockEnv.MAILCHIMP_API_KEY.split("-");
    const realHost = realServerPieces[realServerPieces.length - 1]; //us4
    const nockHost = nockServerPieces[nockServerPieces.length - 1]; //us3

    nockCall = nockCall.replace(
      new RegExp(`${realHost}.api.mailchimp.com`, "gi"),
      `${nockHost}.api.mailchimp.com`
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.MAILCHIMP_API_KEY, "gi"),
      nockEnv.MAILCHIMP_API_KEY
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.MAILCHIMP_SOURCE_LIST_ID, "gi"),
      nockEnv.MAILCHIMP_SOURCE_LIST_ID
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.MAILCHIMP_DESTINATION_LIST_ID, "gi"),
      nockEnv.MAILCHIMP_DESTINATION_LIST_ID
    );
    // remove contact data for organization
    nockCall = nockCall.replace(/\"?contact\"?:\s*{[\s\S]*?}\s*,?/gm, "");

    return nockCall;
  },
};
