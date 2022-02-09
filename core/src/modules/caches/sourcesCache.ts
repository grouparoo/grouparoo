import { ModelCache } from "../modelCache";
import { Source } from "../../models/Source";
import { Option } from "../../models/Option";
import { Mapping } from "../../models/Mapping";
import { Includeable, WhereAttributeHash } from "sequelize";

function getInclude() {
  const include: Includeable[] = [
    { model: Option, required: false },
    { model: Mapping, required: false },
  ];
  return include;
}

async function findAllWithCache(
  this: ModelCache<Source>,
  modelId?: string,
  state?: Source["state"]
) {
  const now = new Date().getTime();
  if (this.expires > now && this.instances.length > 0) {
    return modelId
      ? this.instances.filter(
          (s) => s?.modelId === modelId && (!state || s.state === state)
        )
      : this.instances.filter((s) => !state || s.state === state);
  } else {
    this.instances = await Source.unscoped().findAll({ include: getInclude() });
    this.expires = now + this.TTL;
    return modelId
      ? this.instances.filter(
          (s) => s?.modelId === modelId && (!state || s.state === state)
        )
      : this.instances.filter((s) => !state || s.state === state);
  }
}

async function findOneWithCache(
  this: ModelCache<Source>,
  value: string,
  modelId?: string,
  state?: Source["state"],
  lookupKey: keyof Source = "id"
) {
  const instances = await this.findAllWithCache(modelId);
  let instance = instances.find((i) => i[lookupKey] === value);

  if (!instance) {
    const where: WhereAttributeHash = { [lookupKey]: value };
    if (state) where.state = state;
    instance = await Source.unscoped().findOne({
      where,
      include: getInclude(),
    });
    if (instance) this.invalidate();
  }

  return instance;
}

export const SourcesCache = new ModelCache<Source>(
  findAllWithCache,
  findOneWithCache
);
