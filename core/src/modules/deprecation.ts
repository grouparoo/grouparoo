import { log } from "actionhero";

export namespace Deprecation {
  export function warn(topic: string, oldName: string, newName: string) {
    log(
      `[${topic}] - deprecation warning: \`${oldName}\` has been changed to \`${newName}\` and will be removed in a future release`,
      "warning"
    );
  }
}
