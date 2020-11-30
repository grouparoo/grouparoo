import { runAction } from "./util/runAction";
import { MockSession, getApiKey } from "./util/MockSession";
import { App, ProfilePropertyRule } from "@grouparoo/core";
import { getPurchaseCategories, getPurchases } from "./sample_data";
import { log } from "./util/shared";

interface DataOptions {
  scale?: number;
}
export async function events(options: DataOptions = {}) {
  const purchaseFunnelCount = getPurchaseFunnelCount(options.scale);
  const browseFunnelCount = purchaseFunnelCount * 1.25;

  const apiKey = await getApiKey();
  const categories = await getPurchaseCategories();
  const purchases = await getPurchases(purchaseFunnelCount);
  await generateBrowseEvents(browseFunnelCount, apiKey, categories);
  await generatePurchaseEvents(purchases, apiKey);
}

function getPurchaseFunnelCount(scale: number): number {
  // it's just too many for larger scale, make it less
  scale = Math.pow(scale || 1, 0.5);
  if (scale < 1) {
    scale = 1;
  }
  return 200 * scale;
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

const EVENTS_GUID = "app_events";
// mostly copied from initializer/events.ts
async function addEventsApp() {
  let eventsApp = await App.scope(null).findOne({
    where: {
      type: "events",
      guid: EVENTS_GUID,
    },
  });
  if (!eventsApp) {
    eventsApp = App.build({
      type: "events",
      name: "Events",
      state: "draft",
    });
    eventsApp.guid = EVENTS_GUID;

    // @ts-ignore
    await eventsApp.save({ hooks: false });
    log(1, `created events app (${eventsApp.guid})`);
  }
}

export async function enableEventsApp() {
  await addEventsApp();
  const where = { guid: EVENTS_GUID };
  const found = await App.scope(null).findOne({ where });
  if (!found) {
    throw new Error(`Events App not found!`);
  }

  const ruleGuid = await findIdentifyingRuleGuid();

  const params = {
    guid: found.guid,
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
