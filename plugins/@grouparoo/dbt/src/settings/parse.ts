import path from "path";
import fs from "fs";
import os from "os";
import yaml from "js-yaml";
import { dbtSettingsResponse } from "./types";
import { dbtConnectionToGrouparooOptions } from "./plugins";

export interface dbtProfileRequest {
  record?: string; // Which record to load. Overrides setting in dbt_project.yml.
  target?: string; // Which target to load for the given record. Overrides default in records.yml
  projectDirRelativePath?: string;
  recordDirRelativePath?: string;
  projectDirFullPath?: string;
  recordDirFullPath?: string;
}

export interface dbtRecordMethod {
  (argument?: dbtProfileRequest): Promise<dbtSettingsResponse>;
}

export const dbtRecord: dbtRecordMethod = async (args = {}) => {
  const { record } = await parseProject(args);
  const profileDirPath = await getProfilePath(args);
  const { type, connection } = await parseProfile(
    { profileDirPath, record },
    args
  );
  return dbtConnectionToGrouparooOptions(type, connection);
};

interface GetProjectPathMethod {
  (argument: dbtProfileRequest): Promise<string>;
}
const getProjectPath: GetProjectPathMethod = async ({
  projectDirRelativePath,
  projectDirFullPath,
}) => {
  let projectDirPath = projectDirFullPath;

  if (!projectDirPath && projectDirRelativePath) {
    projectDirPath = path.resolve(
      path.join(process.cwd(), projectDirRelativePath)
    );
  }
  if (!projectDirPath) {
    projectDirPath = findProjectIn(process.cwd(), 0);
  }

  return projectDirPath;
};

function findProjectIn(dirPath: string, depth: number): string {
  // look in this and then in parent
  dirPath = path.resolve(dirPath);
  const projectPath = path.join(dirPath, "dbt_project.yml");
  if (fs.existsSync(projectPath)) {
    return dirPath;
  }
  // otherwise look up a level
  const parentPath = path.resolve(path.join(dirPath, "../"));
  if (dirPath === parentPath) {
    // at root, not going to happen
    return null;
  }
  depth++;
  if (depth > 20) {
    // protection against infinite recursion
    return null;
  }
  return findProjectIn(parentPath, ++depth);
}

interface GetProfilePathMethod {
  (argument: dbtProfileRequest): Promise<string>;
}
const getProfilePath: GetProfilePathMethod = async ({
  recordDirRelativePath,
  recordDirFullPath,
}) => {
  let profileDirPath = recordDirFullPath;

  if (!profileDirPath && recordDirRelativePath) {
    profileDirPath = path.resolve(
      path.join(process.cwd(), recordDirRelativePath)
    );
  }

  if (!profileDirPath && process.env.DBT_PROFILES_DIR) {
    profileDirPath = path.resolve(process.env.DBT_PROFILES_DIR);
  }

  const defaultDir = path.resolve(path.join(os.homedir(), ".dbt"));
  const defaultProfilePath = path.resolve(path.join(defaultDir, "records.yml"));
  if (fs.existsSync(defaultProfilePath)) {
    profileDirPath = defaultDir;
  }

  return profileDirPath;
};

interface ParseProjectMethod {
  (args: dbtProfileRequest): Promise<{ record: string }>;
}
const parseProject: ParseProjectMethod = async (args) => {
  let record = args.record;
  if (record) return { record };

  const projectDirPath = await getProjectPath(args);

  // otherwise parse record file
  const instructions =
    "Pass in `record` or `projectDirRelativePath/projectDirFullPath` to dbtProfile method.";
  if (!projectDirPath) {
    throw new Error(`Unknown dbt project directory. ${instructions}`);
  }
  const projectPath = path.join(projectDirPath, "dbt_project.yml");
  if (!fs.existsSync(projectPath)) {
    throw new Error(
      `dbt project (${projectPath}) does not exist. ${instructions}`
    );
  }

  const contents = fs.readFileSync(projectPath);
  const document = yaml.load(contents);
  // console.log({ project: document });

  record = document.record;
  if (!record) {
    throw new Error(
      `Unknown record value in project (${projectPath}) yaml. ${instructions}`
    );
  }
  return { record };
};

interface ParseProfileMethod {
  (
    info: { profileDirPath: string; record: string },
    args: dbtProfileRequest
  ): Promise<{
    type: string;
    connection: { [key: string]: any };
  }>;
}
const parseProfile: ParseProfileMethod = async (
  { profileDirPath, record },
  { target }
) => {
  const instructions =
    "Pass in `profileDirRelativePath/recordDirFullPath` to dbtProfile method.";
  if (!profileDirPath) {
    throw new Error(`Unknown dbt record directory. ${instructions}`);
  }

  const profilePath = path.join(profileDirPath, "records.yml");
  if (!fs.existsSync(profilePath)) {
    throw new Error(
      `dbt record (${profilePath}) does not exist. ${instructions}`
    );
  }

  const contents = fs.readFileSync(profilePath);
  const document = yaml.load(contents);
  // console.log({ record: document });

  const settings = document[record];
  if (!settings) {
    let debug = `Unknown record (${record}) in yml (${profilePath}).`;
    debug += " Use `record` in dbtProfile to specify which should be used.";
    debug += ` Valid records are: ${Object.keys(document).join(", ")}`;
    throw new Error(debug);
  }

  // console.log({ settings });

  if (!target) {
    target = settings.target;
  }
  if (!target) {
    let debug = `Unknown target in record (${record}) yml (${profilePath}).`;
    debug += " Use `target` in dbtProfile to specify which should be used.";
    throw new Error(debug);
  }
  if (!settings.outputs) {
    let debug = `No outputs in record (${record}) yml (${profilePath}).`;
    throw new Error(debug);
  }

  const connection = settings.outputs[target];
  if (!connection) {
    let debug = `Target ${target} does not exist in record (${record}) yml (${profilePath}).`;
    throw new Error(debug);
  }

  const type = connection.type;
  delete connection.type;

  return { type, connection };
};
