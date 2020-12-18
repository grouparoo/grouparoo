import SourceFactory from "./source";
import PropertyFactory from "./property";

export default async (
  props = {
    email: "email",
    firstName: "string",
    lastName: "string",
    // userId: "integer",
    lastLoginAt: "date",
    ltv: "float",
    isVIP: "boolean",
    purchases: "string",
    purchaseAmounts: "float",
  }
) => {
  const source = await SourceFactory();
  await source.setOptions({ table: "__test_table" });
  await source.bootstrapUniqueProperty("userId", "integer", "id");
  await source.setMapping({ userId: "userId" });
  await source.update({ state: "ready" });

  for (const key in props) {
    const type = props[key];

    let unique = false;
    if (key === "email" || key === "userId") {
      unique = true;
    }

    let isArray = false;
    if (key === "purchases" || key === "purchaseAmounts") {
      isArray = true;
    }

    const ruleProps = {
      sourceGuid: source.guid,
      key,
      type,
      unique,
      isArray,
    };
    const options = { column: key };
    await PropertyFactory(source, ruleProps, options);
  }
};
