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
