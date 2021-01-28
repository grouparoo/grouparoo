import { helper } from "@grouparoo/spec-helper";

const delayTime = 30 * 1000;

export async function indexContacts(isNewNock) {
  // search index takes a while to catch up after important change or add
  if (isNewNock) {
    await helper.sleep(delayTime);
  }
}
