import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import {
  destinationMappingOptions,
  fetchKnownPersonFields,
} from "../../src/lib/export/destinationMappingOptions";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

async function runDestinationMappingOptions({}) {
  return destinationMappingOptions({
    appOptions,
    appId,
    app: null,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
  });
}

describe("pipedrive/destinationMappingOptions", () => {
  test("can fetch custom Person fields", async () => {
    const client = await connect(appOptions);
    const fields = await fetchKnownPersonFields(client);

    const text = fields.find((f) => f.key === "text_field");
    expect(text.type).toBe("string");

    const largeText = fields.find((f) => f.key === "large_text_field");
    expect(largeText.type).toBe("string");

    const address = fields.find((f) => f.key === "address_field");
    expect(address.type).toBe("string");

    const phone = fields.find((f) => f.key === "phone_field");
    expect(phone.type).toBe("phoneNumber");

    const monetary = fields.find((f) => f.key === "monetary_field");
    expect(monetary.type).toBe("number");

    const singleOption = fields.find((f) => f.key === "single_option_field");
    expect(singleOption.type).toBe("integer");

    const numerical = fields.find((f) => f.key === "numerical_field");
    expect(numerical.type).toBe("number");

    const autocomplete = fields.find((f) => f.key === "autocomplete_field");
    expect(autocomplete.type).toBe("string");

    const user = fields.find((f) => f.key === "user_field");
    expect(user.type).toBe("integer");

    const org = fields.find((f) => f.key === "organization_field");
    expect(org.type).toBe("integer");

    const person = fields.find((f) => f.key === "person_field");
    expect(person.type).toBe("integer");

    const date = fields.find((f) => f.key === "date_field");
    expect(date.type).toBe("date");

    const dateRange = fields.find((f) => f.key === "date_range_field");
    expect(dateRange.type).toBe("date");

    const dateRangeEnd = fields.find(
      (f) => f.key === "End date of date_range_field"
    );
    expect(dateRangeEnd.type).toBe("date");
  });

  test("does not fetch unsupported custom Person fields", async () => {
    const client = await connect(appOptions);
    const fields = await fetchKnownPersonFields(client);

    const multipleOption = fields.find(
      (f) => f.key === "multiple_option_field"
    );
    expect(multipleOption).toBeUndefined();

    const time = fields.find((f) => f.key === "time_field");
    expect(time).toBe(undefined);

    const timeRange = fields.find((f) => f.key === "time_range_field");
    expect(timeRange).toBe(undefined);
  });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(2);

    const email = required.find((f) => f.key === "Email");
    expect(email.type).toBe("email");

    const name = required.find((f) => f.key === "Name");
    expect(name.type).toBe("string");

    // Built-in default fields
    const phone = known.find((f) => f.key === "Phone");
    expect(phone.type).toBe("phoneNumber");
    expect(phone.important).toBeFalsy();

    const label = known.find((f) => f.key === "Label");
    expect(label.type).toBe("integer");
    expect(label.important).toBeFalsy();

    // Internally set built-in fields should not be included
    const firstName = known.find((f) => f.key === "First name");
    expect(firstName).toBeUndefined();

    const lastName = known.find((f) => f.key === "Last name");
    expect(lastName).toBeUndefined();

    const updateTime = known.find((f) => f.key === "Update time");
    expect(updateTime).toBeUndefined();

    const wonDeals = known.find((f) => f.key === "Won deals");
    expect(wonDeals).toBeUndefined();

    // Customs
    const text = known.find((f) => f.key === "text_field");
    expect(text.type).toBe("string");
    expect(label.important).toBeFalsy();

    const largeText = known.find((f) => f.key === "large_text_field");
    expect(largeText.type).toBe("string");
    expect(label.important).toBeFalsy();

    const address = known.find((f) => f.key === "address_field");
    expect(address.type).toBe("string");
    expect(label.important).toBeFalsy();

    const phoneCustom = known.find((f) => f.key === "phone_field");
    expect(phoneCustom.type).toBe("phoneNumber");
    expect(phoneCustom.important).toBeFalsy();
  });
});
