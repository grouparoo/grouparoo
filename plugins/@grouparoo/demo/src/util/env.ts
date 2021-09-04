import replaceInFiles from "replace-in-files";
import path from "path";
import fs from "fs";
import os from "os";
import dotenv from "dotenv";

const ENV_VARIABLES = {
  mailchimp: ["MAILCHIMP_DESTINATION_LIST_ID", "MAILCHIMP_API_KEY"],
  snowflake: [
    "SNOWFLAKE_ACCOUNT",
    "SNOWFLAKE_USERNAME",
    "SNOWFLAKE_PASSWORD",
    "SNOWFLAKE_WAREHOUSE",
    "SNOWFLAKE_DATABASE",
    "SNOWFLAKE_SCHEMA",
  ],
};

export async function updateEnvVariables(configDir: string) {
  const replacer = new Replacer(configDir);
  for (const plugin in ENV_VARIABLES) {
    const envVariables = ENV_VARIABLES[plugin];
    for (const envVar of envVariables) {
      await replacer.replace(plugin, envVar);
    }
  }
}

export function getEnvValue(plugin: string, envVar: string) {
  const inEnv = process.env[envVar];
  if (inEnv) {
    return inEnv;
  }

  const envStore = process.env.DEMO_ENV_STORE;
  let envStorePath = null;
  if (envStore) {
    envStorePath = path.resolve(envStore);
    if (!fs.existsSync(envStorePath)) {
      throw new Error(`DEMO_ENV_STORE does not exist: ${envStore}`);
    }
  }
  if (!envStorePath) {
    const homeDir = os.homedir();
    envStorePath = path.resolve(path.join(homeDir, "grouparoo", "env"));
    if (!fs.existsSync(envStorePath)) {
      envStorePath = null;
    }
  }

  if (envStorePath) {
    const envFilePath = path.join(envStorePath, plugin); // i.e. ~/grouparoo/env/mailchimp
    if (fs.existsSync(envFilePath)) {
      const fileEnv = readEnv(envFilePath);
      const value = fileEnv[envVar];
      if (value) {
        return value;
      }
    }
  }

  // TODO: should we look in the plugins/@grouparoo/<plugin>/__tests__/.env ?
  return null;
}

class Replacer {
  configDir: string;
  constructor(configDir: string) {
    this.configDir = configDir;
  }

  async replace(plugin: string, envVar: string) {
    const value = getEnvValue(plugin, envVar);
    if (!value) {
      return;
    }

    const files = path.resolve(path.join(this.configDir, "**", "*.json"));
    const options = { files, from: envVar, to: value };
    await replaceInFiles(options);
  }
}

function readEnv(filePath) {
  return dotenv.parse(fs.readFileSync(filePath));
}
