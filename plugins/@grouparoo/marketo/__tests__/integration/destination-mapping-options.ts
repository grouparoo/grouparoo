import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "destination-mapping-options.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/destination-mapping-options");
// or these to make it true
//const newNock = true;
//helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

describe("marketo/destinationMappingOptions", () => {
  test(
    "can load destinationMappingOptions",
    async () => {
      const options = await destinationMappingOptions({
        appOptions,
        app: null,
        connection: null,
        destination: null,
        destinationOptions: null,
      });
      const { profilePropertyRules } = options;
      const { required, known } = profilePropertyRules;

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
    30 * 1000
  );
});
