import {
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  AfterCreate,
  AfterUpdate,
  AfterDestroy,
  AfterBulkCreate,
  Length,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Log } from "../models/Log";
import { config, chatRoom } from "actionhero";

function modelName(instance): string {
  let name = instance.constructor.name;
  name = name[0].toLowerCase() + name.substr(1);
  return name;
}

export abstract class LoggedModel<T> extends Model {
  /**
   * return the prefix for this type of class' id
   */
  abstract idPrefix(): string;

  @Length({ min: 1, max: 191 })
  @Column({ primaryKey: true })
  id: string;

  @BeforeCreate
  static generateId(instance) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeCreate
  static validateId(instance) {
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

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  async touch() {
    this.changed("updatedAt", true);
    return this.save({ hooks: false });
  }

  async filteredDataForLogging() {
    let apiData = {};
    try {
      apiData = await this.apiData();
    } catch {}

    config.general.filteredParams.forEach((p) => {
      if (apiData[p]) apiData[p] = "** filtered **";
    });

    if (apiData["options"]) apiData["options"] = "** filtered **";

    return apiData;
  }

  async logMessage(verb: "create" | "update" | "destroy") {
    let message = "";
    let primaryName = this.id;
    const possibleNames = ["name", "key", "email", "path"];
    for (let i in possibleNames) {
      if (this[possibleNames[i]]) {
        primaryName = this[possibleNames[i]];
        break;
      }
    }

    switch (verb) {
      case "create":
        message = `${modelName(this)} "${primaryName}" created`;
        break;
      case "update":
        const changedValueStrings = [];
        const changedKeys = this.changed() as Array<string>;
        if (changedKeys) {
          changedKeys.forEach((k) => {
            let value = this[k];
            if (config.general.filteredParams.includes(k)) {
              value = "** filtered **";
            }

            changedValueStrings.push(`${k} -> ${value}`);
          });
        }

        message = `${modelName(
          this
        )} "${primaryName}" updated: ${changedValueStrings.join(", ")}`;
        break;
      case "destroy":
        message = `${modelName(this)} "${primaryName}" destroyed`;
        break;
    }

    return message;
  }

  abstract apiData(): Promise<{ [key: string]: any }>;

  // --- Class Methods --- //

  @AfterCreate
  static async logCreate(instance) {
    let message = `${modelName(this)} "${instance.id}" created`;
    try {
      message = await instance.logMessage("create");
    } catch (error) {
      message += ` (${error})`;
    }

    await Log.create({
      topic: modelName(instance),
      verb: "create",
      ownerId: instance.id,
      data: await instance.filteredDataForLogging(),
      message,
    });
  }

  @AfterCreate
  static async broadcast(instance) {
    try {
      await chatRoom.broadcast({}, `model:${modelName(instance)}`, {
        model: await instance.apiData(),
        verb: "create",
      });
    } catch {}
  }

  @AfterBulkCreate
  static async logBulkCreate(instances) {
    for (const i in instances) {
      const instance = instances[i];

      let message = `${modelName(this)} "${instance.id}" created`;
      try {
        message = await instance.logMessage("create");
      } catch (error) {
        message += ` (${error})`;
      }

      await Log.create({
        topic: modelName(instance),
        verb: "create",
        ownerId: instance.id,
        data: await instance.filteredDataForLogging(),
        message,
      });
    }
  }

  @AfterUpdate
  static async logUpdate(instance) {
    let message = `${modelName(this)} "${instance.id}" updated`;
    try {
      message = await instance.logMessage("update");
    } catch (error) {
      message += ` (${error})`;
    }

    await Log.create({
      topic: modelName(instance),
      verb: "update",
      ownerId: instance.id,
      data: await instance.filteredDataForLogging(),
      message,
    });
  }

  @AfterDestroy
  static async logDestroy(instance) {
    let message = `${modelName(this)} "${instance.id}" destroyed`;
    try {
      message = await instance.logMessage("destroy");
    } catch (error) {
      message += ` (${error})`;
    }

    await Log.create({
      topic: modelName(instance),
      verb: "destroy",
      ownerId: instance.id,
      data: await instance.filteredDataForLogging(),
      message,
    });
  }

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
