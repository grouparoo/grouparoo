import path from "path";
import fs from "fs";
import { readPackageJSON } from "./readPackageJSON";

export function getCoreVersion(workDir: string) {
  let coreVersion = "latest";
  const packageFile = path.join(workDir, "package.json");
  if (fs.existsSync(packageFile)) {
    let pkgJSONContents = readPackageJSON(packageFile);
    if (pkgJSONContents.dependencies["@grouparoo/core"]) {
      coreVersion = pkgJSONContents.dependencies["@grouparoo/core"].trim();
    }
  }

  return coreVersion;
}
