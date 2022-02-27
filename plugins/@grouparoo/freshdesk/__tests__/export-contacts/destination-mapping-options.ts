import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { contactDestinationMappingOptions } from "../../src/lib/export-contacts/destinationMappingOptions";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

async function runDestinationMappingOptions({ primaryKey }) {
  return contactDestinationMappingOptions({
    appOptions,
    appId,
    app: null,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: {
      primaryKey,
    },
  });
}

describe("Freshdesk / Contacts / Destination Mapping Options", () => {
  test("Can load all destinationMappingOptions (Email as Primary Key)", async () => {
    const options = await runDestinationMappingOptions({
      primaryKey: "Email",
    });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(2);

    const name = required.find((f) => f.key === "Name");
    expect(name.type).toBe("string");

    const email = required.find((f) => f.key === "Email");
    expect(email.type).toBe("email");

    const mobile = known.find((f) => f.key === "Mobile");
    expect(mobile.type).toBe("phoneNumber");

    const phone = known.find((f) => f.key === "Phone");
    expect(phone.type).toBe("phoneNumber");

    const externalId = known.find((f) => f.key === "External ID");
    expect(externalId.type).toBe("number");

    const companyName = known.find((f) => f.key === "Company Name");
    expect(companyName.type).toBe("string");

    const address = known.find((f) => f.key === "Address");
    expect(address.type).toBe("string");

    const description = known.find((f) => f.key === "Description");
    expect(description.type).toBe("string");

    const jobTitle = known.find((f) => f.key === "Job Title");
    expect(jobTitle.type).toBe("string");
  });

  test("Can load all destinationMappingOptions (Mobile as Primary Key)", async () => {
    const options = await runDestinationMappingOptions({
      primaryKey: "Mobile",
    });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(2);

    const name = required.find((f) => f.key === "Name");
    expect(name.type).toBe("string");

    const mobile = required.find((f) => f.key === "Mobile");
    expect(mobile.type).toBe("phoneNumber");

    const email = known.find((f) => f.key === "Email");
    expect(email.type).toBe("email");

    const phone = known.find((f) => f.key === "Phone");
    expect(phone.type).toBe("phoneNumber");

    const externalId = known.find((f) => f.key === "External ID");
    expect(externalId.type).toBe("number");

    const companyName = known.find((f) => f.key === "Company Name");
    expect(companyName.type).toBe("string");

    const address = known.find((f) => f.key === "Address");
    expect(address.type).toBe("string");

    const description = known.find((f) => f.key === "Description");
    expect(description.type).toBe("string");

    const jobTitle = known.find((f) => f.key === "Job Title");
    expect(jobTitle.type).toBe("string");
  });

  test("Can load all destinationMappingOptions (Phone as Primary Key)", async () => {
    const options = await runDestinationMappingOptions({
      primaryKey: "Phone",
    });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(2);

    const name = required.find((f) => f.key === "Name");
    expect(name.type).toBe("string");

    const phone = required.find((f) => f.key === "Phone");
    expect(phone.type).toBe("phoneNumber");

    const email = known.find((f) => f.key === "Email");
    expect(email.type).toBe("email");

    const mobile = known.find((f) => f.key === "Mobile");
    expect(mobile.type).toBe("phoneNumber");

    const externalId = known.find((f) => f.key === "External ID");
    expect(externalId.type).toBe("number");

    const companyName = known.find((f) => f.key === "Company Name");
    expect(companyName.type).toBe("string");

    const address = known.find((f) => f.key === "Address");
    expect(address.type).toBe("string");

    const description = known.find((f) => f.key === "Description");
    expect(description.type).toBe("string");

    const jobTitle = known.find((f) => f.key === "Job Title");
    expect(jobTitle.type).toBe("string");
  });

  test("Can load all destinationMappingOptions (External ID as Primary Key)", async () => {
    const options = await runDestinationMappingOptions({
      primaryKey: "External ID",
    });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(2);

    const name = required.find((f) => f.key === "Name");
    expect(name.type).toBe("string");

    const externalId = required.find((f) => f.key === "External ID");
    expect(externalId.type).toBe("number");

    const email = known.find((f) => f.key === "Email");
    expect(email.type).toBe("email");

    const mobile = known.find((f) => f.key === "Mobile");
    expect(mobile.type).toBe("phoneNumber");

    const phone = known.find((f) => f.key === "Phone");
    expect(phone.type).toBe("phoneNumber");

    const companyName = known.find((f) => f.key === "Company Name");
    expect(companyName.type).toBe("string");

    const address = known.find((f) => f.key === "Address");
    expect(address.type).toBe("string");

    const description = known.find((f) => f.key === "Description");
    expect(description.type).toBe("string");

    const jobTitle = known.find((f) => f.key === "Job Title");
    expect(jobTitle.type).toBe("string");
  });
});
