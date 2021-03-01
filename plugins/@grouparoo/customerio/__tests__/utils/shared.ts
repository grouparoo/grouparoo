import { helper } from "@grouparoo/spec-helper";

export async function indexCustomers(isNewNock) {
  // beta api takes a while to reflect changes
  if (isNewNock) {
    await helper.sleep(helper.shortTime);
  }
}
