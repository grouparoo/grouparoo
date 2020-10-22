import { ApiKey } from "@grouparoo/core";
import * as uuid from "uuid";
import { runAction } from "./runAction";
import { log, userCreatedAt } from "./shared";
import fetch from "isomorphic-fetch";

// prettier-ignore
const funnel = [
  { type: "pageview",  data: { page: "/" }, percent: 100, user:false },
  { type: "pageview",  data: { page: "/about" }, percent: 90, user: false },
  { type: "pageview",  data: { page: "/product" }, percent: 90, user: false, category: true, addToCart: 50},
  { type: "pageview",  data: { page: "/product" }, percent: 85, user: false, category: true, addToCart: 50},
  { type: "pageview",  data: { page: "/product" }, percent: 80, user: false, category: true, addToCart: 50},
  { type: "pageview",  data: { page: "/cart" }, percent: 75, user: false, cart: true, checkout: true },
  { type: "pageview",  data: { page: "/sign-in" }, percent: 60, user: true },
  { type: "pageview",  data: { page: "/purchase" }, percent: 80, user: true, cart: true, purchase: true  },
  { type: "purchase",  data: {}, percent: 100, user: true, cart: true, purchase: true  },
  { type: "pageview",  data: { page: "/thanks" }, percent: 100, user: true, cart: true, purchase: true },
];

function inPercentage(percent) {
  const randomNumber = Math.floor(Math.random() * 101);
  if (randomNumber < percent) {
    return true;
  }
  return false;
}

export class MockSession {
  id: string;
  apiKey: ApiKey;
  purchase: { [key: string]: any };
  categories: string[];
  anonymousId: string;
  currentUserId: number;
  currentStep: number;
  identified: boolean;
  now: number;
  baseUrl: string;
  done: boolean;
  started: boolean;
  cart: string[];

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
    this.categories = categories;
    this.cart = [];
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
    const track = this.shouldTrack(step);
    if (!track) {
      return false;
    }

    if (track) {
      await this.track(step);
    }
    this.currentStep++;
    return true;
  }

  shouldTrack(step) {
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
    const loggedInPercent = 88;

    let userId: number;
    if (this.purchase) {
      // use this user
      userId = this.purchase.user_id;
    } else if (inPercentage(loggedInPercent)) {
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

  getCategory() {
    if (this.purchase) {
      return this.purchase.category;
    }
    // otherwise pick one
    const index = Math.floor(Math.random() * this.categories.length);
    const category = this.categories[index];

    if (!category) {
      throw "No category!";
    }
    return category;
  }

  getParams(type, addMs, data = {}) {
    let occurredAt: number = this.now + addMs;
    const params: any = {
      anonymousId: this.anonymousId,
      occurredAt: occurredAt,
      type: type,
      data: data || {},
    };
    if (this.identified) {
      params.userId = this.currentUserId;
    }
    return params;
  }

  async track(step) {
    const category = this.getCategory();

    const params = this.getParams(step.type, 0, step.data);
    if (step.category) {
      params.data.category = category;
    }
    if (step.cart) {
      params.data.cart = this.cart;
    }

    await this.sendEvent(params);

    if (step.addToCart) {
      await this.addToCart(step.addToCart, category);
    }

    if (step.user) {
      await this.identify();
    }
  }

  async addToCart(percent, category) {
    if (this.purchase) {
      // only adding it once
      if (this.cart.length > 0) {
        return;
      }
    } else if (!inPercentage(percent)) {
      return;
    }

    // put in cart and trigger event
    this.cart.push(category);
    const params = this.getParams("addToCart", 1, {
      category,
      cart: this.cart,
    });
    await this.sendEvent(params);
  }

  async identify() {
    if (this.identified || !this.currentUserId) {
      return;
    }
    const params = this.getParams("identify", 2, {});
    params.userId = this.currentUserId;
    this.identified = true;
    await this.sendEvent(params);
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
    data.occurredAt = new Date().getTime(); // streaming, do it now
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
