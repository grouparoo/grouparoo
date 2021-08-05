import { TableSpeculation } from "../../src/modules/tableSpeculation";

describe("tableSpeculation", () => {
  describe("isUniqueColumn", () => {
    const tests = [
      { match: undefined, result: false },
      { match: "", result: false },
      { match: "foo", result: false },
      { match: "money", result: false },
      { match: "app_id", result: false },
      { match: "appid", result: false },
      // user-id like
      { match: "id", result: true },
      { match: "userId", result: true },
      { match: "user_id", result: true },
      { match: "user_ID", result: true },
      { match: "USERID", result: true },
      // email-like
      { match: "email", result: true },
      { match: "EMAIL", result: true },
      { match: "CUSTOMEREMAIL", result: true },
      { match: "CUSTOMER_EMAIL", result: true },
      // phone-like
      { match: "phone", result: true },
      { match: "phonenumber", result: true },
      { match: "phone number", result: true },
      { match: "phone_number", result: true },
    ];

    tests.map(({ match, result }) => {
      it(`guesses column ${match} correctly`, async () => {
        expect(TableSpeculation.isUniqueColumn(match)).toBe(result);
      });
    });
  });

  describe("columnType", () => {
    test("emails from strings", () => {
      expect(TableSpeculation.columnType("email", [], "string")).toBe("email");
    });

    test("phone numbers from strings", () => {
      expect(TableSpeculation.columnType("mobile_number", [], "string")).toBe(
        "phoneNumber"
      );
    });

    test("floats with samples", () => {
      expect(TableSpeculation.columnType("foo", [1, 2, 3])).toBe("float");
    });

    test("booleans with samples", () => {
      expect(TableSpeculation.columnType("foo", [false])).toBe("boolean");
    });

    test("dates with samples", () => {
      expect(TableSpeculation.columnType("foo", [new Date()])).toBe("date");
    });

    test("integers from floats", () => {
      expect(TableSpeculation.columnType("foo_id", [], "float")).toBe(
        "integer"
      );

      expect(TableSpeculation.columnType("id", [], "float")).toBe("integer");
    });

    test("others do not change", () => {
      expect(TableSpeculation.columnType("email", [], "integer")).toBe(
        "integer"
      );
    });
  });
});
