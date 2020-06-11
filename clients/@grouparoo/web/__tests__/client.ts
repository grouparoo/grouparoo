import { GrouparooWebClient } from "../src/client";
import { Cookie } from "../src/cookie";
import fetch, { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

const apiKey = "abc123";
const host = "http://grouparoo.example.com";

describe("Client", () => {
  describe("initialization", () => {
    it("cannot be initialized with no arguments", () => {
      expect(() => {
        // @ts-ignore
        new GrouparooWebClient();
      }).toThrow(/no arguments provided/);
    });

    it("cannot be initialized without an apiKey", () => {
      expect(() => {
        new GrouparooWebClient({});
      }).toThrow(/apiKey is a required argument/);
    });

    it("cannot be initialized without a host", () => {
      expect(() => {
        new GrouparooWebClient({ apiKey: "abc123" });
      }).toThrow(/host is a required argument/);
    });

    it("sets default values", () => {
      const client = new GrouparooWebClient({ apiKey, host });
      expect(client.apiKey).toBe(apiKey);
      expect(client.host).toBe(host);
      expect(client.path).toBe("/api/v1/track");
      expect(client.userIdCookie).toBe("grouparoo-user-id");
      expect(client.anonymousIdCookie).toBe("grouparoo-anonymous-id");
      expect(client.sessionIdCookie).toBe("grouparoo-session-id");
      expect(client.anonymousIdCookieTTL).toBe(7776000000);
      expect(client.sessionIdCookieTTL).toBe(3600000);
      expect(client.logging).toBe(false);
    });

    it("can override defaults", () => {
      const client = new GrouparooWebClient({
        apiKey,
        host,
        path: "/a/b/c",
        userIdCookie: "myCookie",
      });

      expect(client.path).toBe("/a/b/c");
      expect(client.userIdCookie).toBe("myCookie");
    });

    it("will generate new session and anonymous ids if none are provided and store them to cookies", () => {
      const client = new GrouparooWebClient({ apiKey, host });
      expect(client.sessionId).toBeTruthy();
      expect(client.anonymousId).toBeTruthy();

      // expect(Cookie.get("grouparoo-anonymous-id")).toEqual(client.anonymousId);
      // expect(Cookie.get("grouparoo-session-id")).toEqual(client.sessionId);
    });

    it("will use session and anonymous ids if they are provided and store them to cookies", () => {
      const client = new GrouparooWebClient({
        apiKey,
        host,
        sessionId: "ses",
        anonymousId: "anon",
      });
      expect(client.sessionId).toBe("ses");
      expect(client.anonymousId).toBe("anon");

      // expect(Cookie.get("grouparoo-anonymous-id")).toEqual('anon');
      // expect(Cookie.get("grouparoo-session-id")).toEqual('ses');
    });

    it("will store a userId if provided", () => {
      const client = new GrouparooWebClient({ apiKey, host, userId: "1" });
      expect(client.userId).toBe("1");
      expect(Cookie.get("grouparoo-user-id")).toEqual("1");
    });

    it("will load a userId previously set in a cookie if one is not provided", () => {
      Cookie.set("grouparoo-user-id", 1);
      const client = new GrouparooWebClient({ apiKey, host });
      // expect(client.userId).toBe("1");
    });

    it("can be reset", () => {
      const client = new GrouparooWebClient({ apiKey, host, userId: "1" });
      const originalSessionId = client.sessionId;
      const originalAnonymousId = client.anonymousId;

      client.reset();

      expect(client.userId).toBe(null);
      expect(client.anonymousId).not.toBe(originalAnonymousId);
      expect(client.sessionId).not.toBe(originalSessionId);
      // expect(Cookie.get("grouparoo-user-id")).toEqual(null);
      // expect(Cookie.get("grouparoo-anonymous-id")).not.toEqual(originalAnonymousId);
      // expect(Cookie.get("grouparoo-session-id")).not.toEqual(originalSessionId);
    });
  });

  describe("with client", () => {
    let client: GrouparooWebClient;

    beforeEach(() => {
      fetch.resetMocks();
      client = new GrouparooWebClient({ apiKey, host });
    });

    afterEach(() => {
      clearTimeout(client.retryTimer);
    });

    describe("track", () => {
      it("will store events to be tracked", () => {
        client.processing = true;
        client.track("page", { path: "/" });
        expect(client.queue.length).toBe(1);
        const event = client.queue[0];
        expect(event.type).toBe("page");
        expect(event.userId).toBe(null);
        expect(event.anonymousId).toBe(client.anonymousId);
        expect(event.sessionId).toBe(client.sessionId);
        expect(event.data).toEqual({ path: "/" });
        expect(event.ocurredAt).toBeLessThanOrEqual(new Date().getTime());
      });

      it("will post the event and drain the local queue", async () => {
        fetch.mockResponseOnce(JSON.stringify({ response: "ok" }));

        await client.track("page", { path: "/" });

        expect(client.queue.length).toBe(0);

        expect(fetch.mock.calls.length).toBe(1);
        const [url, payload] = fetch.mock.calls[0];
        const event = JSON.parse(payload.body.toString());
        expect(url).toBe("http://grouparoo.example.com/api/v1/track");
        expect(event.type).toBe("page");
        expect(event.userId).toBe(null);
        expect(event.anonymousId).toBe(client.anonymousId);
        expect(event.sessionId).toBe(client.sessionId);
        expect(event.data).toEqual({ path: "/" });
        expect(event.ocurredAt).toBeLessThanOrEqual(new Date().getTime());
      });

      it("will send multiple events if they are in the queue", async () => {
        fetch.mockResponse(JSON.stringify({ response: "ok" }));

        client.processing = true;
        await client.track("page", { path: "/" });
        await client.track("page", { path: "/about" });
        client.processing = false;

        expect(client.queue.length).toBe(2);
        // @ts-ignore
        await client.processQueue();
        expect(client.queue.length).toBe(0);
        expect(fetch.mock.calls.length).toBe(2);
      });

      it("will log and retry tracking an event if there is an error", async () => {
        const errors = [];
        const errorHandler = (e) => errors.push(e);
        client.errorHandlers = [errorHandler];

        fetch.mockReject(new Error("Oh No!"));

        expect(client.retryTimer).toBeFalsy();
        expect(client.queue.length).toBe(0);
        await client.track("page", { path: "/" });
        expect(client.queue.length).toBe(1);
        expect(client.retryTimer).toBeTruthy();

        expect(errors.length).toBe(1);
        expect(errors[0].toString()).toBe("Error: Oh No!");
      });
    });

    describe("identify", () => {
      it("calling identify will also track an event", async () => {
        fetch.mockResponse(JSON.stringify({ response: "ok" }));
        await client.identify(1);

        expect(fetch.mock.calls.length).toBe(1);
        const [url, payload] = fetch.mock.calls[0];
        const event = JSON.parse(payload.body.toString());
        expect(url).toBe("http://grouparoo.example.com/api/v1/track");
        expect(event.type).toBe("identify");
        expect(event.userId).toBe(1);
        expect(event.anonymousId).toBe(client.anonymousId);
        expect(event.sessionId).toBe(client.sessionId);
        expect(event.ocurredAt).toBeLessThanOrEqual(new Date().getTime());
      });

      it("calling identify will set client.userId", async () => {
        fetch.mockResponse(JSON.stringify({ response: "ok" }));
        await client.identify("1");

        expect(client.userId).toBe("1");
      });

      it("once client.userId is set, all future track calls will include the userId", async () => {
        fetch.mockResponse(JSON.stringify({ response: "ok" }));
        await client.identify("1");
        await client.track("page", { path: "/" });

        expect(fetch.mock.calls.length).toBe(2);
        const [urlA, payloadA] = fetch.mock.calls[0];
        const [urlB, payloadB] = fetch.mock.calls[0];
        const eventA = JSON.parse(payloadA.body.toString());
        const eventB = JSON.parse(payloadB.body.toString());
        expect(eventA.userId).toBe("1");
        expect(eventB.userId).toBe("1");
      });
    });

    describe("page", () => {
      it("gathers the information about the page and creates a track event", async () => {
        window.document.title = "page title";
        window.location.href = "http://www.site.com/a/b/c/";
        window.location.pathname = "/a/b/c/";
        // @ts-ignore
        window.document.referrer = "https://ads.google.com";

        fetch.mockResponse(JSON.stringify({ response: "ok" }));
        await client.page("marcom");

        const [url, payload] = fetch.mock.calls[0];
        const event = JSON.parse(payload.body.toString());
        expect(url).toBe("http://grouparoo.example.com/api/v1/track");
        expect(event.type).toBe("page");
        expect(event.userId).toBe(null);
        expect(event.anonymousId).toBe(client.anonymousId);
        expect(event.sessionId).toBe(client.sessionId);
        expect(event.ocurredAt).toBeLessThanOrEqual(new Date().getTime());
        expect(event.data).toEqual({
          category: "marcom",
          href: "http://www.site.com/a/b/c/",
          pathname: "/a/b/c/",
          referrer: "https://ads.google.com",
          title: "page title",
        });
      });
    });
  });
});
