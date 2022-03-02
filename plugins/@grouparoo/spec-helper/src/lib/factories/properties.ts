import SourceFactory from "./source";
import ModelFactory from "./model";
import PropertyFactory from "./property";
import { GrouparooModel, Property } from "@grouparoo/core";

export default async (
  modelId?: string,
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
  if (!modelId) modelId = "mod_profiles";
  const model =
    (await GrouparooModel.findOne(
      modelId ? { where: { id: modelId } } : undefined
    )) ?? ((await ModelFactory({ id: modelId })) as GrouparooModel);
  const source = await SourceFactory(null, { modelId: model.id });

  await source.setOptions({ table: "users" });
  await source.bootstrapUniqueProperty({
    key: "userId",
    type: "integer",
    mappedColumn: "id",
  });
  await source.setMapping({ id: "userId" });
  await source.update({ state: "ready" });

  const properties: Property[] = [];

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
      sourceId: source.id,
      key,
      type,
      unique,
      isArray,
    };
    const options = { column: key };
    properties.push(await PropertyFactory(source, ruleProps, options));
  }

  return { properties, source, model };
};
