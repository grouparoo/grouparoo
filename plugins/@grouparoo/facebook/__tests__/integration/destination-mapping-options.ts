import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";

const destinationOptions = {
  primaryKey: "EMAIL",
};

describe("facebook/destinationMappingOptions", () => {
  test("can load destinationMappingOptions", async () => {
    const options = await destinationMappingOptions({
      destinationOptions,
      appGuid: null,
      appOptions: null,
      app: null,
      connection: null,
      destination: null,
      destinationGuid: null,
    });
    const { profilePropertyRules } = options;
    const { required, known } = profilePropertyRules;

    expect(required.length).toBe(1);

    const email = required.find((f) => f.key === "EMAIL");
    expect(email.key).toBe("EMAIL");
    expect(email.type).toBe("email");

    const extern_id = known.find((f) => f.key === "EXTERN_ID");
    expect(extern_id.key).toBe("EXTERN_ID");
    expect(extern_id.type).toBe("string");

    const firstName = known.find((f) => f.key === "FN");
    expect(firstName.key).toBe("FN");
    expect(firstName.type).toBe("string");
    expect(firstName.important).toBe(true);

    const lastName = known.find((f) => f.key === "LN");
    expect(lastName.key).toBe("LN");
    expect(lastName.type).toBe("string");
    expect(lastName.important).toBe(true);

    const initial = known.find((f) => f.key === "FI");
    expect(initial.key).toBe("FI");
    expect(initial.type).toBe("string");
    expect(initial.important).toBe(false);
  });
});
