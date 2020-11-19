import { api } from "actionhero";

function modelName(instance): string {
  let name = instance.constructor.name;
  name = name[0].toLowerCase() + name.substr(1);
  return name;
}

export namespace LockableHelper {
  export async function beforeSave(instance) {
    if (
      instance.locked === true &&
      api?.codeConfig?.allowLockedModelChanges === false
    ) {
      throw new Error(
        `you cannot update this locked ${modelName(instance)} (${
          instance.guid
        })`
      );
    }
  }
}
