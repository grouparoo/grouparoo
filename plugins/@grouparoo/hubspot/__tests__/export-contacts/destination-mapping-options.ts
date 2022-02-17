import { helper } from "@grouparoo/spec-helper";
import {
  destinationMappingOptions,
  getUserFields,
} from "../../src/lib/export-contacts/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";

const { newNock } = helper.useNock(__filename, updater);
const appId = "app_78189023490-231123231231123-90-3k";

describe("hubspot/destinationMappingOptions", () => {
  describe.each([
    { useOAuth: false, description: "with API key" },
    { useOAuth: true, description: "with OAuth" },
  ])("$description", ({ useOAuth }) => {
    const appOptions = loadAppOptions(newNock, { useOAuth });

    async function runDestinationMappingOptions({ destinationOptions }) {
      return destinationMappingOptions({
        appOptions,
        app: null,
        appId: appId,
        connection: null,
        destination: null,
        destinationId: null,
        destinationOptions,
      });
    }

    test("can fetch user fields", async () => {
      const client = await connect(appOptions);
      const fields = await getUserFields(client, appOptions);

      const phone = fields.find((f) => f.key === "phone");
      const mobilePhone = fields.find((f) => f.key === "mobilephone");
      const firstName = fields.find((f) => f.key === "firstname");
      const lastName = fields.find((f) => f.key === "lastname");
      const startDate = fields.find((f) => f.key === "start_date");
      const birthDate = fields.find((f) => f.key === "date_of_birth");
      const message = fields.find((f) => f.key === "message");
      const companyId = fields.find((f) => f.key === "associatedcompanyid");
      const persona = fields.find((f) => f.key === "hs_persona");
      const textField = fields.find((f) => f.key === "text_field");
      const numberField = fields.find((f) => f.key === "number_field");
      const dateField = fields.find((f) => f.key === "date_field");

      expect(phone.type).toBe("phoneNumber");
      expect(phone.important).toBe(false);
      expect(mobilePhone.type).toBe("phoneNumber");
      expect(mobilePhone.important).toBe(false);
      expect(firstName.type).toBe("string");
      expect(firstName.important).toBe(true);
      expect(lastName.type).toBe("string");
      expect(lastName.important).toBe(true);
      expect(startDate.type).toBe("string");
      expect(startDate.important).toBe(false);
      expect(birthDate.type).toBe("string");
      expect(birthDate.important).toBe(false);
      expect(message.type).toBe("string");
      expect(message.important).toBe(false);
      expect(companyId.type).toBe("float");
      expect(companyId.important).toBe(false);
      expect(persona.type).toBe("string");
      expect(persona.important).toBe(false);
      expect(textField.type).toBe("string");
      expect(textField.important).toBe(false);
      expect(numberField.type).toBe("float");
      expect(numberField.important).toBe(false);
      expect(dateField.type).toBe("date");
      expect(dateField.important).toBe(false);
    });

    test("can load all destinationMappingOptions", async () => {
      const options = await runDestinationMappingOptions({
        destinationOptions: null,
      });
      const { properties } = options;
      const { required, known } = properties;

      expect(required.length).toBe(1);

      const requiredFieldEmail = required.find((f) => f.key === "email");
      expect(requiredFieldEmail.key).toBe("email");
      expect(requiredFieldEmail.type).toBe("email");

      const knownFieldPhoneNumber = known.find((f) => f.key === "phone");
      expect(knownFieldPhoneNumber.type).toBe("phoneNumber");
      expect(knownFieldPhoneNumber.important).toBe(false);

      const knownFieldMobilePhoneNumber = known.find(
        (f) => f.key === "mobilephone"
      );
      expect(knownFieldMobilePhoneNumber.type).toBe("phoneNumber");
      expect(knownFieldMobilePhoneNumber.important).toBe(false);

      const readOnlyField = known.find((f) => f.key === "days_to_close");
      expect(readOnlyField).toBe(undefined);
    });

    test("can load all destinationMappingOptions giving destination options", async () => {
      const options = await runDestinationMappingOptions({
        destinationOptions: { companyKey: "domain" },
      });
      const { properties } = options;
      const { required, known } = properties;

      expect(required.length).toBe(2);

      const requiredFieldEmail = required.find((f) => f.key === "email");
      expect(requiredFieldEmail.key).toBe("email");
      expect(requiredFieldEmail.type).toBe("email");

      const requiredFieldDomain = required.find(
        (f) => f.key === "Company.domain"
      );
      expect(requiredFieldDomain.key).toBe("Company.domain");
      expect(requiredFieldDomain.type).toBe("string");

      const knownFieldPhoneNumber = known.find((f) => f.key === "phone");
      expect(knownFieldPhoneNumber.type).toBe("phoneNumber");
      expect(knownFieldPhoneNumber.important).toBe(false);

      const knownFieldMobilePhoneNumber = known.find(
        (f) => f.key === "mobilephone"
      );
      expect(knownFieldMobilePhoneNumber.type).toBe("phoneNumber");
      expect(knownFieldMobilePhoneNumber.important).toBe(false);

      const readOnlyField = known.find((f) => f.key === "days_to_close");
      expect(readOnlyField).toBe(undefined);
    });
  });
});
