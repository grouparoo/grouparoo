import { helper } from "@grouparoo/spec-helper";

export async function indexContacts(isNewNock, delayTime = 40 * 1000) {
  // search index takes a while to catch up after important change or add
  if (isNewNock) {
    await helper.sleep(delayTime);
  }
}
