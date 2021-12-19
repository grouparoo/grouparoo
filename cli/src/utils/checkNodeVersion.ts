import * as semver from "semver";
import path from "path";
import { readPackageJSON } from "./readPackageJSON";
import Ora from "ora";

export function checkNodeVersion() {
  const requiredVersions = readPackageJSON(
    path.join(__dirname, "..", "..", "package.json")
  ).engines.node;
  const currentVersion = process.version;
  const match = semver.satisfies(currentVersion, requiredVersions);

  if (!match) {
    Ora().fail(
      `current node.js version ${currentVersion} does not match ${requiredVersions}`
    );
    process.exit(1);
  }
}
