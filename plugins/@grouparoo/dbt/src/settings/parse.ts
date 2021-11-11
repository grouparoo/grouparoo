import path from "path";
import fs from "fs";
import os from "os";
import yaml from "js-yaml";
import { dbtSettingsResponse } from "./types";
import { dbtConnectionToGrouparooOptions } from "./plugins";

export interface dbtProfileRequest {
  profile?: string; // Which profile to load. Overrides setting in dbt_project.yml.
  target?: string; // Which target to load for the given profile. Overrides default in profiles.yml
  projectDirRelativePath?: string;
  profileDirRelativePath?: string;
  projectDirFullPath?: string;
  profileDirFullPath?: string;
}

export interface dbtProfileMethod {
  (argument?: dbtProfileRequest): Promise<dbtSettingsResponse>;
}

export const dbtProfile: dbtProfileMethod = async (args = {}) => {
  const { profile } = await parseProject(args);
  const profileDirPath = await getProfilePath(args);
  const { type, connection } = await parseProfile(
    { profileDirPath, profile },
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
  profileDirRelativePath,
  profileDirFullPath,
}) => {
  let profileDirPath = profileDirFullPath;

  if (!profileDirPath && profileDirRelativePath) {
    profileDirPath = path.resolve(
      path.join(process.cwd(), profileDirRelativePath)
    );
  }

  if (!profileDirPath && process.env.DBT_PROFILES_DIR) {
    profileDirPath = path.resolve(process.env.DBT_PROFILES_DIR);
  }

  const defaultDir = path.resolve(path.join(os.homedir(), ".dbt"));
  const defaultProfilePath = path.resolve(
    path.join(defaultDir, "profiles.yml")
  );
  if (fs.existsSync(defaultProfilePath)) {
    profileDirPath = defaultDir;
  }

  return profileDirPath;
};

interface ParseProjectMethod {
  (args: dbtProfileRequest): Promise<{ profile: string }>;
}
const parseProject: ParseProjectMethod = async (args) => {
  let profile = args.profile;
  if (profile) return { profile };

  const projectDirPath = await getProjectPath(args);

  // otherwise parse profile file
  const instructions =
    "Pass in `profile` or `projectDirRelativePath/projectDirFullPath` to dbtProfile method.";
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

  profile = document.profile;
  if (!profile) {
    throw new Error(
      `Unknown profile value in project (${projectPath}) yaml. ${instructions}`
    );
  }
  return { profile };
};

interface ParseProfileMethod {
  (
    info: { profileDirPath: string; profile: string },
    args: dbtProfileRequest
  ): Promise<{
    type: string;
    connection: { [key: string]: any };
  }>;
}
const parseProfile: ParseProfileMethod = async (
  { profileDirPath, profile },
  { target }
) => {
  const instructions =
    "Pass in `profileDirRelativePath/profileDirFullPath` to dbtProfile method.";
  if (!profileDirPath) {
    throw new Error(`Unknown dbt profile directory. ${instructions}`);
  }

  const profilePath = path.join(profileDirPath, "profiles.yml");
  if (!fs.existsSync(profilePath)) {
    throw new Error(
      `dbt profile (${profilePath}) does not exist. ${instructions}`
    );
  }

  const contents = fs.readFileSync(profilePath);
  const document = yaml.load(contents);
  // console.log({ profile: document });

  const settings = document[profile];
  if (!settings) {
    let debug = `Unknown profile (${profile}) in yml (${profilePath}).`;
    debug += " Use `profile` in dbtProfile to specify which should be used.";
    debug += ` Valid profiles are: ${Object.keys(document).join(", ")}`;
    throw new Error(debug);
  }

  // console.log({ settings });

  if (!target) {
    target = settings.target;
  }
  if (!target) {
    let debug = `Unknown target in profile (${profile}) yml (${profilePath}).`;
    debug += " Use `target` in dbtProfile to specify which should be used.";
    throw new Error(debug);
  }
  if (!settings.outputs) {
    let debug = `No outputs in profile (${profile}) yml (${profilePath}).`;
    throw new Error(debug);
  }

  const connection = settings.outputs[target];
  if (!connection) {
    let debug = `Target ${target} does not exist in profile (${profile}) yml (${profilePath}).`;
    throw new Error(debug);
  }

  const type = connection.type;
  delete connection.type;

  return { type, connection };
};
