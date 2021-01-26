import { helper } from "@grouparoo/spec-helper";

const delayTime = 3 * 1000;

export async function indexContacts() {
  // search index takes a while to catch up after important change or add
  await helper.sleep(delayTime);
}
