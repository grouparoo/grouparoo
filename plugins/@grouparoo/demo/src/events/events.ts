import { MockSession, getApiKey } from "../util/MockSession";
import { getPurchaseCategories, getPurchases } from "./db";

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
