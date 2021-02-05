import { api } from "actionhero";
import { ApiKey, ProfileProperty } from "@grouparoo/core";
import * as uuid from "uuid";
import { runAction } from "./runAction";
import { log, userCreatedAt } from "./shared";
import fetch from "isomorphic-fetch";
import { Op } from "sequelize";

// prettier-ignore
const funnel = [
  { type: "pageview",  data: { page: "/" }, percent: 100 },
  { type: "pageview",  data: { page: "/about" }, percent: 90 },
  { type: "pageview",  data: { page: "/product" }, percent: 90, category: true, addToCart: 50},
  { type: "pageview",  data: { page: "/product" }, percent: 85, category: true, addToCart: 50},
  { type: "pageview",  data: { page: "/product" }, percent: 80,  category: true, addToCart: 50},
  { type: "pageview",  data: { page: "/cart" }, percent: 75, cart: true },
  { type: "pageview",  data: { page: "/sign-in" }, percent: 60, user: true, signin: true },
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

export interface Runtime {
  baseUrl: string;
  userIdId: string;
}

export class MockSession {
  id: string;
  apiKey: ApiKey;
  purchase: { [key: string]: any };
  categories: string[];
  anonymousId: string;
  currentUserId: number | string | boolean | Date;
  currentStep: number;
  identified: boolean;
  now: number;
  runtime: Runtime;
  done: boolean;
  started: boolean;
  cart: string[];

  constructor(
    id: string,
    apiKey: ApiKey,
    purchase: { [key: string]: any },
    categories: string[],
    runtime?: Runtime
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
    this.runtime = runtime;
    this.done = false;
    this.started = false;
  }

  async start() {
    if (!this.started) {
      this.started = true;
      await this.pickCurrentUser();
      await this.setNow();
      this.login();
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
    if (!this.shouldSkip(step)) {
      const track = this.shouldTrack(step);
      if (!track) {
        return false;
      }

      if (track) {
        await this.track(step);
      }
    }
    this.currentStep++;
    return true;
  }

  shouldSkip(step) {
    if (!step) {
      return false;
    }
    if (step.signin && this.identified) {
      return true;
    }
    return false;
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

  randomUserId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
  async pickUserId(): Promise<number | string | boolean | Date> {
    if (!this.runtime) {
      return this.randomUserId();
    }

    const { userIdId } = this.runtime;
    // otherwise pick a real one
    const property = await ProfileProperty.findOne({
      order: api.sequelize.random(),
      where: {
        propertyId: userIdId,
        rawValue: {
          [Op.ne]: null,
        },
      },
    });
    if (!property) {
      return null;
    }
    return await property.getValue();
  }

  // some users login from the beginning
  login() {
    if (this.currentUserId) {
      if (inPercentage(33)) {
        // identified ahead of time
        this.identified = true;
      }
    }
  }

  // find a user, (or stay anonymous -- null)
  async pickCurrentUser() {
    const loggedInPercent = 88;

    let userId: number | string | boolean | Date;
    if (this.purchase) {
      // use this user
      userId = this.purchase.user_id;
    } else if (inPercentage(loggedInPercent)) {
      // users 1 through 1000
      userId = await this.pickUserId();
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
    const now = new Date().getTime();
    if (this.runtime) {
      this.now = now;
    } else if (this.purchase) {
      // use that
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
      this.now = this.purchase.created_at.getTime() - firstPurchase * 1000;
    } else {
      // some time after created
      const userId =
        parseInt((this.currentUserId || "").toString()) || this.randomUserId();
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
    if (this.runtime) {
      await this.postEvent(params);
    } else {
      await runAction("event:create", params, { apiKey: this.apiKey });
    }
  }

  async postEvent(params) {
    const { baseUrl } = this.runtime;
    const data = Object.assign({}, params, { apiKey: this.apiKey.apiKey });
    delete data.occurredAt; // streaming, do it now
    log(1, baseUrl + " " + JSON.stringify(data));
    await fetch(baseUrl, {
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
    id: found?.id,
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
