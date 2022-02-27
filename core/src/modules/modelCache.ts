import { env } from "actionhero";
import { Includeable } from "sequelize";

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
  // The include constructor needs to be a method rather than static or else the caches will create circular dependencies.  This is not-unlike how Sequelize-Typescript handles relationships.
  include: () => Includeable[];

  constructor(
    findAllWithCache: FindAllWithCache<T>,
    findOneWithCache: FindOneWithCache<T>,
    include: () => Includeable[]
  ) {
    this.findAllWithCache = findAllWithCache.bind(this);
    this.findOneWithCache = findOneWithCache.bind(this);
    this.include = include;
    this.instances = [];
  }

  invalidate() {
    this.expires = 0;
  }
}
