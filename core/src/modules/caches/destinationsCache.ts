import { ModelCache } from "../modelCache";
import { Destination } from "../../models/Destination";
import { Option } from "../../models/Option";
import { Mapping } from "../../models/Mapping";
import { WhereAttributeHash } from "sequelize";

async function findAllWithCache(
  this: ModelCache<Destination>,
  modelId?: string,
  state?: Destination["state"]
) {
  const now = new Date().getTime();
  if (this.expires > now && this.instances.length > 0) {
    return modelId
      ? this.instances.filter(
          (s) => s?.modelId === modelId && (!state || s.state === state)
        )
      : this.instances.filter((s) => !state || s.state === state);
  } else {
    this.instances = await Destination.unscoped().findAll({
      include: this.include(),
    });
    this.expires = now + this.TTL;
    return modelId
      ? this.instances.filter(
          (s) => s?.modelId === modelId && (!state || s.state === state)
        )
      : this.instances.filter((s) => !state || s.state === state);
  }
}

async function findOneWithCache(
  this: ModelCache<Destination>,
  value: string,
  modelId?: string,
  state?: Destination["state"],
  lookupKey: keyof Destination = "id"
) {
  const instances = await this.findAllWithCache(modelId);
  let instance = instances.find((i) => i[lookupKey] === value);

  if (!instance) {
    const where: WhereAttributeHash = { [lookupKey]: value };
    if (state) where.state = state;
    instance = await Destination.unscoped().findOne({
      where,
      include: this.include(),
    });
    if (instance) this.invalidate();
  }

  return instance;
}

export const DestinationsCache = new ModelCache<Destination>(
  findAllWithCache,
  findOneWithCache,
  () => [
    { model: Option, required: false },
    { model: Mapping, required: false },
  ]
);
