import { env } from "actionhero";

type StatefulCachedModel = { state: string };

type FindAllWithCache<T extends StatefulCachedModel> = (
  modelId?: string,
  state?: T["state"]
) => Promise<T[]>;

type FindOneWithCache<T extends StatefulCachedModel> = (
  value: string,
  modelId?: string,
  state?: T["state"],
  lookupKey?: keyof T
) => Promise<T>;

export class ModelCache<T extends StatefulCachedModel> {
  TTL = env === "test" ? -1 : 1000 * 30;
  expires: number = 0;
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
