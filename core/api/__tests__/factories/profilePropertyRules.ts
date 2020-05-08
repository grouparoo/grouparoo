import SourceFactory from "./source";
import ProfilePropertyRuleFactory from "./profilePropertyRule";

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

  for (const key in props) {
    const type = props[key];

    let unique = false;
    if (key === "email" || key === "userId") {
      unique = true;
    }

    const ruleProps = {
      sourceGuid: source.guid,
      key,
      type,
      unique,
    };
    const options = { column: key };
    await ProfilePropertyRuleFactory(source, ruleProps, options);
  }
};
