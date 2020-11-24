import { runAction } from "./util/runAction";
import { MockSession, getApiKey } from "./util/MockSession";
import { App, ProfilePropertyRule, Source } from "@grouparoo/core";
import { getPurchaseCategories, getPurchases } from "./sample_data";
import { createPropertyRule, RuleDefinition } from "./util/propertyRules";
import { log } from "./util/shared";

const PAGEVIEW_RULES: Array<RuleDefinition> = [
  {
    key: "pageviewCount",
    type: "integer",
    options: { aggregationMethod: "count", column: "[data]-page" },
  },
  {
    key: "categoriesViewed",
    type: "string",
    isArray: true,
    options: { column: "[data]-category", aggregationMethod: "all values" },
    filters: [{ key: "[data]-page", op: "equals", match: "/product" }],
  },
  {
    key: "recentVisitDate",
    type: "date",
    options: {
      aggregationMethod: "most recent value",
      column: "occurredAt",
    },
  },
];
interface DataOptions {
  scale?: number;
}
export async function events(options: DataOptions = {}) {
  const app = await enableEventsApp();

  const purchaseFunnelCount = getPurchaseFunnelCount(options.scale);
  const browseFunnelCount = purchaseFunnelCount * 1.25;

  const apiKey = await getApiKey();
  const categories = await getPurchaseCategories();
  const purchases = await getPurchases(purchaseFunnelCount);
  await generateBrowseEvents(browseFunnelCount, apiKey, categories);
  await generatePurchaseEvents(purchases, apiKey);

  await createSource(app, "pageview");
  await createPropertyRules(app, "pageview", PAGEVIEW_RULES);
}

function getPurchaseFunnelCount(scale: number): number {
  // it's just too many for larger scale, make it less
  scale = Math.pow(scale || 1, 0.5);
  if (scale < 1) {
    scale = 1;
  }
  return 200 * scale;
}

export async function createPropertyRules(
  app: App,
  eventType: string,
  rules: Array<RuleDefinition>
) {
  const source = await findEventSource(app, eventType);
  for (const rule of rules) {
    await createPropertyRule(source, rule);
  }
}

async function findEventSource(app, eventType) {
  const where = {
    appGuid: app.guid,
    type: "events-table-import",
  };
  const sources = await Source.scope(null).findAll({ where });
  for (const source of sources) {
    const options = await source.getOptions();
    if (options.type === eventType) {
      return source;
    }
  }
  return null;
}

async function createSource(app: App, eventType: string) {
  const found = await findEventSource(app, eventType);

  const params = {
    appGuid: app.guid,
    name: `${eventType} Events`,
    type: "events-table-import",
    state: "ready",
    mapping: {},
    options: {
      type: eventType,
    },
    guid: found?.guid,
  };

  if (found) {
    await runAction("source:edit", params);
  } else {
    await runAction("source:create", params);
  }

  const made = await findEventSource(app, eventType);
  if (!made) {
    throw new Error(`Event source not created (${eventType})!`);
  }
  return made;
}

async function generateBrowseEvents(count, apiKey, categories) {
  for (let i = 0; i < count; i++) {
    const session = new MockSession(`browse${i}`, apiKey, null, categories);
    await session.run();
  }
}

async function generatePurchaseEvents(purchases, apiKey) {
  for (const purchase of purchases) {
    const session = new MockSession(
      `purchase${purchase.id}`,
      apiKey,
      purchase,
      []
    );
    await session.run();
  }
}

// copied from initializer/events.ts
async function addEventsApp() {
  let eventsApp = await App.scope(null).findOne({
    where: {
      type: "events",
    },
  });
  if (!eventsApp) {
    eventsApp = App.build({
      type: "events",
      name: "events",
      state: "draft",
    });
    App.generateGuid(eventsApp);
    // @ts-ignore
    await eventsApp.save({ hooks: false });
    log(1, `created events app (${eventsApp.guid})`);
  }
}

async function enableEventsApp() {
  await addEventsApp();
  const where = { type: "events" };
  const found = await App.scope(null).findOne({ where });
  if (!found) {
    throw new Error(`Events App not found!`);
  }

  const ruleGuid = await findIdentifyingRuleGuid();

  const params = {
    guid: found.guid,
    name: "events",
    type: "events",
    state: "ready",
    options: { identifyingProfilePropertyRuleGuid: ruleGuid },
  };

  await runAction("app:edit", params);

  return found.reload();
}

async function findIdentifyingRuleGuid() {
  const where = { key: "userId" };
  const found = await ProfilePropertyRule.findOne({ where });
  if (!found) {
    throw new Error(`Identifying rule not found: ${where.key}`);
  }
  return found.guid;
}
