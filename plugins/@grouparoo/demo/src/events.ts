import { runAction } from "./util/runAction";
import * as uuid from "uuid";
import { ApiKey, App, ProfilePropertyRule, Source } from "@grouparoo/core";
import { getPurchaseCategories, getPurchases } from "./sample_data";
import { createPropertyRule, RuleDefinition } from "./util/propertyRules";
import { log, userCreatedAt } from "./util/shared";
import fetch from "isomorphic-fetch";

const PAGEVIEW_RULES: Array<RuleDefinition> = [
  {
    key: "pageviewCount",
    type: "integer",
    options: { "aggregation method": "count", column: "[data]-page" },
  },
  {
    key: "categoriesViewed",
    type: "string",
    isArray: true,
    options: { column: "[data]-category", "aggregation method": "all values" },
    filters: [{ key: "[data]-page", op: "equals", match: "/product" }],
  },
  {
    key: "recentVisitDate",
    type: "date",
    options: {
      "aggregation method": "most recent value",
      column: "occurredAt",
    },
  },
];

export async function events() {
  const app = await enableEventsApp();

  const apiKey = await getApiKey();
  const categories = await getPurchaseCategories();
  const purchases = await getPurchases();
  await generateBrowseEvents(purchases.length * 1.25, apiKey, categories);
  await generatePurchaseEvents(purchases, apiKey);

  await createSource(app, "pageview");
  await createPropertyRules(app, "pageview", PAGEVIEW_RULES);
}

export async function createPropertyRules(
  app: App,
  eventType: string,
  rules: Array<RuleDefinition>
) {
  const source = await findEventSource(app, eventType);
  for (const rule of rules) {
    await createPropertyRule(source, rule);
  }
}

async function findEventSource(app, eventType) {
  const where = {
    appGuid: app.guid,
    type: "events-table-import",
  };
  const sources = await Source.scope(null).findAll({ where });
  for (const source of sources) {
    const options = await source.getOptions();
    if (options.type === eventType) {
      return source;
    }
  }
  return null;
}

async function createSource(app: App, eventType: string) {
  const found = await findEventSource(app, eventType);

  const params = {
    appGuid: app.guid,
    name: `${eventType} Events`,
    type: "events-table-import",
    state: "ready",
    mapping: {},
    options: {
      type: eventType,
    },
    guid: found?.guid,
  };

  if (found) {
    await runAction("source:edit", params);
  } else {
    await runAction("source:create", params);
  }

  const made = await findEventSource(app, eventType);
  if (!made) {
    throw new Error(`Event source not created (${eventType})!`);
  }
  return made;
}

async function generateBrowseEvents(count, apiKey, categories) {
  for (let i = 0; i < count; i++) {
    const session = new MockSession(`browse${i}`, apiKey, null, categories);
    await session.run();
  }
}

async function generatePurchaseEvents(purchases, apiKey) {
  for (const purchase of purchases) {
    const session = new MockSession(
      `purchase${purchase.id}`,
      apiKey,
      purchase,
      []
    );
    await session.run();
  }
}

// copied from initializer/events.ts
async function addEventsApp() {
  let eventsApp = await App.scope(null).findOne({
    where: {
      type: "events",
    },
  });
  if (!eventsApp) {
    eventsApp = App.build({
      type: "events",
      name: "events",
      state: "draft",
    });
    App.generateGuid(eventsApp);
    // @ts-ignore
    await eventsApp.save({ hooks: false });
    log(1, `created events app (${eventsApp.guid})`);
  }
}

async function enableEventsApp() {
  await addEventsApp();
  const where = { type: "events" };
  const found = await App.scope(null).findOne({ where });
  if (!found) {
    throw new Error(`Events App not found!`);
  }

  const ruleGuid = await findIdentifyingRuleGuid();

  const params = {
    guid: found.guid,
    name: "events",
    type: "events",
    state: "ready",
    options: { identifyingProfilePropertyRuleGuid: ruleGuid },
  };

  await runAction("app:edit", params);

  return found.reload();
}

async function findIdentifyingRuleGuid() {
  const where = { key: "userId" };
  const found = await ProfilePropertyRule.findOne({ where });
  if (!found) {
    throw new Error(`Identifying rule not found: ${where.key}`);
  }
  return found.guid;
}

export async function getApiKey(): Promise<ApiKey> {
  const where = { name: "Demo API Key" };

  const found = await ApiKey.findOne({ where });
  const params = {
    name: where.name,
    permissionAllRead: true,
    permissionAllWrite: true,
    guid: found?.guid,
    permissions: [],
  };
  if (found) {
    await runAction("apiKey:edit", params);
  } else {
    await runAction("apiKey:create", params);
  }

  const made = await ApiKey.findOne({ where });
  if (!made) {
    throw new Error(`Events apiKey not made`);
  }
  return made;
}

// prettier-ignore
const funnel = [
  { type: "pageview", data: { page: "/" }, percent: 100, user:false },
  { type: "pageview", data: { page: "/about" }, percent: 90, user: false },
  { type: "pageview", data: { page: "/product" }, percent: 80, user: false, category: true },
  { type: "pageview", data: { page: "/cart" }, percent: 75, user: false, category: true },
  { type: "pageview", data: { page: "/sign-in" }, percent: 60, user: true },
 // { type: "identify", data: { page: "/sign-in" }, percent: 100 },
  { type: "pageview", data: { page: "/purchase" }, percent: 80, user: true, category: true, purchase: true },
  { type: "pageview", data: { page: "/thanks" }, percent: 100, user: true, category: true, purchase: true },
];

export class MockSession {
  id: string;
  apiKey: ApiKey;
  purchase: { [key: string]: any };
  category: string;
  categories: string[];
  anonymousId: string;
  currentUserId: number;
  currentStep: number;
  identified: boolean;
  now: number;
  baseUrl: string;
  done: boolean;
  started: boolean;

  constructor(
    id: string,
    apiKey: ApiKey,
    purchase: { [key: string]: any },
    categories: string[],
    baseUrl?: string
  ) {
    this.id = id;
    this.apiKey = apiKey;
    this.anonymousId = null;
    this.currentUserId = null;
    this.currentStep = 0;
    this.identified = false;
    this.purchase = purchase;
    this.category = null;
    this.categories = categories;
    this.now = 0;
    this.baseUrl = baseUrl;
    this.done = false;
    this.started = false;
  }

  async start() {
    if (!this.started) {
      this.started = true;
      await this.pickCurrentUser();
      await this.setNow();
    }
  }

  async run() {
    while (await this.tick()) {
      this.now += 1000;
      log(4, `tick: ${this.id} -> ${this.currentStep}`);
    }
  }

  async tick(): Promise<boolean> {
    if (this.done) {
      return false;
    }
    await this.start();
    const step = funnel[this.currentStep];
    if (!this.shouldContinue(step)) {
      this.done = true;
      return false;
    }

    await this.track(step);
    this.currentStep++;
    return true;
  }

  shouldContinue(step) {
    if (!step) {
      return false;
    }
    if (this.purchase) {
      return true; // going to the end!
    }
    if (step.user && !this.currentUserId) {
      return false; // was fully anonymous user
    }
    if (step.purchase && !this.purchase) {
      return false; // not going to happen
    }

    const randomNumber = Math.floor(Math.random() * 101);
    if (randomNumber > step.percent) {
      return false;
    }

    // carry on!
    return true;
  }

  pickUserId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  // find a user, (or stay anonymous -- null)
  async pickCurrentUser() {
    const loggedOutPercentage = 12;
    const randomNumber = Math.floor(Math.random() * 101);

    let userId: number;
    if (this.purchase) {
      // use this user
      userId = this.purchase.user_id;
    } else if (randomNumber < loggedOutPercentage) {
      // users 1 through 1000
      userId = this.pickUserId();
    } else {
      // otherwise, stay logged out
      userId = null;
    }

    this.currentUserId = userId;
    this.anonymousId = `?-${uuid.v4()}`;

    log(
      4,
      `${this.id} userId: ${this.currentUserId} anonymousId: ${this.anonymousId}`
    );
  }

  // set the time to start, there's a second between each step
  async setNow() {
    let userId = this.currentUserId;
    if (!userId) {
      // random user, pick one
      userId = this.pickUserId();
    }
    let firstUser = -1;
    let firstPurchase = -1;

    for (let i = 0; i < funnel.length; i++) {
      const step = funnel[i];
      if (firstUser < 0 && step.user) {
        firstUser = i;
      }
      if (firstPurchase < 0 && step.purchase) {
        firstPurchase = i;
      }
    }
    if (this.purchase) {
      // use that
      this.now = this.purchase.created_at.getTime() - firstPurchase * 1000;
    } else {
      // some time after created
      const now = new Date().getTime();
      let generatedCreateAt = await userCreatedAt(userId);
      let creationAgo = now - generatedCreateAt.getTime();
      creationAgo = Math.random() * creationAgo;
      this.now = now - creationAgo;
    }
  }

  async getCategory() {
    if (this.category) {
      return this.category;
    }
    if (this.purchase) {
      this.category = this.purchase.category;
    } else {
      // otherwise pick one
      const index = Math.floor(Math.random() * this.categories.length);
      this.category = this.categories[index];
    }

    if (!this.category) {
      throw new Error("no category set!");
    }
    return this.category;
  }

  async track(step) {
    let occurredAt: number = this.now;

    const params: any = {
      anonymousId: this.anonymousId,
      occurredAt: occurredAt,
      type: step.type,
      data: step.data || {},
    };

    if (this.identified) {
      params.userId = this.currentUserId;
    }
    if (step.category) {
      params.data.category = await this.getCategory();
    }

    await this.sendEvent(params);

    if (!this.identified && step.user && this.currentUserId) {
      await this.sendEvent({
        anonymousId: this.anonymousId,
        userId: this.currentUserId,
        occurredAt: occurredAt + 1,
        type: "identify",
        data: params.data,
      });
      this.identified = true;
    }
  }

  async sendEvent(params) {
    if (this.baseUrl) {
      await this.postEvent(params);
    } else {
      await runAction("event:create", params, { apiKey: this.apiKey });
    }
  }

  async postEvent(params) {
    const data = Object.assign({}, params, { apiKey: this.apiKey.apiKey });
    data.occuredAt = new Date().getTime(); // streaming, do it now
    log(1, this.baseUrl + " " + JSON.stringify(data));
    await fetch(this.baseUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok && !response.error) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}
