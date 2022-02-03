import { Model } from "sequelize-typescript";
import { CommonModel, CommonModelStatic } from "../classes/commonModel";

/**
 * Given a Sequelize model, get it's name (like "app" or "property")
 */
export function modelName<T>(
  instance: Model | CommonModel | CommonModelStatic<T>
) {
  let name = instance.constructor.name;
  name = name[0].toLowerCase() + name.substr(1);
  return name;
}
