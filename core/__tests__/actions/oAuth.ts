import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { OAuthRequest, plugin } from "../../src";
import {
  OAuthListProviders,
  OAuthClientStart,
  OAuthClientEdit,
} from "../../src/actions/oAuth";

// These tests can be re-nocked against a locally-running telemetry server via:
//  GROUPAROO_AUTH_URL="http://localhost:8080" NOCK=true pnpm jest __tests__/actions/oAuth.ts
helper.useNock(__filename, {});

describe("actions/plugins", () => {
  let customerId: string;
  let requestId: string;
  helper.grouparooTestServer({ truncate: true });

  beforeAll(async () => {
    customerId = (await plugin.readSetting("telemetry", "customer-id")).value;
  });

  test("oauth providers can be listed", async () => {
    const { providers, error } = await specHelper.runAction<OAuthListProviders>(
      "oAuth:listProviders"
    );
    expect(error).toBeUndefined();
    expect(providers).toEqual([
      {
        authTypes: ["user"],
        description: "Sign in with GitHub",
        icon: "http://localhost:8080/images/auth-providers/github.png",
        name: "github",
      },
    ]);
  });

  test("an oauth request can be started", async () => {
    const { remoteOAuthRequest, location, error } =
      await specHelper.runAction<OAuthClientStart>("oAuth:client:start", {
        provider: "github",
        type: "user",
      });

    expect(error).toBeUndefined();
    expect(location).toMatch(
      /https:\/\/github.com\/login\/oauth\/authorize\?client_id=.*&scope=user%20user:email&state=/
    );
    expect(location).toContain(remoteOAuthRequest.requestId);
    expect(remoteOAuthRequest).toEqual({
      callbackUrl: "http://localhost:18081/oauth/callback",
      id: expect.any(String),
      telemetryCustomerId: customerId,
      provider: "github",
      type: "user",
      confirmed: false,
      identities: [],
      requestId: expect.any(String),
    });

    const localRequest = await OAuthRequest.findById(
      remoteOAuthRequest.requestId
    );
    expect(localRequest).toBeTruthy();
    requestId = remoteOAuthRequest.requestId;
  });

  // TODO: How can we test this without making real oAuth requests?
  test.todo("an oAuth token and identities can be retrieved");

  test("an oAuthRequest can be edited", async () => {
    const { oAuthRequest, error } = await specHelper.runAction<OAuthClientEdit>(
      "oAuth:client:edit",
      {
        requestId,
        token: "abc123",
      }
    );

    expect(error).toBeUndefined();

    expect(oAuthRequest).toEqual({
      id: requestId,
      provider: "github",
      type: "user",
      identities: [],
      appId: null,
      appOption: null,
    });
  });
});
