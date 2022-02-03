import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { fetchCustomFields } from "../../src/lib/common/destinationMappingOptions";
import { customFields } from "../utils/shared";
import { CloseioClient } from "../../src/lib/client";
import { contactDestinationMappingOptions } from "../../src/lib/export-contacts/destinationMappingOptions";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

let client: CloseioClient;

async function runDestinationMappingOptions({}) {
  return contactDestinationMappingOptions({
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
  const fields = await client.closeio._get(`/custom_field/contact/`);
  const fieldNames = customFields.map((field) => field.name);
  for (const field of fields.data) {
    if (fieldNames.includes(field.name)) {
      await client.closeio._delete(`/custom_field/contact/${field.id}/`);
    }
  }
}

beforeAll(async () => {
  client = await connect(appOptions);
  await cleanUp();

  for (const customField of customFields) {
    try {
      await client.closeio._post(`/custom_field/contact/`, customField);
    } catch (e) {}
  }
});

afterAll(async () => {
  await cleanUp();
});

describe("Close.io / Contacts / destinationMappingOptions", () => {
  test("Can fetch custom fields", async () => {
    const fields = await fetchCustomFields(client, "contact");

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
    const fields = await fetchCustomFields(client, "contact");

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

    expect(required.length).toBe(2);

    // Required
    const name = required.find((f) => f.key === "Name");
    expect(name.type).toBe("string");

    const lead = required.find((f) => f.key === "Lead");
    expect(lead.type).toBe("string");

    // Known
    const title = known.find((f) => f.key === "Title");
    expect(title.type).toBe("string");

    const email = known.find((f) => f.key === "Email");
    expect(email.type).toBe("email");

    const url = known.find((f) => f.key === "URL");
    expect(url.type).toBe("url");

    const phone = known.find((f) => f.key === "Phone");
    expect(phone.type).toBe("phoneNumber");

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
