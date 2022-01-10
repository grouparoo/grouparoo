import {
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  Length,
  BeforeBulkCreate,
} from "sequelize-typescript";
import validator from "validator";
import * as uuid from "uuid";

export abstract class CommonModel<T> extends Model {
  /**
   * return the prefix for this type of class' id
   */
  abstract idPrefix(): string;

  @Length({ min: 1, max: 191 })
  @Column({ primaryKey: true })
  id: string;

  @BeforeCreate
  static generateId(instance: CommonModel<any>) {
    if (!instance.id) instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
  }

  @BeforeBulkCreate
  static generateIds(instances: CommonModel<any>[]) {
    instances.forEach((instance) => this.generateId(instance));
  }

  @BeforeCreate
  static validateId(instance: CommonModel<any>) {
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
  static validateIds(instances: CommonModel<any>[]) {
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
   * Find an instance of this class, regardless of scope
   */
  static async findById(id: string): Promise<any> {
    // static class definitions or type defining are not yet available in TS.  See:
    // * https://github.com/microsoft/TypeScript/issues/14600
    // * https://github.com/microsoft/TypeScript/issues/34516
    // * https://github.com/microsoft/TypeScript/issues/33892

    // So, each model will implement this method

    throw new Error("not implemented");

    // const instance: T = await this.scope(null).findOne({ where: { id } });
    // if (!instance) {
    //   throw new Error(`cannot find ${this.name} ${id}`);
    // }
    // return instance;
  }
}
