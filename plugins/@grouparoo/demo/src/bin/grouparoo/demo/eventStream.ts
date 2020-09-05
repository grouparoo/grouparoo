import { log, CLI, config, api } from "actionhero";
import {
  ApiKey,
  Permission,
  App,
  ProfilePropertyRule,
  Profile,
} from "@grouparoo/core";
import fetch from "isomorphic-fetch";
import * as uuid from "uuid";

const sleep = 100;
const parallelSessions = 1;

// prettier-ignore
const funnel = [
  { type: "pageview", data: { page: "/" }, percent: 100 },
  { type: "pageview", data: { page: "/about" }, percent: 90 },
  { type: "pageview", data: { page: "/sign-in" }, percent: 90 },
  { type: "identify", data: { page: "/sign-in" }, percent: 100 },
  { type: "pageview", data: { page: '/product'}, percent: 80, addToCartPercent : 50 },
  { type: "pageview", data: { page: '/product'}, percent: 80, addToCartPercent : 50 },
  { type: "pageview", data: { page: '/product'},  percent: 80, addToCartPercent : 50 },
  { type: "pageview", data: { page: '/cart'},  percent: 75 },
  { type: "pageview", data: { page: '/purchase'},  percent: 80 },
  { type: "pageview", data: { page: '/thanks'}, percent: 100 },
];

const products = [
  { name: "red-shell", price: 100 },
  { name: "blue-shell", price: 150 },
  { name: "green-shell", price: 50 },
  { name: "coin", price: 1 },
  { name: "banana-peel", price: 25 },
  { name: "mushroom", price: 40 },
  { name: "star", price: 99 },
];

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo demo eventStream";
    this.description =
      "Makes a continuous stream of events mirroring an e-commerce application against your existing profiles";
  }

  async getIdentifyingProfilePropertyRuleKey() {
    const eventApp = await App.findOne({ where: { type: "events" } });
    if (!eventApp || eventApp.state !== "ready") {
      throw new Error("your event app is not ready");
    }
    const appOptions = await eventApp.getOptions();
    const identifyingProfilePropertyRule = await ProfilePropertyRule.findOne({
      where: { guid: appOptions.identifyingProfilePropertyRuleGuid },
    });
    log(
      `${identifyingProfilePropertyRule.key} is the identifying profile property rule key`
    );
    return identifyingProfilePropertyRule.key;
  }

  async getApiKey() {
    const apiKey = await ApiKey.findOne({
      include: [{ model: Permission, where: { topic: "event", write: true } }],
    });
    if (!apiKey) {
      throw new Error(`cannot find an apiKey with write access to 'event'`);
    }
    log(`using apiKey ${apiKey.name} (${apiKey.apiKey})`);
    return apiKey.apiKey;
  }

  async getBaseUrl() {
    const baseUrl = `${
      process.env.WEB_URL || `http://localhost:${config.servers.web.port}`
    }/api/v1/track`;
    log(`using url ${baseUrl}`);
    return baseUrl;
  }

  async run() {
    const identifyingProfilePropertyRuleKey = await this.getIdentifyingProfilePropertyRuleKey();
    const apiKey = await this.getApiKey();
    const baseUrl = await this.getBaseUrl();

    const sessions = [];
    for (let i = 0; i < parallelSessions; i++) {
      sessions.push(
        new MockSession(i, baseUrl, apiKey, identifyingProfilePropertyRuleKey)
      );
    }

    async function tick() {
      for (const i in sessions) await sessions[i].tick();
      setTimeout(tick, sleep);
    }

    await tick();

    return false;
  }
}

class MockSession {
  id: number;
  baseUrl: string;
  apiKey: string;
  anonymousId: string;
  currentUser: Profile;
  profileProperties: { [key: string]: any };
  currentStep: number;
  identified: boolean;
  cart: Array<{ name: string; price: number }>;
  identifyingProfilePropertyRuleKey: string;

  constructor(
    id: number,
    baseUrl: string,
    apiKey: string,
    identifyingProfilePropertyRuleKey: string
  ) {
    this.id = id;
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.anonymousId = null;
    this.currentUser = null;
    this.profileProperties = {};
    this.currentStep = 0;
    this.identified = false;
    this.cart = [];
    this.identifyingProfilePropertyRuleKey = identifyingProfilePropertyRuleKey;
  }

  log(message) {
    log(`[session ${this.id}] - ${message}`);
  }

  async tick() {
    if (!this.currentStep) {
      this.currentStep = 0;
    }
    const step = funnel[this.currentStep];
    await this.setCurrentUser();
    await this.checkPercent(step);
    if (!this.currentUser) {
      return;
    }

    try {
      await this.track(step);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }

    this.currentStep++;
    if (this.currentStep >= funnel.length) {
      await this.empty();
    }
  }

  async track(step) {
    const params = {
      apiKey: this.apiKey,
      anonymousId: this.anonymousId,
      occurredAt: new Date().getTime(),
      type: step.type,
      data: step.data || {},
      userId: null,
    };

    if (step.type === "identify") {
      this.identified = true;
    }
    if (this.identified) {
      params.userId = this.profileProperties[
        this.identifyingProfilePropertyRuleKey
      ].values[0];
    }

    let relatedEventParams = {
      apiKey: this.apiKey,
      anonymousId: this.anonymousId,
      occurredAt: new Date().getTime(),
      userId: this.profileProperties[this.identifyingProfilePropertyRuleKey]
        .values[0],
      type: "",
      data: {},
    };

    if (step.type === "pageview" && step.data.page === "/product") {
      const currentProduct =
        products[Math.floor(Math.random() * products.length)];
      const randomNumber = Math.floor(Math.random() * 101);
      const added = randomNumber <= step.addToCartPercent;
      if (added) {
        this.cart.push(currentProduct);
        relatedEventParams.type = "itemAddedToCart";
        relatedEventParams.data = {
          name: currentProduct.name,
          price: currentProduct.price,
        };
      }
    } else if (step.type === "pageview" && step.data.page === "/purchase") {
      relatedEventParams.type = "purchase";
      let total = 0;
      this.cart.map((product) => (total = total + product.price));
      relatedEventParams.data = {
        products: JSON.stringify(this.cart.map((product) => product.name)),
        total,
      };
    }

    const response = await fetch(this.baseUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((r) => r.json());
    this.log(
      this.baseUrl +
        " " +
        JSON.stringify(Object.assign({}, params, { apiKey: undefined }))
    );
    if (response.error) throw response.error;

    if (relatedEventParams.type) {
      const relatedEventResponse = await fetch(this.baseUrl, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(relatedEventParams),
      }).then((r) => r.json());
      if (relatedEventResponse.error) throw relatedEventResponse.error;

      this.log(this.baseUrl + " " + JSON.stringify(relatedEventParams));
    }
  }

  async setCurrentUser() {
    if (this.currentUser) {
      return;
    }

    // normally, don't use random(), but this is not a runtime operation, so it should be OK
    this.currentUser = await Profile.findOne({
      order: api.sequelize.random(),
    });

    this.anonymousId = `?-${uuid.v4()}`;
    this.profileProperties = await this.currentUser.properties();
    if (!this.profileProperties[this.identifyingProfilePropertyRuleKey]) {
      return this.empty();
    }
    this.log(
      `using profile ${this.currentUser.guid} (${
        this.profileProperties[this.identifyingProfilePropertyRuleKey].values[0]
      })`
    );
  }

  async checkPercent(step) {
    const randomNumber = Math.floor(Math.random() * 101);
    if (randomNumber > step.percent) {
      return this.empty();
    }
  }

  async empty() {
    this.currentUser = null;
    this.profileProperties = {};
    this.currentStep = 0;
    this.identified = false;
    this.cart = [];
    this.log(`session complete`);
  }
}
