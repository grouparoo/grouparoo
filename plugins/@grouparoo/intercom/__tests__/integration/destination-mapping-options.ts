import { helper } from "@grouparoo/spec-helper";

import {
  destinationMappingOptions,
  fetchKnownAttributes,
} from "../../src/lib/export-contacts/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";
import { SimpleDestinationOptions } from "@grouparoo/core";

const { newNock } = helper.useNock(__filename, updater);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";
const appOptions = loadAppOptions(newNock);
const defaultDestinationOptions = {
  creationMode: "User",
  removalMode: "Archive",
};

async function runDestinationMappingOptions(
  override?: SimpleDestinationOptions
) {
  const destinationOptions = Object.assign(
    {},
    defaultDestinationOptions,
    override || {}
  );
  return destinationMappingOptions({
    appId,
    appOptions,
    destinationOptions,
    app: null,
    connection: null,
    destination: null,
    destinationId: null,
  });
}

describe("intercom/destinationMappingOptions", () => {
  test("can fetch custom attributes", async () => {
    const client = await connect(appOptions);
    const fields = await fetchKnownAttributes(client);

    const text = fields.find((f) => f.key === "custom_attributes.text_field");
    expect(text.type).toBe("string");
    expect(text.important).toBe(true);
    const decimal = fields.find(
      (f) => f.key === "custom_attributes.decimal_field"
    );
    expect(decimal.type).toBe("float");
    expect(decimal.important).toBe(true);
  });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions();
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(2);

    const email = required.find((f) => f.key === "email");
    expect(email.key).toBe("email");
    expect(email.type).toBe("email");

    const external_id = required.find((f) => f.key === "external_id");
    expect(external_id.key).toBe("external_id");
    expect(external_id.type).toBe("string");

    const text = known.find((f) => f.key === "custom_attributes.text_field");
    expect(text.type).toBe("string");
    expect(text.important).toBe(true);

    const name = known.find((f) => f.key === "name");
    expect(name.type).toBe("string");
    expect(name.important).toBe(true);

    const phone = known.find((f) => f.key === "phone");
    expect(phone.type).toBe("phoneNumber");
    expect(phone.important).toBeFalsy();

    const signed_up_at = known.find((f) => f.key === "signed_up_at");
    expect(signed_up_at.type).toBe("date");
    expect(signed_up_at.important).toBeFalsy();
  });

  test("does not use external_id when destinationOptions is Lead", async () => {
    const options = await runDestinationMappingOptions({
      creationMode: "Lead",
    });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const email = required.find((f) => f.key === "email");
    expect(email.key).toBe("email");
    expect(email.type).toBe("email");

    const external_id = known.find((f) => f.key === "external_id");
    expect(external_id).toBeFalsy();

    const name = known.find((f) => f.key === "name");
    expect(name.type).toBe("string");
    expect(name.important).toBe(true);
  });

  test("does not use external_id when destinationOptions is Lifecycle", async () => {
    const options = await runDestinationMappingOptions({
      creationMode: "Lifecycle",
    });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(2);

    const email = required.find((f) => f.key === "email");
    expect(email.key).toBe("email");
    expect(email.type).toBe("email");

    const external_id = required.find((f) => f.key === "external_id");
    expect(external_id.key).toBe("external_id");
    expect(external_id.type).toBe("string");

    const name = known.find((f) => f.key === "name");
    expect(name.type).toBe("string");
    expect(name.important).toBe(true);
  });
});
