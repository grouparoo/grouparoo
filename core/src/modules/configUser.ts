import fs from "fs";
import path from "path";

import { getConfigDir } from "../utils/pluginDetails";
import { GrouparooSubscription } from "./grouparooSubscription";
import { plugin } from "../modules/plugin";
import { Setting } from "../models/Setting";

export namespace ConfigUser {
  export function localUserFilePath() {
    return path.join(getConfigDir(), "../.local/user.json");
  }

  function store() {
    const localFileDir = path.dirname(localUserFilePath());
    if (!fs.existsSync(localFileDir)) {
      fs.mkdirSync(localFileDir, { recursive: true });
    }
    const fileContent = { email: true };
    fs.writeFileSync(localUserFilePath(), JSON.stringify(fileContent, null, 2));
  }

  async function subscribe(email: string, subscribed: boolean = true) {
    if (!subscribed) return null;
    await GrouparooSubscription({ email, subscribed });
  }

  async function storeCompanyName(company: string) {
    let setting = await Setting.findOne({ where: { key: "cluster-name" } });
    if (setting) {
      setting = await plugin.updateSetting(
        setting.pluginName,
        setting.key,
        company
      );
    }
    return setting;
  }

  export async function create({
    email,
    subscribed = true,
    company,
  }: {
    email: string;
    subscribed?: boolean;
    company: string;
  }) {
    if (process.env.GROUPAROO_RUN_MODE !== "cli:config") return;
    store();
    if (subscribed) await subscribe(email, subscribed);
    await storeCompanyName(company);
  }

  export async function get() {
    if (!fs.existsSync(localUserFilePath())) return null;
    const fileContent = fs.readFileSync(localUserFilePath()).toString();
    return JSON.parse(fileContent);
  }
}
