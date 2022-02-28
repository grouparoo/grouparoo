import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { companyDestinationMappingOptions } from "../../src/lib/export-companies/destinationMappingOptions";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

async function runDestinationMappingOptions({ primaryKey }) {
  return companyDestinationMappingOptions({
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

describe("Freshdesk / Companies / Destination Mapping Options", () => {
  test("Can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({
      primaryKey: "Email",
    });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const name = required.find((f) => f.key === "Name");
    expect(name.type).toBe("string");

    const domain = known.find((f) => f.key === "Domain");
    expect(domain.type).toBe("url");

    const note = known.find((f) => f.key === "Note");
    expect(note.type).toBe("string");

    const description = known.find((f) => f.key === "Description");
    expect(description.type).toBe("string");

    const healthScore = known.find((f) => f.key === "Health Score");
    expect(healthScore.type).toBe("string");

    const accountTier = known.find((f) => f.key === "Account Tier");
    expect(accountTier.type).toBe("string");

    const renewalDate = known.find((f) => f.key === "Renewal Date");
    expect(renewalDate.type).toBe("date");

    const industry = known.find((f) => f.key === "Industry");
    expect(industry.type).toBe("string");
  });
});
