import fs from "fs";
import path from "path";

import { getConfigDir } from "../utils/pluginDetails";

const localUserFilePath = path.join(getConfigDir(), "../.local/user.json");

export namespace ConfigUser {
  export function create() {
    const localFileDir = path.dirname(localUserFilePath);
    if (!fs.existsSync(localFileDir)) {
      fs.mkdirSync(localFileDir, { recursive: true });
    }
    const fileContent = { email: true };
    fs.writeFileSync(localUserFilePath, JSON.stringify(fileContent, null, 2));
  }

  export function get() {
    if (!fs.existsSync(localUserFilePath)) return null;
    const fileContent = fs.readFileSync(localUserFilePath).toString();
    return JSON.parse(fileContent);
  }
}
