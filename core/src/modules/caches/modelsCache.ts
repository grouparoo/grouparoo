import { ModelCache } from "../modelCache";
import { GrouparooModel } from "../../models/GrouparooModel";
import { WhereAttributeHash } from "sequelize";

async function findAllWithCache(
  this: ModelCache<GrouparooModel>,
  modelId?: string,
  state?: GrouparooModel["state"]
) {
  const now = new Date().getTime();
  if (this.expires > now && this.instances.length > 0) {
    return this.instances.filter((a) => !state || a.state === state);
  } else {
    this.instances = await GrouparooModel.unscoped().findAll({
      include: this.include(),
    });
    this.expires = now + this.TTL;
    return this.instances.filter((a) => !state || a.state === state);
  }
}

async function findOneWithCache(
  this: ModelCache<GrouparooModel>,
  value: string,
  modelId?: string,
  state?: GrouparooModel["state"],
  lookupKey: keyof GrouparooModel = "id"
) {
  const instances = await this.findAllWithCache();
  let instance = instances.find((i) => i[lookupKey] === value);

  if (!instance) {
    const where: WhereAttributeHash = { [lookupKey]: value };
    if (state) where.state = state;
    instance = await GrouparooModel.unscoped().findOne({
      where,
      include: this.include(),
    });
    if (instance) this.invalidate();
  }

  return instance;
}

export const ModelsCache = new ModelCache<GrouparooModel>(
  findAllWithCache,
  findOneWithCache,
  () => []
);
