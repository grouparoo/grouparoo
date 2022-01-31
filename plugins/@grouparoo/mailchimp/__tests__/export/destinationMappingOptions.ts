import { helper } from "@grouparoo/spec-helper";
import { getDestinationMappingOptions } from "../../src/lib/shared/destinationMappingOptions";
import {
  loadAppOptions,
  loadDestinationOptions,
  updater,
} from "../utils/nockHelper";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const destinationOptions = loadDestinationOptions(newNock);
const appId = "app_ch1mp-dfsjklfdsklj90-01-3k";

async function runDestinationMappingOptions(options) {
  const destinationMappingOptions = getDestinationMappingOptions(
    options.mappingKey
  );

  return destinationMappingOptions({
    appOptions,
    app: null,
    appId: appId,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: destinationOptions,
  });
}

describe("mailchimp/destinationMappingOptions", () => {
  test("can load all destinationMappingOptions using ID", async () => {
    const options = await runDestinationMappingOptions({ mappingKey: "id" });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldId = required.find((f) => f.key === "mailchimp_id");
    expect(requiredFieldId.key).toBe("mailchimp_id");
    expect(requiredFieldId.type).toBe("string");

    const knownFieldPhoneNumber = known.find((f) => f.key === "PHONE");
    expect(knownFieldPhoneNumber.type).toBe("phoneNumber");
    expect(knownFieldPhoneNumber.important).toBe(true);

    const knownFieldAddress = known.find((f) => f.key === "ADDRESS");
    expect(knownFieldAddress.type).toBe("string");
    expect(knownFieldAddress.important).toBe(true);

    const knownFieldFirstName = known.find((f) => f.key === "FNAME");
    expect(knownFieldFirstName.type).toBe("string");
    expect(knownFieldFirstName.important).toBe(true);

    const knownFieldLastName = known.find((f) => f.key === "LNAME");
    expect(knownFieldLastName.type).toBe("string");
    expect(knownFieldLastName.important).toBe(true);

    const knownFieldLTV = known.find((f) => f.key === "LTV");
    expect(knownFieldLTV.type).toBe("number");
    expect(knownFieldLTV.important).toBe(true);

    const knownFieldUserId = known.find((f) => f.key === "USERID");
    expect(knownFieldUserId.type).toBe("number");
    expect(knownFieldUserId.important).toBe(true);

    const knownFieldEmail = known.find((f) => f.key === "email_address");
    expect(knownFieldEmail.key).toBe("email_address");
    expect(knownFieldEmail.type).toBe("email");
    expect(knownFieldEmail.important).toBe(false);
  });

  test("can load all destinationMappingOptions using EMAIL", async () => {
    const options = await runDestinationMappingOptions({ mappingKey: "email" });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldEmail = required.find((f) => f.key === "email_address");
    expect(requiredFieldEmail.key).toBe("email_address");
    expect(requiredFieldEmail.type).toBe("email");

    const knownFieldUserId = known.find((f) => f.key === "USERID");
    expect(knownFieldUserId.type).toBe("number");
    expect(knownFieldUserId.important).toBe(true);
  });
});
