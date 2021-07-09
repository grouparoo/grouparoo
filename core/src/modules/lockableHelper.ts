import { api } from "actionhero";
import { modelName } from "./modelName";

export namespace LockableHelper {
  export async function beforeSave(
    instance,
    allowedColumnsThatCanChangeWhenLocked: string[] = []
  ) {
    if (instance.locked === null || instance.locked === undefined) return;
    if (api?.codeConfig?.allowLockedModelChanges !== false) return;
    if (instance.isNewRecord) return;

    allowedColumnsThatCanChangeWhenLocked.push(
      "locked",
      "updatedAt",
      "createdAt"
    );

    const changedCols = instance.changed(); // ['firstName', 'lastLoginAt']

    for (const i in changedCols) {
      if (!allowedColumnsThatCanChangeWhenLocked.includes(changedCols[i])) {
        throw new Error(
          `you cannot update this locked ${modelName(instance)} (${
            instance.id
          }) [${changedCols.map((k) => `\`${k}\``).join(", ")} has changes]`
        );
      }
    }
  }

  export async function beforeUpdateOptions(instance, hasChanges = true) {
    if (instance.locked === null || instance.locked === undefined) return;
    if (api?.codeConfig?.allowLockedModelChanges !== false) return;

    if (hasChanges) {
      throw new Error(
        `you cannot update the options for a locked ${modelName(instance)} (${
          instance.id
        })`
      );
    }
  }

  export async function beforeDestroy(instance) {
    if (instance.locked === null || instance.locked === undefined) return;
    if (api?.codeConfig?.allowLockedModelChanges !== false) return;

    throw new Error(
      `you cannot destroy a locked ${modelName(instance)} (${instance.id})`
    );
  }
}
