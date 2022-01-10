import fs from "fs";
import path from "path";

import { getConfigDir } from "../modules/pluginDetails";
import { GrouparooSubscription } from "./grouparooSubscription";
import { plugin } from "../modules/plugin";
import { Setting } from "../models/Setting";

export namespace ConfigUser {
  export type ConfigUserType = { email: boolean };

  export async function localUserFilePath() {
    const configDir = await getConfigDir(true);
    return path.join(configDir, "../.local/user.json");
  }

  async function store() {
    const localFilePath = await localUserFilePath();
    const localFileDir = path.dirname(localFilePath);
    if (!fs.existsSync(localFileDir)) {
      fs.mkdirSync(localFileDir, { recursive: true });
    }
    const fileContent: ConfigUserType = { email: true };
    fs.writeFileSync(localFilePath, JSON.stringify(fileContent, null, 2));
  }

  async function subscribe(
    email: string,
    subscribed: boolean = true
  ): Promise<void> {
    if (!subscribed) return;
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
    await store();
    if (subscribed) await subscribe(email, subscribed);
    await storeCompanyName(company);
  }

  export async function get() {
    const localFilePath = await localUserFilePath();
    if (!fs.existsSync(localFilePath)) return null;
    const fileContent = fs.readFileSync(localFilePath).toString();
    return JSON.parse(fileContent) as ConfigUserType;
  }
}
