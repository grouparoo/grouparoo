import { queryParams } from "../src/queryParams";

describe("queryParams", () => {
  it("will return query params", () => {
    window.location.search = "?thing=stuff&a=1";
    const response = queryParams();
    expect(response).toEqual({ thing: "stuff", a: "1" });
  });

  it("returns an empty object if there are no query params", () => {
    window.location.search = "";
    let response = queryParams();
    expect(response).toEqual({});

    window.location.search = "?";
    response = queryParams();
    expect(response).toEqual({});
  });
});
