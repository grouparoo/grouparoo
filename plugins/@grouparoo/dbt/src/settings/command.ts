import { runCommand } from "../utils/exec";

export interface dbtConnectionResponse {
  options: { [key: string]: any };
  error: string;
}

export interface dbtConnectionRequest {
  profile?: string; // Which profile to load. Overrides setting in dbt_project.yml.
  target?: string; // Which target to load for the given profile. Overrides default in profiles.yml
  projectDirRelativePath?: string;
  profileDirRelativePath?: string;
  projectDirFullPath?: string;
  profileDirFullPath?: string;
}

export interface dbtConnectionMethod {
  (argument: dbtConnectionRequest): Promise<dbtConnectionResponse>;
}

const dbtConnection: dbtConnectionMethod = async ({
  profile,
  projectDirRelativePath,
  profileDirRelativePath,
  projectDirFullPath,
  profileDirFullPath,
}) => {
  let cmd = "dbt debug";

  if (projectDirFullPath) {
    cmd += ` --project-dir '${projectDirFullPath}'`;
  }
  if (profileDirFullPath) {
    cmd += ` --profiles-dir '${profileDirFullPath}'`;
  }

  const response = await runCommand(cmd);
  return parseCommandResponse(response, cmd);
};

function parseCommandResponse(
  output: Awaited<ReturnType<typeof runCommand>>,
  cmd: string
): dbtConnectionResponse {
  // if command not found
  //    stderr: '/bin/sh: dbst: command not found\n',
  //    err: truthy

  // if profile not found
  //    stdout: 'Running with dbt=0.19.0\n' +
  //    'dbt version: 0.19.0\n' +
  //    'python version: 3.7.9\n' +
  //    'python path: /Users/brian/.pyenv/versions/3.7.9/bin/python\n' +
  //    'os info: Darwin-20.3.0-x86_64-i386-64bit\n' +
  //    'Using profiles.yml file at /Users/brian/grouparoo/x64_grouparoo/plugins/@grouparoo/dbt/__tests__/projects/postgresx/profiles.yml\n' +
  //    'Using dbt_project.yml file at /Users/brian/grouparoo/x64_grouparoo/plugins/@grouparoo/dbt/__tests__/projects/default/dbt_project.yml\n' +
  //    '\n' +
  //    'Configuration:\n' +
  //    '  profiles.yml file [ERROR not found]\n' +
  //    '  dbt_project.yml file [OK found and valid]\n' +
  //    '\n' +
  //    error: falsy

  // if project not found
  //    stdout: 'Running with dbt=0.19.0\n' +
  //    'dbt version: 0.19.0\n' +
  //    'python version: 3.7.9\n' +
  //    'python path: /Users/brian/.pyenv/versions/3.7.9/bin/python\n' +
  //    'os info: Darwin-20.3.0-x86_64-i386-64bit\n' +
  //    'Using profiles.yml file at /Users/brian/grouparoo/x64_grouparoo/plugins/@grouparoo/dbt/__tests__/projects/postgres/profiles.yml\n' +
  //    'Using dbt_project.yml file at /Users/brian/grouparoo/x64_grouparoo/plugins/@grouparoo/dbt/__tests__/projects/defaultx/dbt_project.yml\n' +
  //    '\n' +
  //    'Configuration:\n' +
  //    '  profiles.yml file [OK found and valid]\n' +
  //    '  dbt_project.yml file [ERROR not found]\n' +
  //    '\n' +
  //    'Required dependencies:\n' +
  //    ' - git [OK found]\n' +
  //    '\n' +
  //    'Connection:\n' +
  //    '  host: 127.0.0.1\n' +
  //    '  port: 5432\n' +
  //    '  user: myuser\n' +
  //    '  database: dbt_db\n' +
  //    '  schema: dbt_schema\n' +
  //    '  search_path: None\n' +
  //    '  keepalives_idle: 0\n' +
  //    '  sslmode: None\n' +
  //    '  Connection test: ERROR\n' +
  //    '\n' +

  const { stdout, stderr, err } = output;

  if (err) {
    let debug = `Failed: ${stderr}`;
    if (stdout) {
      debug += ` Output: ${stdout}`;
    }
    debug += ` Command run: ${cmd}`;
    return {
      options: {},
      error: debug,
    };
  }

  if (!stdout) {
    let debug = "No command response";
    debug += ` Command run: ${cmd}`;
    return {
      options: {},
      error: debug,
    };
  }

  let error: string = null;
  let type: string = "postgres";
  let options: { [key: string]: any } = {};

  // console.log({ stdout });

  const lines = stdout.split("\n");
  // console.log({ lines });
  let i = lines.indexOf("Connection:");
  if (i <= 0) {
    let debug = "Connection not found";
    debug += ` Command run: ${cmd}`;
    debug += ` Output: ${stdout}`;
    return {
      options: {},
      error: debug,
    };
  }

  while (true) {
    i++; // next line
    const line = lines[i].toString().trim();
    if (line.length === 0) {
      break;
    }
    const colon = line.indexOf(":");
    if (colon < 0) {
      break;
    }
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim();
    options[key] = value;
  }

  // console.log(options);
  return { options, error };
}
