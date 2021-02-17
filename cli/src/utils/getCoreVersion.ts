import path from "path";
import fs from "fs";
import { readPackageJSON } from "./readPackageJSON";

/**
 * Get the exact version of @grouparoo/core installed in this project.  Defaults to 'latest'
 * @param workDir
 */
export function getCoreVersion(workDir: string) {
  let coreVersion = "latest";

  try {
    // prefer to get the exact version installed
    const corePath = require.resolve("@grouparoo/core", { paths: [workDir] });
    const corePackageFile = path.join(corePath, "..", "..", "package.json");
    const corePkgJSONContents = readPackageJSON(corePackageFile);
    coreVersion = corePkgJSONContents.version;
  } catch (error) {
    // otherwise get the version listed in the top-level package.json
    const localPackageFile = path.join(workDir, "package.json");
    if (fs.existsSync(localPackageFile)) {
      let pkgJSONContents = readPackageJSON(localPackageFile);
      if (pkgJSONContents.dependencies["@grouparoo/core"]) {
        coreVersion = pkgJSONContents.dependencies["@grouparoo/core"].trim();
      }
    }
  }

  return coreVersion;
}
