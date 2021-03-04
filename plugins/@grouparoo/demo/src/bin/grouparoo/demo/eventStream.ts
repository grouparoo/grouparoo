import { log, CLI, config, api } from "actionhero";
import { MockSession, getApiKey } from "../../../util/MockSession";
import { getPurchaseCategories } from "../../../sample_data";
import { ApiKey, Property, App } from "@grouparoo/core";

const sleep = 100;
const parallelSessions = 1;

export class Console extends CLI {
  apiKey: ApiKey;
  categories: string[];
  baseUrl: string;
  userIdId: string;

  constructor() {
    super();
    this.name = "demo-event-stream";
    this.description = "Makes a continuous stream of user browsing events";

    this.apiKey = null;
    this.categories = null;
    this.baseUrl = null;
    this.userIdId = null;
  }

  getBaseUrl() {
    const baseUrl = `${
      process.env.WEB_URL || `http://localhost:${config.servers.web.port}`
    }/api/v1/track`;
    log(`using url ${baseUrl}`);
    return baseUrl;
  }

  async getUserIdId() {
    const eventApp = await App.findOne({ where: { type: "events" } });
    if (!eventApp || eventApp.state !== "ready") {
      throw new Error("your event app is not ready");
    }
    const appOptions = await eventApp.getOptions();
    const id = appOptions.identifyingPropertyId;
    if (!id) throw new Error("no identifyingPropertyId on the events app");
    return id.toString();
  }

  makeSession(i) {
    return new MockSession(`stream${i}`, this.apiKey, null, this.categories, {
      baseUrl: this.baseUrl,
      userIdId: this.userIdId,
    });
  }

  async run() {
    this.apiKey = await getApiKey();
    this.categories = await getPurchaseCategories();
    this.baseUrl = this.getBaseUrl();
    this.userIdId = await this.getUserIdId();

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
