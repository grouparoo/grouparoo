// TODO: Once we deploy the production auth server, we can nock that URL.  For now, we need to nock the localhost version
process.env.GROUPAROO_AUTH_URL = "http://localhost:8080";

import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { OAuthRequest, plugin } from "../../src";
import {
  OAuthListProviders,
  OAuthClientStart,
  OAuthClientEdit,
} from "../../src/actions/oAuth";

const customerId = "tcs_abc";
const requestId = "req_123";
let realRequestId: string;

// These tests can be re-nocked against a locally-running telemetry server via:
//  GROUPAROO_AUTH_URL="http://localhost:8080" NOCK=true pnpm jest __tests__/actions/oAuth.ts
helper.useNock(__filename);

describe("actions/plugins", () => {
  helper.grouparooTestServer({ truncate: true, resetSettings: true });

  beforeAll(async () => {
    await plugin.updateSetting("telemetry", "customer-id", customerId);
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
        id: requestId, // this id would not normally be passed, but we need it for the test & nocking
        provider: "github",
        type: "user",
      });

    expect(error).toBeUndefined();

    const localRequest = await OAuthRequest.findById(
      remoteOAuthRequest.requestId
    );
    expect(localRequest).toBeTruthy();
    realRequestId = localRequest.id;

    expect(location).toMatch(
      /https:\/\/github.com\/login\/oauth\/authorize\?client_id=.*&scope=user%20user:email&state=req_123/
    );
    expect(location).toContain(remoteOAuthRequest.requestId);
    expect(remoteOAuthRequest).toEqual({
      callbackUrl: "http://localhost:18081/oauth/callback",
      id: expect.any(String),
      telemetryCustomerId: expect.any(String),
      provider: "github",
      type: "user",
      confirmed: false,
      identities: [],
      requestId: realRequestId,
    });
  });

  // TODO: How can we test this without making real oAuth requests?
  test.todo("an oAuth token and identities can be retrieved");

  test("an oAuthRequest can be edited", async () => {
    const { oAuthRequest, error } = await specHelper.runAction<OAuthClientEdit>(
      "oAuth:client:edit",
      {
        requestId: realRequestId,
        token: "abc123",
      }
    );

    expect(error).toBeUndefined();

    expect(oAuthRequest).toEqual({
      id: realRequestId,
      provider: "github",
      type: "user",
      identities: [],
      appId: null,
      appOption: null,
    });
  });
});
