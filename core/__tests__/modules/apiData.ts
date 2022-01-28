import { APIData } from "../../src/modules/apiData";

describe("apiDAta", () => {
  describe("#formatDate", () => {
    test("it works for dates", () => {
      const time = new Date(1577836801000);
      expect(APIData.formatDate(time)).toEqual(1577836801000);
    });

    test("it works for strings", () => {
      const time = "2020-01-01T00:00:01Z";
      expect(APIData.formatDate(time)).toEqual(1577836801000);
    });

    test("it works for numbers as strings", () => {
      const time = "1577836801000";
      expect(APIData.formatDate(time)).toEqual(1577836801000);
    });

    test("it works for nulls", () => {
      expect(APIData.formatDate(null)).toEqual(null);
    });
  });

  describe("#ensureDate", () => {
    test("it works for dates", () => {
      const time = new Date(1577836801000);
      expect(APIData.ensureDate(time).getTime()).toEqual(1577836801000);
    });

    test("it works for strings", () => {
      const time = "2020-01-01T00:00:01Z";
      expect(APIData.ensureDate(time).getTime()).toEqual(1577836801000);
    });

    test("it works for numbers as strings", () => {
      const time = "1577836801000";
      expect(APIData.ensureDate(time).getTime()).toEqual(1577836801000);
    });

    test("it works for numbers", () => {
      const time = 1577836801000;
      expect(APIData.ensureDate(time).getTime()).toEqual(1577836801000);
    });

    test("it throws for everything else", () => {
      const param = "foo";
      expect(() => APIData.ensureDate(param)).toThrow(
        /foo cannot be converted to a date/
      );
    });
  });

  describe("#ensureNumber", () => {
    test("it works for numbers", () => {
      const param = 1;
      expect(APIData.ensureNumber(param)).toEqual(1);
    });

    test("it works for strings", () => {
      const param = "1";
      expect(APIData.ensureNumber(param)).toEqual(1);
    });

    test("it throws for everything else", () => {
      const param = "foo";
      expect(() => APIData.ensureNumber(param)).toThrow(
        /foo cannot be converted to number/
      );
    });
  });

  describe("#ensureBoolean", () => {
    test("it works for booleans", () => {
      expect(APIData.ensureBoolean(true)).toEqual(true);
      expect(APIData.ensureBoolean(false)).toEqual(false);
    });

    test("it works for numbers", () => {
      expect(APIData.ensureBoolean(1)).toEqual(true);
      expect(APIData.ensureBoolean(0)).toEqual(false);
    });

    test("it works for strings", () => {
      expect(APIData.ensureBoolean("true")).toEqual(true);
      expect(APIData.ensureBoolean("false")).toEqual(false);
    });

    test("it throws for everything else", () => {
      expect(() => APIData.ensureBoolean("foo")).toThrow(
        /foo cannot be converted to a boolean/
      );
      expect(() => APIData.ensureBoolean(6)).toThrow(
        /6 cannot be converted to a boolean/
      );
    });
  });

  describe("#ensureObject", () => {
    test("it works for simple objects", () => {
      const obj = { a: 1, b: "yay", 3: false };
      expect(APIData.ensureObject(JSON.stringify(obj))).toEqual(obj);
    });

    test("it works for nested objects", () => {
      const obj = {
        a: 1,
        b: "yay",
        3: false,
        nested: { a: 1, something: "else" },
      };
      expect(APIData.ensureObject(JSON.stringify(obj))).toEqual(obj);
    });

    test("it works for simple arrays", () => {
      const obj = [1, 2, "3", "four", false];
      expect(APIData.ensureObject(JSON.stringify(obj))).toEqual(obj);
    });

    test("it works for nested arrays", () => {
      const obj = [1, 2, "3", "four", false, { a: 1 }, { foo: "bar" }];
      expect(APIData.ensureObject(JSON.stringify(obj))).toEqual(obj);
    });

    test("it works for stringified arrays", () => {
      const obj = "[a,b,1,2]";
      expect(APIData.ensureObject(JSON.stringify(obj))).toEqual(obj);
    });

    test("it works for partially stringified arrays", () => {
      const obj = [
        JSON.stringify({ a: 1, b: 2, c: "three" }),
        JSON.stringify({ a: 4, b: 5, c: "six" }),
      ];
      expect(APIData.ensureObject(obj)).toEqual([
        {
          a: 1,
          b: 2,
          c: "three",
        },
        {
          a: 4,
          b: 5,
          c: "six",
        },
      ]);
    });
  });
});
