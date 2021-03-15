import { helper } from "@grouparoo/spec-helper";

export async function indexDevices(isNewNock) {
  // there may be a short delay to reflect changes
  if (isNewNock) {
    await helper.sleep(helper.shortTime);
  }
}
