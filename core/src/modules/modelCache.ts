import { env } from "actionhero";
import { App } from "../models/App";
import { Source } from "../models/Source";
import { Property } from "../models/Property";

export namespace ModelCache {
  export const TTL = env === "test" ? -1 : 1000 * 30;

  export const CACHE = {
    Apps: {
      name: "Apps" as const,
      expires: 0,
      instances: [] as App[],
    },
    Sources: {
      name: "Sources" as const,
      expires: 0,
      instances: [] as Source[],
    },
    Properties: {
      name: "Properties" as const,
      expires: 0,
      instances: [] as Property[],
    },
  };

  type CachedModel = App | Source | Property;

  async function findAllWithCache<T extends CachedModel>(
    klass: keyof typeof CACHE,
    modelId?: string
  ): Promise<CachedModel[]> {
    const collection = CACHE[klass];
    const now = new Date().getTime();
    const toReturnCache =
      collection.expires > now && collection.instances.length > 0;

    switch (collection.name) {
      case "Apps":
        if (modelId) throw new Error("cannot filter apps by modelId");
        if (toReturnCache) {
          return collection.instances;
        } else {
          collection.instances = await App.findAll();
          collection.expires = now + TTL;
          return findAllWithCache<T>(klass, modelId);
        }
        break;
      case "Sources":
        if (toReturnCache) {
          return modelId
            ? collection.instances.filter((s) => s?.modelId === modelId)
            : collection.instances;
        } else {
          collection.instances = await Source.findAll();
          collection.expires = now + TTL;
          return findAllWithCache<T>(klass, modelId);
        }
        break;
      case "Properties":
        if (toReturnCache) {
          return modelId
            ? collection.instances.filter((p) => p?.source?.modelId === modelId)
            : collection.instances;
        } else {
          collection.instances = await Property.findAll({
            include: [{ model: Source.unscoped(), required: false }],
          });
          collection.expires = now + TTL;
          return findAllWithCache<T>(klass, modelId);
        }
        break;
      default:
        throw new Error("not supported");
    }
  }

  async function findOneWithCache<T extends CachedModel>(
    value: string,
    klass: keyof typeof CACHE,
    modelId?: string,
    lookupKey: keyof T = "id"
  ) {
    const instances: T[] = (await findAllWithCache<T>(klass, modelId)) as any[];
    let instance = instances.find((p) => p[lookupKey] === value);

    if (!property) {
      property = await Property.findOne({
        where: { [lookupKey]: value },
        include: [{ model: Source.unscoped(), required: false }],
      });
      if (!property) await Property.invalidateCache();
    }

    return property;
  }

  function invalidateLocalCache() {
    CACHE.Properties.expires = 0;
  }
}
