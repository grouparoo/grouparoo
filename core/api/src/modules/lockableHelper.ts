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
    if (instance.isNewRecord) return;
    if (api?.codeConfig?.allowLockedModelChanges !== false) return;

    allowedColumnsThatCanChangeWhenLocked.push("updatedAt", "createdAt");

    const changedCols = instance.changed(); // ['firstName', 'lastLoginAt']

    for (const i in changedCols) {
      if (!allowedColumnsThatCanChangeWhenLocked.includes(changedCols[i])) {
        throw new Error(
          `you cannot update this locked ${modelName(instance)} (${
            instance.guid
          }) [${changedCols.map((k) => `\`${k}\``).join(", ")} has changes]`
        );
      }
    }
  }

  export async function beforeUpdateOptions(instance, hasChanges = true) {
    if (!instance.locked) return;
    if (api?.codeConfig?.allowLockedModelChanges !== false) return;

    if (hasChanges) {
      throw new Error(
        `you cannot update the options for a locked ${modelName(instance)} (${
          instance.guid
        })`
      );
    }
  }

  export async function beforeDestroy(instance) {
    if (!instance.locked) return;
    if (api?.codeConfig?.allowLockedModelChanges !== false) return;

    throw new Error(
      `you cannot destroy a locked ${modelName(instance)} (${instance.guid})`
    );
  }
}
