import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { fetchCustomFields } from "../../src/lib/common/destinationMappingOptions";
import { leadDestinationMappingOptions } from "../../src/lib/export-leads/destinationMappingOptions";
import { customFields } from "../utils/shared";
import { CloseioClient } from "../../src/lib/client";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

let client: CloseioClient;

async function runDestinationMappingOptions({}) {
  return leadDestinationMappingOptions({
    appOptions,
    appId,
    app: null,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
  });
}

async function cleanUp() {
  const fields = await client.closeio._get(`/custom_field/lead/`);
  const fieldNames = customFields.map((field) => field.name);
  for (const field of fields.data) {
    if (fieldNames.includes(field.name)) {
      await client.closeio._delete(`/custom_field/lead/${field.id}/`);
    }
  }
}

beforeAll(async () => {
  client = await connect(appOptions);
  await cleanUp();

  for (const customField of customFields) {
    try {
      await client.closeio._post(`/custom_field/lead/`, customField);
    } catch (e) {}
  }
});

afterAll(async () => {
  await cleanUp();
});

describe("Close.io / Leads / destinationMappingOptions", () => {
  test("Can fetch custom fields", async () => {
    const fields = await fetchCustomFields(client, "lead");

    const text = fields.find((f) => f.key === "test_text");
    expect(text.type).toBe("string");

    const hidden = fields.find((f) => f.key === "test_hidden");
    expect(hidden.type).toBe("string");

    const numeric = fields.find((f) => f.key === "test_numeric");
    expect(numeric.type).toBe("number");

    const date = fields.find((f) => f.key === "test_date");
    expect(date.type).toBe("date");

    const dateTime = fields.find((f) => f.key === "test_date_time");
    expect(dateTime.type).toBe("date");
  });

  test("Does not fetch unsupported custom fields", async () => {
    const fields = await fetchCustomFields(client, "lead");

    const multiple_choices = fields.find(
      (f) => f.key === "test_multiple_choices"
    );
    expect(multiple_choices).toBeUndefined();

    const multiple_contacts = fields.find(
      (f) => f.key === "test_multiple_contacts"
    );
    expect(multiple_contacts).toBeUndefined();

    const multiple_users = fields.find((f) => f.key === "test_multiple_users");
    expect(multiple_users).toBeUndefined();

    const single_choice = fields.find((f) => f.key === "test_single_choice");
    expect(single_choice).toBeUndefined();

    const single_contact = fields.find((f) => f.key === "test_single_contact");
    expect(single_contact).toBeUndefined();

    const single_user = fields.find((f) => f.key === "test_single_user");
    expect(single_user).toBeUndefined();
  });

  test("Can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    // Required
    const name = required.find((f) => f.key === "Name");
    expect(name.type).toBe("string");

    // Known
    const url = known.find((f) => f.key === "URL");
    expect(url.type).toBe("url");

    const description = known.find((f) => f.key === "Description");
    expect(description.type).toBe("string");

    const addressLabel = known.find((f) => f.key === "Address Label");
    expect(addressLabel.type).toBe("string");

    const addressLine1 = known.find((f) => f.key === "Address Line 1");
    expect(addressLine1.type).toBe("string");

    const addressLine2 = known.find((f) => f.key === "Address Line 2");
    expect(addressLine2.type).toBe("string");

    const city = known.find((f) => f.key === "City");
    expect(city.type).toBe("string");
    expect(city.important).toBeTruthy();

    const state = known.find((f) => f.key === "State");
    expect(state.type).toBe("string");
    expect(state.important).toBeTruthy();

    const zipCode = known.find((f) => f.key === "Zip Code");
    expect(zipCode.type).toBe("string");

    const country = known.find((f) => f.key === "Country");
    expect(country.type).toBe("string");

    // Custom Fields
    const text = known.find((f) => f.key === "test_text");
    expect(text.type).toBe("string");
    expect(text.important).toBeFalsy();

    const hidden = known.find((f) => f.key === "test_hidden");
    expect(hidden.type).toBe("string");
    expect(hidden.important).toBeFalsy();

    const numeric = known.find((f) => f.key === "test_numeric");
    expect(numeric.type).toBe("number");
    expect(numeric.important).toBeFalsy();

    const date = known.find((f) => f.key === "test_date");
    expect(date.type).toBe("date");
    expect(date.important).toBeFalsy();

    const dateTime = known.find((f) => f.key === "test_date_time");
    expect(dateTime.type).toBe("date");
    expect(dateTime.important).toBeFalsy();
  });
});
