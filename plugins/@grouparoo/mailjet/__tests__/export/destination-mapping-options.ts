import { helper } from "@grouparoo/spec-helper";
import {
  destinationMappingOptions,
  getUserFields,
} from "../../src/lib/export/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "anw890-5vn34c9-a802n8905v-3cw4";

async function runDestinationMappingOptions({}) {
  return destinationMappingOptions({
    appOptions,
    app: null,
    appId: appId,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
  });
}

describe("mailjet/destinationMappingOptions", () => {
  test("can fetch user fields", async () => {
    const client = await connect(appOptions);
    const fields = await getUserFields(client);
    const name = fields.find((f) => f.key === "name");
    const firstName = fields.find((f) => f.key === "firstname");
    const country = fields.find((f) => f.key === "country");
    const phone = fields.find((f) => f.key === "phone");

    expect(name.type).toBe("string");
    expect(name.important).toBe(true);

    expect(firstName.type).toBe("string");
    expect(firstName.important).toBe(true);

    expect(country.type).toBe("string");
    expect(country.important).toBe(false);

    expect(phone.type).toBe("phoneNumber");
    expect(phone.important).toBe(false);
  });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldEmail = required.find((f) => f.key === "Email");
    expect(requiredFieldEmail.key).toBe("Email");
    expect(requiredFieldEmail.type).toBe("email");

    const knownFieldFirstName = known.find((f) => f.key === "firstname");
    expect(knownFieldFirstName.type).toBe("string");
    expect(knownFieldFirstName.important).toBe(true);

    const knownFieldCountry = known.find((f) => f.key === "country");
    expect(knownFieldCountry.type).toBe("string");
    expect(knownFieldCountry.important).toBe(false);
  });
});
