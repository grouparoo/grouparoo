import { Cookie } from "../src/cookie";

describe("Cookie", () => {
  it("can write to a cookie", () => {
    Cookie.set("test", "abc");
  });

  it("can read a cookie", () => {
    const response = Cookie.get("test");
    expect(response).toBe("abc");
  });

  it("can clear a cookie", () => {
    Cookie.clear("test");
    const response = Cookie.get("test");
    expect(response).toBe(null);
  });
});
