import { helper } from "@grouparoo/spec-helper";
import { destinationMappingOptions } from "../../src/lib/export-objects/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";

const { newNock } = helper.useNock(__filename, updater);
const appId = "app_78189023490-789789456456-90-3k";

describe("hubspot/destinationMappingOptions", () => {
  describe.each([
    { useOAuth: false, description: "with API key" },
    { useOAuth: true, description: "with OAuth" },
  ])("$description", ({ useOAuth }) => {
    const appOptions = loadAppOptions(newNock, { useOAuth });

    async function runDestinationMappingOptions({ destinationOptions }) {
      return destinationMappingOptions({
        appOptions,
        destinationOptions,
        app: null,
        appId: appId,
        connection: null,
        destination: null,
        destinationId: null,
      });
    }

    test("can load all destinationMappingOptions", async () => {
      const destinationOptions = {
        schemaId: "CONTACT",
        primaryKey: "email",
      };
      const options = await runDestinationMappingOptions({
        destinationOptions,
      });
      const { properties } = options;
      const { required, known } = properties;

      expect(required.length).toBe(1);

      const requiredFieldEmail = required.find((f) => f.key === "email");
      expect(requiredFieldEmail.key).toBe("email");
      expect(requiredFieldEmail.type).toBe("email");

      const knownFieldCompany = known.find((f) => f.key === "company");
      expect(knownFieldCompany.type).toBe("string");
      expect(knownFieldCompany.important).toBe(true);

      const knownFieldPhoneNumber = known.find((f) => f.key === "phone");
      expect(knownFieldPhoneNumber.type).toBe("phoneNumber");
      expect(knownFieldPhoneNumber.important).toBe(true);

      const knownFieldMobilePhoneNumber = known.find(
        (f) => f.key === "mobilephone"
      );
      expect(knownFieldMobilePhoneNumber.type).toBe("phoneNumber");
      expect(knownFieldMobilePhoneNumber.important).toBe(true);

      const readOnlyField = known.find((f) => f.key === "days_to_close");
      expect(readOnlyField).toBe(undefined);
    });

    test("can load all destinationMappingOptions using the custom object", async () => {
      const destinationOptions = {
        schemaId: "2-3604285",
        primaryKey: "grouparoo_object_property",
      };
      const options = await runDestinationMappingOptions({
        destinationOptions,
      });
      const { properties } = options;
      const { required, known } = properties;

      expect(required.length).toBe(1);

      const requiredFieldEmail = required.find(
        (f) => f.key === "grouparoo_object_property"
      );
      expect(requiredFieldEmail.key).toBe("grouparoo_object_property");
      expect(requiredFieldEmail.type).toBe("string");

      const knownFieldFirstName = known.find((f) => f.key === "first_name");
      expect(knownFieldFirstName.type).toBe("string");
      expect(knownFieldFirstName.important).toBe(true);

      const knownFieldLastName = known.find((f) => f.key === "last_name");
      expect(knownFieldLastName.type).toBe("string");
      expect(knownFieldLastName.important).toBe(true);

      const knownFieldNumberField = known.find((f) => f.key === "number_field");
      expect(knownFieldNumberField.type).toBe("float");
      expect(knownFieldNumberField.important).toBe(false);
    });
  });
});
