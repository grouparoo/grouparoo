import { Model } from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";

export function modelName(instance: Model | typeof LoggedModel) {
  let name = instance.constructor.name;
  name = name[0].toLowerCase() + name.substr(1);
  return name;
}
