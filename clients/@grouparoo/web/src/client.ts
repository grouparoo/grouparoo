import { UUID } from "./uuid";
import { Cookie } from "./cookie";
import { queryParams } from "./queryParams";

export interface GrouparooClientArgs {
  apiKey: string;
  host: string;
  path: string;
  errorHandlers: Function[];
  logging: boolean;
  userId: string | number;
  userIdCookie: string;
  anonymousId: string | number;
  anonymousIdCookie: string;
  anonymousIdCookieTTL: number;
  sessionId: string | number;
  sessionIdCookie: string;
  sessionIdCookieTTL: number;
}

export interface GrouparooEventData {
  [key: string]: number | string | boolean;
}

export interface Event {
  ocurredAt: Date;
  type: string;
  anonymousId: string | number;
  userId: string | number;
  sessionId: string | number;
  data: GrouparooEventData;
}

export class GrouparooWebClient {
  apiKey: string;
  host: string;
  path: string;
  errorHandlers: Function[];
  userId: string | number;
  userIdCookie: string;
  anonymousId: string | number;
  anonymousIdCookie: string;
  anonymousIdCookieTTL: number;
  sessionId: string | number;
  sessionIdCookie: string;
  sessionIdCookieTTL: number;
  logging: boolean;
  queue: Event[];
  processing: boolean;
  eventsCounts: { [name: string]: number };

  constructor(args: GrouparooClientArgs) {
    for (const i in args) {
      this[i] = args[i];
    }

    this.validateAndApplyDefaults();
    this.generateAnonymousId();
    this.generateSessionId();

    if (this.userId) {
      Cookie.set(this.userIdCookie, this.userId);
    } else {
      this.userId = Cookie.get(this.userIdCookie);
    }
  }

  /** Track an event with optional data */
  track(type: string, data: GrouparooEventData, ocurredAt = new Date()) {
    // bump the TTLs or generate new ones as needed
    this.generateSessionId();
    this.generateAnonymousId();

    const event: Event = {
      type,
      data,
      userId: this.userId,
      anonymousId: this.anonymousId,
      sessionId: this.sessionId,
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
    Cookie.set(this.userIdCookie, this.userId);
    return this.track("identify", data);
  }

  /**
   * Remove all identifying information about this session and start over with a new anonymousId
   */
  reset(newAnonymousId: string | number) {
    delete this.userId;
    delete this.anonymousId;
    delete this.sessionId;
    Cookie.clear(this.anonymousIdCookie);
    Cookie.clear(this.sessionIdCookie);
    Cookie.clear(this.userIdCookie);

    this.eventsCounts = {};

    if (newAnonymousId) {
      this.anonymousId = newAnonymousId;
    }

    this.generateAnonymousId();
    this.generateSessionId();
  }

  /**
   * Track a 'page' event, along with related metadata.
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

    if (!this.userIdCookie) {
      this.userIdCookie = "grouparoo-user-id";
    }

    if (!this.anonymousIdCookie) {
      this.anonymousIdCookie = "grouparoo-anonymous-id";
    }
    if (!this.anonymousIdCookieTTL) {
      this.anonymousIdCookieTTL = 1000 * 60 * 60 * 24 * 90; // 90 days
    }

    if (!this.sessionIdCookie) {
      this.sessionIdCookie = "grouparoo-session-id";
    }
    if (!this.sessionIdCookieTTL) {
      this.sessionIdCookieTTL = 1000 * 60 * 60; // 1 hour
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
    } else if (Cookie.get(this.anonymousIdCookie)) {
      anonymousId = Cookie.get(this.anonymousIdCookie);
    } else {
      anonymousId = `aid-${UUID.v4()}`;
    }

    this.anonymousId = anonymousId;
    Cookie.set(
      this.anonymousIdCookie,
      this.anonymousId,
      this.anonymousIdCookieTTL
    );

    return anonymousId;
  }

  private generateSessionId() {
    let sessionId: string;

    if (this.sessionId) {
      sessionId = this.sessionId.toString();
    } else if (Cookie.get(this.sessionIdCookie)) {
      sessionId = Cookie.get(this.sessionIdCookie);
    } else {
      sessionId = `sid-${UUID.v4()}`;
    }

    this.sessionId = sessionId;
    Cookie.set(this.sessionIdCookie, this.sessionId, this.sessionIdCookieTTL);

    return sessionId;
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
