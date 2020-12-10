import fs from "fs-extra";

export function readPackageJSON(file: string) {
  return JSON.parse(fs.readFileSync(file).toString());
}
