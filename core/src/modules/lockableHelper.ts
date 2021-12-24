import { api } from "actionhero";
import { Model } from "sequelize-typescript";
import { modelName } from "./modelName";

export namespace LockableHelper {
  export type LockableModel = Model & { locked: string };

  export async function beforeSave(
    instance: LockableModel,
    allowedColumnsThatCanChangeWhenLocked: string[] = []
  ) {
    // because of the strange way that SQLite handles undefined values, we need to convert any `undefined` to `null`
    if (instance.locked === undefined) instance.locked = null;

    if (!Boolean(instance.locked)) return;
    if (api?.codeConfig?.allowLockedModelChanges !== false) return;
    if (instance.isNewRecord) return;

    allowedColumnsThatCanChangeWhenLocked.push(
      "locked",
      "updatedAt",
      "createdAt"
    );

    const changedCols = instance.changed(); // ['firstName', 'lastLoginAt']
    if (Array.isArray(changedCols)) {
      for (const i in changedCols) {
        if (!allowedColumnsThatCanChangeWhenLocked.includes(changedCols[i])) {
          throw new Error(
            `you cannot update this locked ${modelName(instance)} (${
              instance.id
            } - ${instance.locked}) [${changedCols
              .map((k) => `\`${k}\``)
              .join(", ")} has changes]`
          );
        }
      }
    }
  }

  export async function beforeUpdateOptions(
    instance: LockableModel,
    hasChanges = true
  ) {
    if (!Boolean(instance.locked)) return;
    if (api?.codeConfig?.allowLockedModelChanges !== false) return;

    if (hasChanges) {
      throw new Error(
        `you cannot update the options for a locked ${modelName(instance)} (${
          instance.id
        }) - ${instance.locked}`
      );
    }
  }

  export async function beforeDestroy(instance: LockableModel) {
    if (!Boolean(instance.locked)) return;
    if (api?.codeConfig?.allowLockedModelChanges !== false) return;

    throw new Error(
      `you cannot destroy a locked ${modelName(instance)} (${instance.id} - ${
        instance.locked
      })`
    );
  }
}
