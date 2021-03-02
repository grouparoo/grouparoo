import path from "path";
import { helper } from "@grouparoo/spec-helper";
import {
  destinationMappingOptions,
  getProspectFields,
} from "../../src/lib/export/destinationMappingOptions";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "destination-mapping-options.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/destination-mapping-options");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function runDestinationMappingOptions({}) {
  return destinationMappingOptions({
    appOptions,
    app: null,
    appId: null,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
  });
}

describe("pardot/destinationMappingOptions", () => {
  test("can get custom fields", async () => {
    const client = await connect(appOptions);
    const fields = await getProspectFields(client);

    const text = fields.find((f) => f.key === "grouparoo_custom_text");
    expect(text.type).toBe("string");

    const textarea = fields.find((f) => f.key === "grouparoo_custom_textarea");
    expect(textarea.type).toBe("string");

    const number = fields.find((f) => f.key === "grouparoo_custom_number");
    expect(number.type).toBe("number");

    const date = fields.find((f) => f.key === "grouparoo_custom_date");
    expect(date.type).toBe("date");

    const radioButton = fields.find(
      (f) => f.key === "grouparoo_custom_radio_button"
    );
    expect(radioButton.type).toBe("any");

    const dropDown = fields.find((f) => f.key === "grouparoo_custom_dropdown");
    expect(dropDown.type).toBe("any");

    const hidden = fields.find((f) => f.key === "grouparoo_custom_hidden");
    expect(hidden.type).toBe("any");

    const crmUser = fields.find((f) => f.key === "grouparoo_custom_user");
    expect(crmUser.type).toBe("string");
  });

  test("can not get unsupported custom fields", async () => {
    const client = await connect(appOptions);
    const fields = await getProspectFields(client);

    const checkbox = fields.find((f) => f.key === "grouparoo_custom_checkbox");
    expect(checkbox).toBeUndefined();

    const multiSelect = fields.find(
      (f) => f.key === "grouparoo_custom_multiselect"
    );
    expect(multiSelect).toBeUndefined();
  });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const email = required.find((f) => f.key === "email");
    expect(email.key).toBe("email");
    expect(email.type).toBe("email");

    // Built-in default fields
    const campaignId = known.find((f) => f.key === "campaign_id");
    expect(campaignId.type).toBe("integer");
    expect(campaignId.important).toBeFalsy();

    const salutation = known.find((f) => f.key === "salutation");
    expect(salutation.type).toBe("string");
    expect(salutation.important).toBeFalsy();

    const firstName = known.find((f) => f.key === "first_name");
    expect(firstName.type).toBe("string");
    expect(firstName.important).toBe(true);

    const lastName = known.find((f) => f.key === "last_name");
    expect(lastName.type).toBe("string");
    expect(lastName.important).toBe(true);

    const password = known.find((f) => f.key === "password");
    expect(password.type).toBe("string");
    expect(password.important).toBeFalsy();

    const company = known.find((f) => f.key === "company");
    expect(company.type).toBe("string");
    expect(company.important).toBeFalsy();

    const prospectAccountId = known.find(
      (f) => f.key === "prospect_account_id"
    );
    expect(prospectAccountId.type).toBe("integer");
    expect(prospectAccountId.important).toBeFalsy();

    const website = known.find((f) => f.key === "website");
    expect(website.type).toBe("string");
    expect(website.important).toBeFalsy();

    const jobTitle = known.find((f) => f.key === "job_title");
    expect(jobTitle.type).toBe("string");
    expect(jobTitle.important).toBeFalsy();

    const department = known.find((f) => f.key === "department");
    expect(department.type).toBe("string");
    expect(department.important).toBeFalsy();

    const country = known.find((f) => f.key === "country");
    expect(country.type).toBe("string");
    expect(country.important).toBeFalsy();

    const addressOne = known.find((f) => f.key === "address_one");
    expect(addressOne.type).toBe("string");
    expect(addressOne.important).toBeFalsy();

    const addressTwo = known.find((f) => f.key === "address_two");
    expect(addressTwo.type).toBe("string");
    expect(addressTwo.important).toBeFalsy();

    const city = known.find((f) => f.key === "city");
    expect(city.type).toBe("string");
    expect(city.important).toBeFalsy();

    const state = known.find((f) => f.key === "state");
    expect(state.type).toBe("string");
    expect(state.important).toBeFalsy();

    const territory = known.find((f) => f.key === "territory");
    expect(territory.type).toBe("string");
    expect(territory.important).toBeFalsy();

    const zip = known.find((f) => f.key === "zip");
    expect(zip.type).toBe("string");
    expect(zip.important).toBeFalsy();

    const phone = known.find((f) => f.key === "phone");
    expect(phone.type).toBe("phoneNumber");
    expect(phone.important).toBeFalsy();

    const fax = known.find((f) => f.key === "fax");
    expect(fax.type).toBe("phoneNumber");
    expect(fax.important).toBeFalsy();

    const source = known.find((f) => f.key === "source");
    expect(source.type).toBe("string");
    expect(source.important).toBeFalsy();

    const annualRevenue = known.find((f) => f.key === "annual_revenue");
    expect(annualRevenue.type).toBe("string");
    expect(annualRevenue.important).toBeFalsy();

    const employees = known.find((f) => f.key === "employees");
    expect(employees.type).toBe("string");
    expect(employees.important).toBeFalsy();

    const industry = known.find((f) => f.key === "industry");
    expect(industry.type).toBe("string");
    expect(industry.important).toBeFalsy();

    const yearsInBusiness = known.find((f) => f.key === "years_in_business");
    expect(yearsInBusiness.type).toBe("string");
    expect(yearsInBusiness.important).toBeFalsy();

    const comments = known.find((f) => f.key === "comments");
    expect(comments.type).toBe("string");
    expect(comments.important).toBeFalsy();

    const notes = known.find((f) => f.key === "notes");
    expect(notes.type).toBe("string");
    expect(notes.important).toBeFalsy();

    const score = known.find((f) => f.key === "score");
    expect(score.type).toBe("integer");
    expect(score.important).toBeFalsy();

    // Custom fields
    const text = known.find((f) => f.key === "grouparoo_custom_text");
    expect(text.type).toBe("string");
    expect(text.important).toBeFalsy();

    const number = known.find((f) => f.key === "grouparoo_custom_number");
    expect(number.type).toBe("number");
    expect(number.important).toBeFalsy();

    const date = known.find((f) => f.key === "grouparoo_custom_date");
    expect(date.type).toBe("date");
    expect(date.important).toBeFalsy();
  });
});
