import { Model } from "sequelize-typescript";
import { CommonModel } from "../classes/commonModel";

export function modelName(instance: Model | typeof CommonModel) {
  let name = instance.constructor.name;
  name = name[0].toLowerCase() + name.substr(1);
  return name;
}
