import { env } from "actionhero";

type FindAllWithCache<T> = (modelId?: string) => Promise<T[]>;

type FindOneWithCache<T> = (
  value: string,
  modelId?: string,
  lookupKey?: keyof T
) => Promise<T>;

export class ModelCache<T> {
  TTL = env === "test" ? -1 : 1000 * 30;
  expires: number;
  instances: T[];
  findAllWithCache: FindAllWithCache<T>;
  findOneWithCache: FindOneWithCache<T>;

  constructor(
    findAllWithCache: FindAllWithCache<T>,
    findOneWithCache: FindOneWithCache<T>
  ) {
    this.findAllWithCache = findAllWithCache.bind(this);
    this.findOneWithCache = findOneWithCache.bind(this);
  }

  invalidate() {
    this.expires = 0;
  }
}

export const TTL = env === "test" ? -1 : 1000 * 30;

// export namespace ModelCache {
//   export const TTL = env === "test" ? -1 : 1000 * 30;

//   export const CACHE = {
//     Apps: {
//       name: "Apps" as const,
//       expires: 0,
//       instances: [] as App[],
//     },
//     Sources: {
//       name: "Sources" as const,
//       expires: 0,
//       instances: [] as Source[],
//     },
//     Properties: {
//       name: "Properties" as const,
//       expires: 0,
//       instances: [] as Property[],
//     },
//   };

//   type CachedModel = App | Source | Property;

//   async function findAllWithCache<T extends CachedModel>(
//     klass: keyof typeof CACHE,
//     modelId?: string
//   ): Promise<CachedModel[]> {
//     const collection = CACHE[klass];
//     const now = new Date().getTime();
//     const toReturnCache =
//       collection.expires > now && collection.instances.length > 0;

//     switch (collection.name) {
//       case "Apps":
//         if (modelId) throw new Error("cannot filter apps by modelId");
//         if (toReturnCache) {
//           return collection.instances;
//         } else {
//           collection.instances = await App.findAll();
//           collection.expires = now + TTL;
//           return findAllWithCache<T>(klass, modelId);
//         }
//         break;
//       case "Sources":
//         if (toReturnCache) {
//           return modelId
//             ? collection.instances.filter((s) => s?.modelId === modelId)
//             : collection.instances;
//         } else {
//           collection.instances = await Source.findAll();
//           collection.expires = now + TTL;
//           return findAllWithCache<T>(klass, modelId);
//         }
//         break;
//       case "Properties":
//         if (toReturnCache) {
//           return modelId
//             ? collection.instances.filter((p) => p?.source?.modelId === modelId)
//             : collection.instances;
//         } else {
//           collection.instances = await Property.findAll({
//             include: [{ model: Source.unscoped(), required: false }],
//           });
//           collection.expires = now + TTL;
//           return findAllWithCache<T>(klass, modelId);
//         }
//         break;
//       default:
//         throw new Error("not supported");
//     }
//   }

//   async function findOneWithCache<T extends CachedModel>(
//     value: string,
//     klass: keyof typeof CACHE,
//     modelId?: string,
//     lookupKey: keyof T = "id"
//   ) {
//     const instances: T[] = (await findAllWithCache<T>(klass, modelId)) as any[];
//     let instance = instances.find((p) => p[lookupKey] === value);

//     if (!instance) {
//       instance = await Property.findOne({
//         where: { [lookupKey]: value },
//         include: [{ model: Source.unscoped(), required: false }],
//       });
//       if (!instance) await Property.invalidateCache();
//     }

//     return instance;
//   }

//   function invalidateLocalCache() {
//     CACHE.Properties.expires = 0;
//   }
// }
