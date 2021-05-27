import fs from "fs";
import path from "path";

import { getConfigDir } from "../utils/pluginDetails";
import { GrouparooSubscription } from "./grouparooSubscription";

const localUserFilePath = path.join(getConfigDir(), "../.local/user.json");

export namespace ConfigUser {
  function store() {
    const localFileDir = path.dirname(localUserFilePath);
    if (!fs.existsSync(localFileDir)) {
      fs.mkdirSync(localFileDir, { recursive: true });
    }
    const fileContent = { email: true };
    fs.writeFileSync(localUserFilePath, JSON.stringify(fileContent, null, 2));
  }

  async function subscribe(email: string, subscribed: boolean = true) {
    if (!subscribed) return null;
    await GrouparooSubscription({ email, subscribed });
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
    store();
    if (subscribed) await subscribe(email, subscribed);
  }

  export async function get() {
    if (!fs.existsSync(localUserFilePath)) return null;
    const fileContent = fs.readFileSync(localUserFilePath).toString();
    return JSON.parse(fileContent);
  }
}
