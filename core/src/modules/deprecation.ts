import { log } from "actionhero";

export namespace Deprecation {
  export function warnChanged(topic: string, oldName: string, newName: string) {
    log(
      `[${topic}] - deprecation warning: \`${oldName}\` has been changed to \`${newName}\` and will be removed in a future release`,
      "warning"
    );
  }

  export function warnRemoved(
    topic: string,
    container: string,
    property: string
  ) {
    log(
      `[${topic}] - deprecation warning: \`${container}\`.\`${property}\` has been removed and will throw an error in a future release`,
      "warning"
    );
  }
}
