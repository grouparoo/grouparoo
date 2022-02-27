import { ModelCache } from "../modelCache";
import { App } from "../../models/App";
import { Option } from "../../models/Option";
import { WhereAttributeHash } from "sequelize";

async function findAllWithCache(
  this: ModelCache<App>,
  modelId?: string,
  state?: App["state"]
) {
  const now = Date.now();
  if (this.expires > now && this.instances.length > 0) {
    return this.instances.filter((a) => !state || a.state === state);
  } else {
    this.instances = await App.unscoped().findAll({ include: this.include() });
    this.expires = now + this.TTL;
    return this.instances.filter((a) => !state || a.state === state);
  }
}

async function findOneWithCache(
  this: ModelCache<App>,
  value: string,
  modelId?: string,
  state?: App["state"],
  lookupKey: keyof App = "id"
) {
  const instances = await this.findAllWithCache();
  let instance = instances.find((i) => i[lookupKey] === value);

  if (!instance) {
    const where: WhereAttributeHash = { [lookupKey]: value };
    if (state) where.state = state;
    instance = await App.unscoped().findOne({ where, include: this.include() });
    if (instance) this.invalidate();
  }
  return instance;
}

export const AppsCache = new ModelCache<App>(
  findAllWithCache,
  findOneWithCache,
  () => [{ model: Option, required: false }]
);
