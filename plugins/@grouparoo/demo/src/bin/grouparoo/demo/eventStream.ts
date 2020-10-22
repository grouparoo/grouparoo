import { log, CLI, config, api } from "actionhero";
import { init } from "../../../util/shared";
import { MockSession, getApiKey } from "../../../util/MockSession";
import { getPurchaseCategories } from "../../../sample_data";
import { ApiKey } from "@grouparoo/core";

const sleep = 100;
const parallelSessions = 2;

export class Console extends CLI {
  apiKey: ApiKey;
  categories: string[];
  baseUrl: string;

  constructor() {
    super();
    this.name = "grouparoo demo eventStream";
    this.description = "Makes a continuous stream of user browsing events";

    this.apiKey = null;
    this.categories = null;
    this.baseUrl = null;
  }

  async getBaseUrl() {
    const baseUrl = `${
      process.env.WEB_URL || `http://localhost:${config.servers.web.port}`
    }/api/v1/track`;
    log(`using url ${baseUrl}`);
    return baseUrl;
  }

  makeSession(i) {
    return new MockSession(
      `stream${i}`,
      this.apiKey,
      null,
      this.categories,
      this.baseUrl
    );
  }

  async run() {
    await init();

    this.apiKey = await getApiKey();
    this.categories = await getPurchaseCategories();
    this.baseUrl = await this.getBaseUrl();

    const runner = this;
    const sessions = [];
    for (let i = 0; i < parallelSessions; i++) {
      sessions.push(runner.makeSession(i));
    }

    async function tick() {
      for (const i in sessions) {
        const shouldContinue = await sessions[i].tick();
        if (!shouldContinue) {
          // make a new one
          sessions[i] = runner.makeSession(i);
        }
      }
      setTimeout(tick, sleep);
    }

    await tick();

    return false;
  }
}
