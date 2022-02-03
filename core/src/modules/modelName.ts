import { Model } from "sequelize-typescript";
import { CommonModel } from "../classes/commonModel";

export function modelName<T>(instance: Model | CommonModel<T>) {
  let name = instance.constructor.name;
  name = name[0].toLowerCase() + name.substr(1);
  return name;
}
