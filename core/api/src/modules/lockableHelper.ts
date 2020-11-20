import { api } from "actionhero";

function modelName(instance): string {
  let name = instance.constructor.name;
  name = name[0].toLowerCase() + name.substr(1);
  return name;
}

export namespace LockableHelper {
  export async function beforeSave(
    instance,
    allowedColumnsThatCanChangeWhenLocked: string[] = []
  ) {
    if (!instance.locked) return;
    if (api?.codeConfig?.allowLockedModelChanges !== false) return;

    const changedCols = instance.changed(); // ['firstName', 'lastLoginAt']

    for (const i in changedCols) {
      if (!allowedColumnsThatCanChangeWhenLocked.includes(changedCols[i])) {
        throw new Error(
          `you cannot update this locked ${modelName(instance)} (${
            instance.guid
          })`
        );
      }
    }
  }
}
