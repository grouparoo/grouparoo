import { ModelCache } from "../modelCache";
import { App } from "../../models/App";
import { Option } from "../../models/Option";
import { Includeable } from "sequelize";

function getInclude() {
  const include: Includeable[] = [{ model: Option, required: false }];
  return include;
}

async function findAllWithCache(this: ModelCache<App>) {
  const now = new Date().getTime();
  if (this.expires > now && this.instances.length > 0) {
    return this.instances;
  } else {
    this.instances = await App.findAll({ include: getInclude() });
    this.expires = now + this.TTL;
    return this.findAllWithCache();
  }
}

async function findOneWithCache(
  this: ModelCache<App>,
  value: string,
  lookupKey: keyof App = "id"
) {
  const instances = await this.findAllWithCache();
  let instance = instances.find((i) => i[lookupKey] === value);

  if (!instance) {
    instance = await App.findOne({
      where: { [lookupKey]: value },
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
