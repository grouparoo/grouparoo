import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";
import SourceFactory from "./source";

export default async (
  props = {
    email: "email",
    firstName: "string",
    lastName: "string",
    // userId: "integer",
    lastLoginAt: "date",
    ltv: "float",
    isVIP: "boolean",
  }
) => {
  const source = await SourceFactory();
  await source.setOptions({ table: "__test_table" });
  await source.bootstrapUniqueProfilePropertyRule("userId", "integer", "id");
  await source.setMapping({ userId: "userId" });
  await source.update({ state: "ready" });
  const sourceGuid = source.guid;

  for (const key in props) {
    const type = props[key];

    let unique = false;
    if (key === "email" || key === "userId") {
      unique = true;
    }

    const rule = await ProfilePropertyRule.create({
      sourceGuid,
      key,
      type,
      unique,
    });

    await rule.setOptions({ column: key });
  }
};
