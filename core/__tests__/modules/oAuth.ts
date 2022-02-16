import fetch, { enableFetchMocks } from "jest-fetch-mock";
import { oAuthAccessTokenGetter } from "../../src/modules/oAuth";

enableFetchMocks();

describe("modules/oauth", () => {
  describe("oAuthAccessTokenGetter", () => {
    const providerName = "roo";
    const refreshToken = "faux-refresh-token";
    const accessTokens = [0, 1, 2].map((x) => `access-token-${x}`);
    let getter: oAuthAccessTokenGetter;

    beforeEach(() => {
      getter = new oAuthAccessTokenGetter(providerName, refreshToken);
    });

    afterEach(() => {
      fetch.resetMocks();
    });

    test("makes correct request and returns access token", async () => {
      fetch.mockResponse(
        JSON.stringify({
          token: accessTokens[0],
          expirationSeconds: 60 * 12,
        })
      );

      const accessToken = await getter.getAccessToken();

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://auth.grouparoo.com/api/v1/oauth/${providerName}/client/refresh`,
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify({ refreshToken }),
        })
      );

      expect(accessToken).toBe(accessTokens[0]);
    });

    test("retries when access token is expired", async () => {
      fetch.mockResponses(
        [
          JSON.stringify({
            error: { message: "It failed" },
          }),
          { status: 401 },
        ],
        [JSON.stringify({}), { status: 200 }],
        [
          JSON.stringify({
            token: accessTokens[0],
            expirationSeconds: 60 * 12,
          }),
          { status: 200 },
        ]
      );

      await expect(getter.getAccessToken()).resolves.toBe(accessTokens[0]);
      expect(fetch).toHaveBeenCalledTimes(3);
    });

    test("only retries when token is not refreshed", async () => {
      fetch.mockResponses(
        [
          JSON.stringify({
            error: { message: "It failed" },
          }),
          { status: 401 },
        ],
        [
          JSON.stringify({
            token: accessTokens[0],
            expirationSeconds: 60 * 12,
          }),
          { status: 200 },
        ]
      );

      await expect(getter.getAccessToken()).resolves.toBe(accessTokens[0]);
      expect(fetch).toHaveBeenCalledTimes(2);
    });

    test("retries and fails to get access token when access token is expired", async () => {
      fetch.mockResponse(
        JSON.stringify({
          token: accessTokens[0],
          expirationSeconds: 0,
        })
      );

      await expect(getter.getAccessToken()).rejects.toThrow(
        /Failed to get auth/
      );
      expect(fetch).toHaveBeenCalledTimes(3);
    });

    test("throws error when something unexpected goes wrong", async () => {
      fetch.mockResponse(null);

      await expect(getter.getAccessToken()).rejects.toThrow();
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
