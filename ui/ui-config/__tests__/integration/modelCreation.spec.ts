import { helper } from "@grouparoo/spec-helper";
import { test, expect } from "@playwright/test";
import { ChildProcessWithoutNullStreams } from "child_process";
import fs from "fs";
import path from "path";
import { BrowserContext, Page } from "playwright";

// import SampleRecordPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/sampleRecord";
import NewModelPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/model/new";
import ModelOverviewPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/model/overview";
import SourceOverviewPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/source/overview";
import EditPropertyPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/property/edit";
import GroupRulesPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/group/rules";
import NewGroupPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/group/new";
import SignInPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/session/sign-in";
import SourceSchedulePageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/source/schedule";
import SourceMultiplePropertiesPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/source/multipleProperties";
import EditAppPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/app/edit";
import EditDestinationPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/destination/edit";
import NewDestinationPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/destination/new";
import DestinationDataPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/destination/data";
import NewSourcePageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/source/new";
import EditSourcePageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/source/edit";
import NewAppPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/app/new";

let serverProcess: ChildProcessWithoutNullStreams;
const PORT = 30000 + parseInt(process.env.TEST_WORKER_INDEX ?? "0");
const LOG_DESTINATION_FILENAME = `grouparoo_test-model-dst-log-${PORT}.log`;

import os from "os";

const projectDir = `${os.tmpdir()}/test/${
  process.env.TEST_WORKER_INDEX ?? 1
}/uiConfig/config`;
process.env.GROUPAROO_RUN_MODE = "cli:config";
process.env.GROUPAROO_CONFIG_DIR = `${projectDir}/config`;

const USERS_CSV_URL =
  "https://raw.githubusercontent.com/grouparoo/grouparoo/main/plugins/%40grouparoo/demo/data/rows/users.csv";

test.beforeAll(async () => {
  fs.rmSync(projectDir, { recursive: true, force: true });

  serverProcess = await helper.startGrouparooTestServerDetached({
    port: PORT,
    truncate: true,
    runMode: "cli:config",
  });
});

test.afterAll(async () => {
  await helper.stopGrouparooTestServerDetached(serverProcess);
});

test.describe("Model Creation", () => {
  const email = "test@example.com";
  const companyName = "Test LLC.";

  let page: Page;
  let modelOverview: ModelOverviewPageObject;
  let modelId: string;
  let groupId: string;

  test.beforeAll(async ({ browser }) => {
    const logFilePath = path.join(
      __dirname,
      `../../${LOG_DESTINATION_FILENAME}`
    );
    if (fs.existsSync(logFilePath)) {
      fs.unlinkSync(logFilePath);
    }

    const context: BrowserContext = await browser.newContext();
    page = await context.newPage();
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
  });

  test("creates team and signs in", async () => {
    const signInPage = new SignInPageObject(page);
    await signInPage.navigate();
    await signInPage.fillAndSubmit({ email, companyName });
  });

  test("creates Model and navigates to Model Overview", async () => {
    const newModel = new NewModelPageObject(page);
    await newModel.navigate();

    const { model } = await newModel.fillAndSave({
      name: "User",
      type: "profile",
    });
    modelId = model.id;
    modelOverview = new ModelOverviewPageObject(page, modelId);
    await modelOverview.waitForNavigation();
  });

  test.describe("Primary Source", () => {
    let sourceId: string;
    let appId: string;
    let newSource: NewSourcePageObject;
    let propertyId: string;

    test("navigates to New Source", async () => {
      await modelOverview.clickCreatePrimarySource();
      newSource = new NewSourcePageObject(page, modelId);
      await newSource.waitForNavigation();
    });

    test("configures app for Source", async () => {
      await newSource.clickNewApp();
      const newApp = new NewAppPageObject(page);
      await newApp.waitForNavigation();

      const { app } = await newApp.clickApp({ type: "csv" });
      appId = app.id;
      const editApp = new EditAppPageObject(page, appId);
      await editApp.waitForNavigation();

      await editApp.fillName("CSV Import");
      await editApp.clickSave();
    });

    test("creates Source", async () => {
      await newSource.navigate();
      const { source } = await newSource.clickApp({
        type: "csv",
        appId,
      });
      sourceId = source.id;
      const editSource = new EditSourcePageObject(
        page,
        modelId,
        sourceId,
        "csv"
      );
      await editSource.waitForNavigation();

      await editSource.fillName("Users CSV");
      await editSource.fillSourceOptionsTextInputs({
        url: USERS_CSV_URL,
      });
      await editSource.selectSourceOptions({
        fileAgeHours: "6",
      });
      // TODO: Fix component
      await editSource.selectSourceOptions({
        fileAgeHours: "1",
      });
      await editSource.selectMappingSourceColumn("id");
      await editSource.clickSave();
    });

    test("lands on primary source schedule page and updates recurring frequency", async () => {
      const sourceSchedule = new SourceSchedulePageObject(
        page,
        modelId,
        sourceId
      );
      await sourceSchedule.waitForNavigation();
      await sourceSchedule.fillRecurringFrequency(10);
      await sourceSchedule.clickSave();
    });

    test("navigates to primary source multiple properties page after saving schedule", async () => {
      const multipleProperties = new SourceMultiplePropertiesPageObject(
        page,
        modelId,
        sourceId
      );
      await multipleProperties.waitForNavigation();
    });

    test("adds a Property", async () => {
      const sourceOverview = new SourceOverviewPageObject(
        page,
        modelId,
        sourceId
      );
      await sourceOverview.navigate();

      const { property } = await sourceOverview.clickAddProperty();
      propertyId = property.id;

      const editProperty = new EditPropertyPageObject(
        page,
        modelId,
        sourceId,
        propertyId
      );

      await editProperty.fill({
        key: "language",
        type: "string",
      });

      // TOOD: Figure out how to identify typeahead component and replace
      await page.locator('[placeholder="Select\\ column"]').fill("language");

      await editProperty.setInputChecked(
        "aggregationmethod_option_exact",
        true,
        "id"
      );
      const { property: savedProperty } = await editProperty.clickSave();
    });
  });

  test.describe("Group", () => {
    test("creates group", async () => {
      await modelOverview.navigate();
      await modelOverview.clickAddNewGroup();

      const newGroup = new NewGroupPageObject(page, modelId);
      const { group } = await newGroup.fillAndSave({
        name: "Spanish Speakers",
      });

      groupId = group.id;
    });

    test("sets up group rules", async () => {
      const groupRules = new GroupRulesPageObject(page, modelId, groupId);
      await groupRules.waitForNavigation();
      await groupRules.clickAddRule();

      const property = "language";
      const operation = "eq";
      const match = "Spanish";

      await groupRules.fillRule(0, { property, operation, match });
      await groupRules.clickSave();
    });
  });

  test.describe("Destination", () => {
    let destinationId: string;
    let appId: string;
    let newDestination: NewDestinationPageObject;

    test("navigates to New Destination", async () => {
      await modelOverview.navigate();
      await modelOverview.clickAddNewDestination();

      newDestination = new NewDestinationPageObject(page, modelId);
      await newDestination.waitForNavigation();
    });

    test("configures app for Destination", async () => {
      await newDestination.clickNewApp();

      const newApp = new NewAppPageObject(page);
      await newApp.waitForNavigation();
      const { app } = await newApp.clickApp({ type: "logger" });
      appId = app.id;

      const editApp = new EditAppPageObject(page, app.id);
      await editApp.fillName("logger");
      await editApp.fillTextInputs(
        {
          filename: LOG_DESTINATION_FILENAME,
        },
        "id"
      );
      await editApp.clickTestConnection();
      await editApp.clickSave();
    });

    test("creates Destination", async () => {
      await newDestination.navigate();
      const { destination } = await newDestination.clickApp({
        type: "logger",
        appId,
      });
      destinationId = destination.id;

      const editDestination = new EditDestinationPageObject(
        page,
        modelId,
        destinationId
      );

      await editDestination.waitForNavigation();
      await editDestination.fillName(LOG_DESTINATION_FILENAME);
      const { destination: updatedDestination } =
        await editDestination.clickSave();
    });

    test("edits Destination data", async () => {
      const destinationData = new DestinationDataPageObject(
        page,
        modelId,
        destinationId
      );
      await destinationData.waitForNavigation();

      await destinationData.selectCollection(groupId);
      await destinationData.selectRequiredMappings({
        primary_id: { label: "user_id" },
      });

      const { destination } = await destinationData.clickSave();
    });
  });

  // test.describe("Sample Record", () => {
  //   test("can navigate to sample record", async () => {
  //     await modelOverview.navigate("#sample-record");

  //     const sampleRecord = new SampleRecordPageObject(page);
  //     await sampleRecord.clickImportRecord();

  //     await expect(sampleRecord.getProperties()).toHaveCount(2);
  //   });
  // });
});
