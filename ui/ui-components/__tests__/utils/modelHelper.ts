import type { NextPageContext } from "next";
import Cookies from "universal-cookie";
import {
  getModelFromUrlOrCookie,
  setModelCookie,
} from "../../utils/modelHelper";

describe("modelHelper", () => {
  describe("#setModelCookie", () => {
    test("Sets cookie header when running server-side", () => {
      let headerVal: string;
      const fakeCtx = {
        res: {
          setHeader: (name, value: string) => {
            if (name === "set-cookie") {
              headerVal = value;
            }
            return null;
          },
        },
      } as NextPageContext;

      setModelCookie("myModelId", fakeCtx);
      expect(headerVal).toBe("grouparooModelId=myModelId; Path=/");
    });

    test("Sets cookie directly when running client-side", () => {
      let cookieVal: string;
      const cookieMock = jest
        .spyOn(Cookies.prototype, "set")
        .mockImplementation((name, value: string) => {
          if (name === "grouparooModelId") {
            cookieVal = value;
          }
        });

      setModelCookie("someModelId");
      expect(cookieVal).toBe("someModelId");

      cookieMock.mockRestore();
    });
  });

  describe("#getModelFromUrlOrCookie", () => {
    let modelCookieValue: string;
    let cookieMock: jest.SpyInstance;

    beforeAll(() => {
      cookieMock = jest
        .spyOn(Cookies.prototype, "get")
        .mockImplementation((name) => {
          if (name === "grouparooModelId") return modelCookieValue;
          return null;
        });
    });

    afterAll(() => {
      cookieMock.mockRestore();
    });

    test("Gets from URL when in subpage within /model/[modelId]", () => {
      const ctx: NextPageContext = {
        pathname: "/model/[modelId]/records",
        query: { modelId: "profiles" },
        AppTree: null,
      };

      const modelId = getModelFromUrlOrCookie(ctx);
      expect(modelId).toBe("profiles");
    });

    test("Gets from URL when in subpage within /model/[modelId]/topic", () => {
      const ctx: NextPageContext = {
        pathname: "/model/[modelId]/sources/[sourceId]/schedule",
        query: { modelId: "admins", sourceId: "abcd123" },
        AppTree: null,
      };

      const modelId = getModelFromUrlOrCookie(ctx);
      expect(modelId).toBe("admins");
    });

    test("Gets from Cookie when in non-model-scoped page", () => {
      const ctx: NextPageContext = {
        pathname: "/settings",
        query: {},
        AppTree: null,
      };

      modelCookieValue = "someModelId";

      const modelId = getModelFromUrlOrCookie(ctx);
      expect(modelId).toBe("someModelId");
    });

    test("Gets from Cookie when in new page", () => {
      const ctx: NextPageContext = {
        pathname: "/model/new",
        query: {},
        AppTree: null,
      };

      modelCookieValue = "drivers";

      const modelId = getModelFromUrlOrCookie(ctx);
      expect(modelId).toBe("drivers");
    });
  });
});
