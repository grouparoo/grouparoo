import { Log } from "../models/Log";
import { config, chatRoom } from "actionhero";
import { modelName } from "../modules/modelName";
import { CommonModel } from "./commonModel";
import {
  AfterCreate,
  AfterUpdate,
  AfterDestroy,
  AfterBulkCreate,
} from "sequelize-typescript";

function filteredParams() {
  let filteredParams: string[] = [];
  if (typeof config.general.filteredParams === "function") {
    filteredParams = config.general.filteredParams();
  } else {
    filteredParams = config.general.filteredParams;
  }
  return filteredParams;
}

export abstract class LoggedModel<T> extends CommonModel<T> {
  async filteredDataForLogging() {
    let apiData: Record<string, any> = {};
    try {
      apiData = await this.apiData();
    } catch {}

    filteredParams().forEach((p) => {
      if (apiData[p]) apiData[p] = "** filtered **";
    });

    if (apiData["options"]) apiData["options"] = "** filtered **";

    return apiData;
  }

  async logMessage(verb: "create" | "update" | "destroy") {
    let message = "";
    let primaryName = this.id;
    const possibleNames = ["name", "key", "email", "path"] as const;
    const _filteredParams = filteredParams();
    for (const possibleName of possibleNames) {
      //@ts-ignore
      if (this[possibleName]) {
        //@ts-ignore
        primaryName = this[possibleName];
        break;
      }
    }

    switch (verb) {
      case "create":
        message = `${modelName(this)} "${primaryName}" created`;
        break;
      case "update":
        const changedValueStrings: string[] = [];
        const changedKeys = this.changed();
        if (changedKeys) {
          changedKeys.forEach((k) => {
            //@ts-ignore
            let value = this[k];
            if (_filteredParams.includes(k)) value = "** filtered **";
            changedValueStrings.push(`${k} -> ${value}`);
          });
        }

        message = `${modelName(this)} "${primaryName}" updated${
          changedValueStrings.length > 0
            ? ": " + changedValueStrings.join(", ")
            : ""
        }`;
        break;
      case "destroy":
        message = `${modelName(this)} "${primaryName}" destroyed`;
        break;
    }

    return message;
  }

  // --- Class Methods --- //

  @AfterCreate
  static async logCreate(instance: LoggedModel<any>) {
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

  @AfterBulkCreate
  static async logBulkCreate(instances: LoggedModel<any>[]) {
    const bulkParams = [];

    for (const instance of instances) {
      let message = `${modelName(this)} "${instance.id}" created`;
      try {
        message = await instance.logMessage("create");
      } catch (error) {
        message += ` (${error})`;
      }

      bulkParams.push({
        topic: modelName(instance),
        verb: "create",
        ownerId: instance.id,
        data: await instance.filteredDataForLogging(),
        message,
      });
    }

    if (bulkParams.length > 0) await Log.bulkCreate(bulkParams);
  }

  @AfterCreate
  static async broadcast(instance: LoggedModel<any>) {
    try {
      await chatRoom.broadcast({}, `model:${modelName(instance)}`, {
        model: await instance.apiData(),
        verb: "create",
      });
    } catch {}
  }

  @AfterUpdate
  static async logUpdate(instance: LoggedModel<any>) {
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
  static async logDestroy(instance: LoggedModel<any>) {
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
