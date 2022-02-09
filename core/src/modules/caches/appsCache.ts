import { ModelCache } from "../modelCache";
import { App } from "../../models/App";
import { Option } from "../../models/Option";
import { Includeable } from "sequelize";

function getInclude() {
  const include: Includeable[] = [{ model: Option, required: false }];
  return include;
}

async function findAllWithCache(
  this: ModelCache<App>,
  modelId?: string,
  state?: App["state"]
) {
  const now = new Date().getTime();
  if (this.expires > now && this.instances.length > 0) {
    return this.instances.filter((a) => !state || a.state === state);
  } else {
    this.instances = await App.unscoped().findAll({ include: getInclude() });
    this.expires = now + this.TTL;
    return this.instances.filter((a) => !state || a.state === state);
  }
}

async function findOneWithCache(
  this: ModelCache<App>,
  value: string,
  modelId?: string,
  state: App["state"] = null,
  lookupKey: keyof App = "id"
) {
  const instances = await this.findAllWithCache();
  let instance = instances.find((i) => i[lookupKey] === value);

  if (!instance) {
    instance = await App.unscoped().findOne({
      where: { [lookupKey]: value, state },
      include: getInclude(),
    });
    if (!instance) this.invalidate();
  }

  return instance;
}

export const AppsCache = new ModelCache<App>(
  findAllWithCache,
  findOneWithCache
);
