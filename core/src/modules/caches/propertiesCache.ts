import { ModelCache } from "../modelCache";
import { Property } from "../../models/Property";
import { Source } from "../../models/Source";
import { Option } from "../../models/Option";
import { Filter } from "../../models/Filter";
import { Includeable } from "sequelize";

const include: Includeable[] = [
  { model: Source.unscoped(), required: false },
  { model: Option, required: false },
  { model: Filter, required: false },
];

async function findAllWithCache(this: ModelCache<Property>, modelId?: string) {
  const now = new Date().getTime();
  if (this.expires > now && this.instances.length > 0) {
    return modelId
      ? this.instances.filter((p) => p?.source?.modelId === modelId)
      : this.instances;
  } else {
    this.instances = await Property.findAll({ include });
    this.expires = now + this.TTL;
    return this.findAllWithCache(modelId);
  }
}

async function findOneWithCache(
  this: ModelCache<Property>,
  value: string,
  modelId?: string,
  lookupKey: keyof Property = "id"
) {
  const instances = await this.findAllWithCache(modelId);
  let instance = instances.find((i) => i[lookupKey] === value);

  if (!instance) {
    instance = await Property.findOne({
      where: { [lookupKey]: value },
      include,
    });
    if (!instance) this.invalidate();
  }

  return instance;
}

export const PropertiesCache = new ModelCache<Property>(
  findAllWithCache,
  findOneWithCache
);
