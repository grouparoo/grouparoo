import { ModelCache } from "../modelCache";
import { Source } from "../../models/Source";
import { Option } from "../../models/Option";
import { Filter } from "../../models/Filter";
import { Includeable } from "sequelize";

function getInclude() {
  const include: Includeable[] = [
    { model: Option, required: false },
    { model: Filter, required: false },
  ];
  return include;
}

async function findAllWithCache(this: ModelCache<Source>, modelId?: string) {
  const now = new Date().getTime();
  if (this.expires > now && this.instances.length > 0) {
    return modelId
      ? this.instances.filter((s) => s?.modelId === modelId)
      : this.instances;
  } else {
    this.instances = await Source.findAll({ include: getInclude() });
    this.expires = now + this.TTL;
    return modelId
      ? this.instances.filter((s) => s?.modelId === modelId)
      : this.instances;
  }
}

async function findOneWithCache(
  this: ModelCache<Source>,
  value: string,
  modelId?: string,
  lookupKey: keyof Source = "id"
) {
  const instances = await this.findAllWithCache(modelId);
  let instance = instances.find((i) => i[lookupKey] === value);

  if (!instance) {
    instance = await Source.findOne({
      where: { [lookupKey]: value },
      include: getInclude(),
    });
    if (!instance) this.invalidate();
  }

  return instance;
}

export const SourcesCache = new ModelCache<Source>(
  findAllWithCache,
  findOneWithCache
);
