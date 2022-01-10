import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";

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

describe("klaviyo/destinationMappingOptions", () => {
  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const email = required.find((f) => f.key === "email");
    expect(email.type).toBe("email");

    const first_name = known.find((f) => f.key === "first_name");
    expect(first_name.type).toBe("string");

    const last_name = known.find((f) => f.key === "last_name");
    expect(last_name.type).toBe("string");

    const phone_number = known.find((f) => f.key === "phone_number");
    expect(phone_number.type).toBe("phoneNumber");

    const city = known.find((f) => f.key === "city");
    expect(city.type).toBe("string");

    const region = known.find((f) => f.key === "region");
    expect(region.type).toBe("string");

    const country = known.find((f) => f.key === "country");
    expect(country.type).toBe("string");

    const zip = known.find((f) => f.key === "zip");
    expect(zip.type).toBe("string");

    const image = known.find((f) => f.key === "image");
    expect(image.type).toBe("url");

    const address1 = known.find((f) => f.key === "address1");
    expect(address1.type).toBe("string");

    const address2 = known.find((f) => f.key === "address2");
    expect(address2.type).toBe("string");

    const latitude = known.find((f) => f.key === "latitude");
    expect(latitude.type).toBe("number");

    const longitude = known.find((f) => f.key === "longitude");
    expect(longitude.type).toBe("number");

    const organization = known.find((f) => f.key === "organization");
    expect(organization.type).toBe("string");

    const title = known.find((f) => f.key === "title");
    expect(title.type).toBe("string");

    const timezone = known.find((f) => f.key === "timezone");
    expect(timezone.type).toBe("string");
  });
});
