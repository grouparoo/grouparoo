import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_20bb06d8-0a4e-49b5-ad42-545f2e8662e1";

describe("marketo/destinationMappingOptions", () => {
  test(
    "can load destinationMappingOptions",
    async () => {
      const options = await destinationMappingOptions({
        appId,
        appOptions,
        app: null,
        connection: null,
        destination: null,
        destinationId: null,
        destinationOptions: null,
      });
      const { properties } = options;
      const { required, known } = properties;

      expect(required.length).toBe(1);
      const external_id = required.find((f) => f.key === "email");
      expect(external_id.key).toBe("email");
      expect(external_id.type).toBe("email");

      const firstName = known.find((f) => f.key === "firstName");
      expect(firstName.key).toBe("firstName");
      expect(firstName.type).toBe("string");
      expect(firstName.important).toBe(true);

      const lastName = known.find((f) => f.key === "lastName");
      expect(lastName.key).toBe("lastName");
      expect(lastName.type).toBe("string");
      expect(lastName.important).toBe(true);

      const isLead = known.find((f) => f.key === "isLead");
      expect(isLead.key).toBe("isLead");
      expect(isLead.type).toBe("boolean");
      expect(isLead.important).toBe(false);

      const urgency = known.find((f) => f.key === "urgency");
      expect(urgency.key).toBe("urgency");
      expect(urgency.type).toBe("float");
      expect(urgency.important).toBe(false);
    },
    helper.longTime
  );
});
