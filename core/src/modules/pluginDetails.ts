import fs from "fs";
import os from "os";
import path from "path";
import tar from "tar";
import fetch from "isomorphic-fetch";
import { PackageJson } from "type-fest";
import pluginInjection from "../config/pluginInjection";

type GrouparooPackageJson = PackageJson & {
  grouparoo?: {
    grouparoo_monorepo_app?: string;
    plugins?: string[];
    env?: {
      api?: string[];
      web?: string[];
    };
    serverInjection?: string[];
  };
};

let initialPackageJSON: GrouparooPackageJson = {};
if (process.env.INIT_CWD) {
  initialPackageJSON = readPackageJson(
    path.join(process.env.INIT_CWD, "package.json")
  );
} else if (process.env.JEST_WORKER_ID && process.env.PWD) {
  initialPackageJSON = readPackageJson(
    path.join(process.env.PWD, "package.json")
  );
}

export const grouparooMonorepoApp = initialPackageJSON.grouparoo
  ? initialPackageJSON.grouparoo.grouparoo_monorepo_app
  : null;

export function readPackageJson(path: string): GrouparooPackageJson {
  if (!fs.existsSync(path)) return {};
  return JSON.parse(fs.readFileSync(path).toString());
}

export function getParentPath() {
  if (process.env.GROUPAROO_PARENT_PATH) {
    if (path.isAbsolute(process.env.GROUPAROO_PARENT_PATH)) {
      return process.env.GROUPAROO_PARENT_PATH;
    } else {
      return fs.realpathSync(
        path.join(process.cwd(), process.env.GROUPAROO_PARENT_PATH)
      );
    }
  }

  if (grouparooMonorepoApp) {
    return path.join(__dirname, "..", "..", "..", "apps", grouparooMonorepoApp);
  }
  if (runningCoreDirectly()) return getCoreRootPath();
  return path.join(__dirname, "..", "..", "..", "..", "..");
}

let extractedConfigDir: string;
export async function getConfigDir(throwIfDisabled: true): Promise<string>;
export async function getConfigDir(
  throwIfDisabled: false
): Promise<string | false>;
export async function getConfigDir(
  throwIfDisabled: boolean
): Promise<string | false>;
export async function getConfigDir(): Promise<string | false>;
export async function getConfigDir(throwIfDisabled?: boolean) {
  if (process.env.GROUPAROO_CONFIG_DIR === "false") {
    if (throwIfDisabled)
      throw new Error(
        "The config directory has been disabled. Make sure that the `GROUPAROO_CONFIG_DIR` environment variable is not set to `false`."
      );
    return false;
  }

  let configDir =
    process.env.GROUPAROO_CONFIG_DIR || path.join(getParentPath(), "config");

  if (process.env.GROUPAROO_CONFIG_ARCHIVE) {
    if (!extractedConfigDir) {
      const workingDir = fs.mkdtempSync(path.join(os.tmpdir(), "grouparoo-"));

      let archivePath = process.env.GROUPAROO_CONFIG_ARCHIVE;
      if (
        archivePath.startsWith("http://") ||
        archivePath.startsWith("https://")
      ) {
        const res = await fetch(archivePath);
        archivePath = path.join(workingDir, "grouparoo.tar.gz");
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(archivePath, Buffer.from(buffer));
      }

      extractedConfigDir = path.join(workingDir, "extracted");
      fs.mkdirSync(extractedConfigDir);
      await tar.extract({ cwd: extractedConfigDir, file: archivePath });
    }

    configDir = path.join(
      extractedConfigDir,
      process.env.GROUPAROO_CONFIG_DIR || "config"
    );
  }

  return configDir;
}

export function getCoreRootPath() {
  return fs.realpathSync(path.join(__dirname, "..", ".."));
}

export type PluginManifest = {
  parent: {
    path?: string;
    grouparoo: GrouparooPackageJson["grouparoo"];
  };
  plugins: {
    name: string;
    path: string;
    version: string;
    license: string;
    url: string;
    grouparoo?: GrouparooPackageJson["grouparoo"];
  }[];
  missingPlugins: string[];
};

export function getPluginManifest() {
  const manifest: PluginManifest = {
    parent: {
      path: null,
      grouparoo: { plugins: [] },
    },
    plugins: [],
    missingPlugins: [],
  };

  // parent
  const parentPath = getParentPath();
  const parentPkg = readPackageJson(path.join(parentPath, "package.json"));
  manifest.parent = { grouparoo: parentPkg.grouparoo, path: parentPath };

  // plugins
  let pluginNames = [...(manifest?.parent?.grouparoo?.plugins || [])];
  pluginNames = pluginNames.concat(
    Object.keys(pluginInjection).filter((value) => !value.includes("ui-"))
  );

  const availableUiPlugins = [
    "@grouparoo/ui-enterprise",
    "@grouparoo/ui-community",
    "@grouparoo/ui-config",
  ];

  const installedPackages = Object.keys(
    parentPkg?.devDependencies || []
  ).concat(Object.keys(parentPkg?.dependencies || []));

  for (let availableUiPlugin of availableUiPlugins) {
    if (installedPackages.includes(availableUiPlugin)) {
      pluginNames.push(availableUiPlugin);
    }
  }

  pluginNames = Array.from(new Set(pluginNames));

  for (const pluginName of pluginNames) {
    if (pluginName === "@grouparoo/core") continue;

    let pluginPath = "";
    try {
      pluginPath = require.resolve(pluginName); // require("@grouparoo/mysql")
    } catch {
      pluginPath = path.join(parentPath, "node_modules", pluginName); // require("../../../staging-enterprise/@grouparoo/mysql")
      if (!fs.existsSync(pluginPath)) {
        pluginPath = path.join(
          grouparooMonorepoApp
            ? path.join(
                __dirname,
                "..",
                "..",
                "..",
                "apps",
                grouparooMonorepoApp
              )
            : path.join(__dirname, "..", "..", "..", "..", "..", ".."),
          "node_modules",
          pluginName
        );
      }
    }

    if (!fs.existsSync(pluginPath)) {
      if (!manifest.missingPlugins.includes(pluginName)) {
        manifest.missingPlugins.push(pluginName);
      }
      continue;
    }

    pluginPath = fs.realpathSync(pluginPath);

    const pluginPkg = readPackageJson(path.join(pluginPath, "package.json"));

    if (pluginPkg.name) {
      manifest.plugins.push({
        name: pluginPkg.name,
        version: pluginPkg.version,
        license: pluginPkg.license,
        url: pluginPkg.repository
          ? typeof pluginPkg.repository === "string"
            ? pluginPkg.repository || null
            : pluginPkg.repository.url
          : null || pluginPkg.homepage,
        path: pluginPath,
        grouparoo: pluginPkg.grouparoo || null,
      });
    }
  }

  manifest.plugins.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  return manifest;
}

export function runningCoreDirectly() {
  const monorepoPackageJSON = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "package.json"
  );
  if (fs.existsSync(monorepoPackageJSON)) {
    const pkgPkg = readPackageJson(monorepoPackageJSON);
    if (pkgPkg.name === "@grouparoo/grouparoo") {
      return true;
    }
  }

  return false;
}

export function getCoreVersion() {
  const corePkgJson = readPackageJson(
    path.join(__dirname, "..", "..", "package.json")
  );
  return corePkgJson.version;
}

export function getNodeVersion() {
  return process.version;
}
