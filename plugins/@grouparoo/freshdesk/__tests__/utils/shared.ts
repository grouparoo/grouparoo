import { helper } from "@grouparoo/spec-helper";

export async function waitForDeletion(isNewNock: boolean) {
  // wait for search index
  if (isNewNock) {
    await helper.sleep(helper.mediumTime);
  }
}

export async function waitForIndexingCompany(isNewNock: boolean) {
  // wait for search index
  if (isNewNock) {
    await helper.sleep(helper.hugeTime);
  }
}
