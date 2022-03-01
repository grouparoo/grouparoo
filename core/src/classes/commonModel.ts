import {
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  Length,
  BeforeBulkCreate,
  BeforeSave,
} from "sequelize-typescript";
import { NonAbstract } from "sequelize-typescript/dist/shared/types";
import validator from "validator";
import * as uuid from "uuid";
import { Op, Attributes, where, fn, col } from "sequelize";
import { config } from "actionhero";
import { WhereOptions } from "sequelize/types";
import { Errors } from "../modules/errors";

export type CommonModelStatic<M> = (new () => M) &
  NonAbstract<typeof CommonModel>;

// This tighter type is not yet in use because it would require all places where we make a new instance to typecheck.
//  For example, an action that takes state:string would need to coerce that to state: typeof App['state'].
//  That is out of scope for now.
//
// export abstract class CommonModel<T> extends Model<T, NonAbstract<Columns<T>>> {
export abstract class CommonModel<T> extends Model {
  /**
   * return the prefix for this type of class' id
   */
  abstract idPrefix(): string;

  uniqueIdentifier?: string[];

  @Length({ min: 1, max: 191 })
  @Column({ primaryKey: true })
  id: string;

  @BeforeCreate
  static generateId<T>(instance: CommonModel<T>) {
    if (!instance.id) instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
  }

  @BeforeBulkCreate
  static generateIds<T>(instances: CommonModel<T>[]) {
    instances.forEach((instance) => this.generateId(instance));
  }

  @BeforeCreate
  static validateId<T>(instance: CommonModel<T>) {
    const id: string = instance.id;
    let failing = false;
    if (id.length > 191) failing = true;
    if (!/^[A-Za-z0-9-_]+$/.test(id)) failing = true; // only allow letters, numbers, hyphen and underscore

    if (failing) {
      throw new Error(
        `invalid id: \`${id}\` - ids must be less than 191 characters and not contain spaces or special characters`
      );
    }
  }

  @BeforeBulkCreate
  static validateIds<T>(instances: CommonModel<T>[]) {
    instances.forEach((instance) => this.validateId(instance));
  }

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  async touch() {
    this.changed("updatedAt", true);
    return this.save({ hooks: false });
  }

  idIsDefault(): boolean {
    const uuid = this.id.split("_").pop();
    return this.id.startsWith(`${this.idPrefix()}_`) && validator.isUUID(uuid);
  }

  abstract apiData(): Promise<{ [key: string]: any }>;

  // --- Class Methods --- //

  /**
   * Find an instance of this class, regardless of scope.
   * Throw if the instance cannot be found.
   */
  public static async findById<T extends Model>(
    this: CommonModelStatic<T>,
    id: string
  ): Promise<T> {
    const instance = await this.scope(null).findOne({ where: { id } });
    const modelName = String(this).match(/class\s(.+)\sextends/)?.[1] ?? "item"; // TODO: It looks like at this point `this` is the stringified representation of the constructor function, literally "class Group extends CommonModel..."
    if (!instance) throw new Error(`cannot find ${modelName} ${id}`);
    return instance;
  }

  /**
   * Update many instances at once, never exceeding a set batch size for
   */
  public static async updateAllInBatches<T extends Model>(
    this: CommonModelStatic<T>,
    instances: CommonModel<T>[],
    values: Partial<{ [key in keyof Attributes<T>]: T[key] }>
  ) {
    const max = config.batchSize.internalWrite;
    const ids = instances.map((i) => i.id);
    const queue = [...ids];
    while (queue.length > 0) {
      await this.update(values, {
        where: { id: { [Op.in]: queue.splice(0, max) } },
      });
    }
  }

  /**
   * Ensures there isn't a duplicate version of this instance based on name or key.
   */
  @BeforeSave
  public static async ensureUnique<
    T extends CommonModel<T> & { name?: string; key?: string; state?: string }
  >(this: CommonModelStatic<T>, instance: T) {
    function getUniqueIdentifier(instance: T): (keyof typeof instance)[] {
      if (instance?.uniqueIdentifier) {
        return instance.uniqueIdentifier as (keyof typeof instance)[];
      } else {
        return instance?.name !== undefined
          ? ["name"]
          : instance?.key !== undefined
          ? ["key"]
          : undefined;
      }
    }

    const instanceUniqueIdentifiers = getUniqueIdentifier(instance);

    if (!instanceUniqueIdentifiers) {
      return;
    }

    const whereOpts: WhereOptions = {
      id: { [Op.ne]: instance.id },
    };

    instanceUniqueIdentifiers.forEach((identifier) => {
      whereOpts[identifier] = where(
        fn("LOWER", col(String(identifier))),
        String(instance[identifier]).toLowerCase()
      );
    });

    if (instance.state) {
      whereOpts.state = { [Op.notIn]: ["draft", "deleted"] };
    }

    const duplicates = await this.count({
      where: whereOpts,
    });

    if (duplicates > 0) {
      // The unique key defaults to anything defined on the class, then name, then key.
      throw new Errors.UniqueError(
        instanceUniqueIdentifiers
          .map((id) => `${id} "${instance[id]}" is already in use`)
          .join(", "),
        this.toString().split(" ")[1],
        instanceUniqueIdentifiers as string[],
        whereOpts
      );
    }
  }
}
