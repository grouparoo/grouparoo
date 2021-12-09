import { helper } from "@grouparoo/spec-helper";
import { OAuthRequest } from "../../src";

describe("models/oAuthRequest", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("OAuthRequests can be created", async () => {
    const request = await OAuthRequest.create({
      provider: "github",
      type: "user",
    });

    expect(request.identities).toEqual([]);
  });

  test("OAuthRequests identities are properly serialized", async () => {
    const request = await OAuthRequest.create({
      provider: "github",
      type: "user",
      identities: [
        { email: "1@demo.com", name: "person", description: "foo" },
        { email: "2@demo.com", name: "person", description: "bar" },
      ],
    });

    expect(request.identities).toEqual([
      { email: "1@demo.com", name: "person", description: "foo" },
      { email: "2@demo.com", name: "person", description: "bar" },
    ]);
  });
});
