import { UUID } from "./uuid";
import { Cookie } from "./cookie";
import { queryParams } from "./queryParams";

export interface GrouparooClientArgs {
  apiKey: string;
  host: string;
  path: string;
  anonymousId: string | number;
  errorHandlers: Function[];
  logging: boolean;
  cookie: string;
  cookieTTL: number;
}

export interface GrouparooEventData {
  [key: string]: number | string | boolean;
}

export interface Event {
  ocurredAt: Date;
  type: string;
  anonymousId: string | number;
  userId: string | number;
  data: GrouparooEventData;
}

export class GrouparooWebClient {
  apiKey: string;
  host: string;
  path: string;
  anonymousId: string | number;
  userId: string | number;
  errorHandlers: Function[];
  logging: boolean;
  cookie: string;
  cookieTTL: number;
  queue: Event[];
  processing: boolean;
  eventsCounts: { [name: string]: number };

  constructor(args: GrouparooClientArgs) {
    for (const i in args) {
      this[i] = args[i];
    }

    this.validateAndApplyDefaults();
    this.generateAnonymousId();
  }

  /** Track an event with optional data */
  track(
    type: string,
    data: GrouparooEventData,
    anonymousId = this.anonymousId,
    ocurredAt = new Date()
  ) {
    const event: Event = {
      type,
      data,
      anonymousId,
      userId: this.userId,
      ocurredAt,
    };

    this.eventsCounts[type]++;
    this.log("event", event);
    this.queue.push(event);
    return this.processQueue();
  }

  /**
   * Identify this user
   */
  identify(userId: string | number, data: GrouparooEventData) {
    this.userId = userId;
    return this.track("identify", data);
  }

  /**
   * Remove all identifying information about this session and start over with a new anonymousId
   */
  reset(newAnonymousId: string | number) {
    delete this.userId;
    delete this.anonymousId;
    Cookie.clear(this.cookie);
    this.eventsCounts = {};

    if (newAnonymousId) {
      this.anonymousId = newAnonymousId;
    }

    this.generateAnonymousId();
  }

  /**
   * Track a 'page' event, along with related metadata.
   * Will also determine if this is a new session and firer the "new_session" event.
   */
  page(category: string, title: string, data: GrouparooEventData) {
    this.track(
      "page",
      Object.assign(
        {
          category,
          title: title || window.document.title,
          url: window.location.href,
          path: window.location.pathname,
          referrer: window.document.referrer,
        },
        queryParams(),
        data
      )
    );

    // TODO store and check for `new_session`
  }

  /**
  All events are first stored in local storage (if available) for persistence
  Then, events are popped 1-by-1 off the local queue and sent to the server
  If there's an error, the event goes back on the queue to try again later
  We retry w/ back-off if there's an error sending the event
  */
  private async processQueue() {
    if (this.processing) return;
    this.processing = true;

    const event = this.queue.shift();
    if (!event) {
      this.processing = false;
      return;
    }

    await this.sendEvent(event);

    this.processing = false;
    return this.processQueue();
  }

  private async sendEvent(event: Event) {
    const url = `${this.host}${this.path}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .catch((error) => this.reportError(error));

    this.log(url, event, response);
  }

  private validateAndApplyDefaults() {
    if (!this.apiKey) {
      throw new Error("apiKey is a required argument");
    }

    if (!this.host) {
      throw new Error("host is a required argument");
    }

    if (!this.path) {
      this.path = "/api/v1/track";
    }

    if (!this.cookie) {
      this.cookie = "grouparoo-anonymous-id";
    }

    if (!this.logging) {
      this.logging = false;
    }

    if (!this.errorHandlers) {
      this.errorHandlers = [this.logError];
    }

    this.processing = false;
    this.eventsCounts = {};
  }

  /**
  Grouparoo does not rely on any browser fingerprinting technique, just a unique cookie to store a random anonymousId.
  The cookie will be tied to /this/ domain.
  */
  private generateAnonymousId() {
    let anonymousId: string;

    if (this.anonymousId) {
      anonymousId = this.anonymousId.toString();
    } else if (Cookie.get(this.cookie)) {
      anonymousId = Cookie.get(this.cookie);
    } else {
      anonymousId = UUID.v4();
    }

    Cookie.set(this.cookie, anonymousId, this.cookieTTL);
    return anonymousId;
  }

  log(...messages) {
    if (this.logging) {
      console.log(`[grouparoo] ${messages.join(" ")}`);
    }
  }

  reportError(message) {
    this.errorHandlers.map((handler) => handler(message));
  }

  logError(...messages) {
    console.error(`[grouparoo] ${messages.join(" ")}`);
  }
}
