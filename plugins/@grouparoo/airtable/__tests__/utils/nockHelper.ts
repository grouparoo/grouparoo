import { SimpleAppOptions } from "@grouparoo/core";
import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";

const dirPath = path.resolve(path.join(__dirname, ".."));
const nockPath = path.join(dirPath, ".env.example");
const realPath = path.join(dirPath, ".env");

function readEnv(filePath) {
  return dotenv.parse(fs.readFileSync(filePath));
}
export function loadAppOptions(newNock: boolean = false): SimpleAppOptions {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
  }
  const parsed = readEnv(envFile);
  return {
    apiKey: parsed.AIRTABLE_API_KEY,
    baseId: parsed.AIRTABLE_BASE_ID,
  };
}

export function loadTableData(newNock: boolean = false): {
  allId: string;
  allName: string;
  allPrimaryKey: string;
  allKnownKeys: string[];
  emptyId: string;
  emptyName: string;
  emptyPrimaryKey: string;
  emptyKnownKeys: string[];
} {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
  }
  const parsed = readEnv(envFile);
  return {
    allId: parsed.AIRTABLE_ALL_TABLE_ID,
    allName: "All",
    allPrimaryKey: "Name",
    allKnownKeys: ["Brian", "Evan", "Andy"],
    emptyId: parsed.AIRTABLE_EMPTY_TABLE_ID,
    emptyName: "Empty",
    emptyPrimaryKey: "Name",
    emptyKnownKeys: [],
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    const keys = Object.keys(realEnv);
    for (const key of keys) {
      nockCall = nockCall.replace(new RegExp(realEnv[key], "gi"), nockEnv[key]);
    }

    const hasMeta =
      nockCall.includes("/v0/meta/bases") && nockCall.includes(".reply(200");
    if (hasMeta) {
      const useBaseId = nockEnv.AIRTABLE_BASE_ID;
      const err = new Error(`Could not replace bases: ${nockCall}`);
      // replace the bases list
      const replyIndex = nockCall.indexOf('.reply(200, {"bases":');
      if (replyIndex < 0) {
        throw err;
      }
      const rest = nockCall.substring(replyIndex);
      const endIndex = rest.indexOf("\n");
      if (endIndex < 0) {
        throw err;
      }
      // 12 = start of {"bases":
      // 3 = ", [" at end of line
      const reply = rest.substring(12, endIndex - 3);
      JSON.parse(reply); // just to make sure it parses
      nockCall = nockCall.replace(
        reply,
        `{"bases":[{"id":"${useBaseId}","name":"[CI Test] Marketing Campaign Tracking","permissionLevel":"create"}]}`
      );
    }

    return nockCall;
  },
};
