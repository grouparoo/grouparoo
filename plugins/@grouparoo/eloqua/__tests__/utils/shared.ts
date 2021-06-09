import { helper } from "@grouparoo/spec-helper";

export async function indexUsers(isNewNock: boolean) {
  // wait for search index
  if (isNewNock) {
    await helper.sleep(helper.shortTime);
  }
}
