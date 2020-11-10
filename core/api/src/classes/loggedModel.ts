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
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Log } from "../models/Log";
import { config, chatRoom } from "actionhero";
import { Transaction } from "sequelize";

function modelName(instance): string {
  let name = instance.constructor.name;
  name = name[0].toLowerCase() + name.substr(1);
  return name;
}

export abstract class LoggedModel<T> extends Model<T> {
  /**
   * return the prefix for this type of class' guid
   */
  abstract guidPrefix(): string;

  @Column({ primaryKey: true })
  guid: string;

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AfterCreate
  static async logCreate(
    instance,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    await Log.create(
      {
        topic: modelName(instance),
        verb: "create",
        ownerGuid: instance.guid,
        data: await instance.filteredDataForLogging(),
        message: await instance.logMessage("create"),
      },
      { transaction }
    );
  }

  @AfterCreate
  static async broadcast(instance) {
    await chatRoom.broadcast({}, `model:${modelName(instance)}`, {
      model: await instance.apiData(),
      verb: "create",
    });
  }

  @AfterBulkCreate
  static async logBulkCreate(
    instances,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    for (const i in instances) {
      const instance = instances[i];
      await Log.create(
        {
          topic: modelName(instance),
          verb: "create",
          ownerGuid: instance.guid,
          data: await instance.filteredDataForLogging(),
          message: await instance.logMessage("create"),
        },
        { transaction }
      );
    }
  }

  @AfterUpdate
  static async logUpdate(
    instance,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    await Log.create(
      {
        topic: modelName(instance),
        verb: "update",
        ownerGuid: instance.guid,
        data: await instance.filteredDataForLogging(),
        message: await instance.logMessage("update"),
      },
      { transaction }
    );
  }

  @AfterDestroy
  static async logDestroy(
    instance,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    await Log.create(
      {
        topic: modelName(instance),
        verb: "destroy",
        ownerGuid: instance.guid,
        data: await instance.filteredDataForLogging(),
        message: await instance.logMessage("destroy"),
      },
      { transaction }
    );
  }

  async filteredDataForLogging() {
    const apiData = await this.apiData();

    config.general.filteredParams.forEach((p) => {
      if (apiData[p]) apiData[p] = "** filtered **";
    });

    if (apiData.options) apiData.options = "** filtered **";

    return apiData;
  }

  async logMessage(verb: "create" | "update" | "destroy") {
    let message = "";
    let primaryName = this.guid;
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

  /**
   * Find an instance of this class, regardless of scope
   */
  static async findByGuid(guid: string): Promise<any> {
    // static class definitions or type defining are not yet available in TS.  See:
    // * https://github.com/microsoft/TypeScript/issues/14600
    // * https://github.com/microsoft/TypeScript/issues/34516
    // * https://github.com/microsoft/TypeScript/issues/33892

    // So, each model will implement this method

    throw new Error("not implemented");

    // const instance: T = await this.scope(null).findOne({ where: { guid } });
    // if (!instance) {
    //   throw new Error(`cannot find ${this.name} ${guid}`);
    // }
    // return instance;
  }
}
