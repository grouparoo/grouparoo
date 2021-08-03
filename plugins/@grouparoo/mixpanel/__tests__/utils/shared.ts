import { helper } from "@grouparoo/spec-helper";

export async function indexProfiles(
  isNewNock: boolean,
  sleepTime = helper.longTime * 5
) {
  // wait for search index
  if (isNewNock) {
    await helper.sleep(sleepTime);
  }
}
