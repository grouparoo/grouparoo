import fs from "fs-extra";
import { PackageJson } from "type-fest";

export function readPackageJSON(file: string) {
  return JSON.parse(fs.readFileSync(file).toString()) as PackageJson & {
    grouparoo: { plugins: string[] };
  };
}
