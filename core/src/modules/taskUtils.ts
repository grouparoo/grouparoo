import { Task } from "actionhero";
import { TaskInputs } from "actionhero/dist/classes/task";
import { CLS } from "./cls";

export namespace TaskUtils {
  export async function reEnqueueIfGuidParams(task: Task, inputs: TaskInputs) {
    let hasChanges = false;
    const newInputs: TaskInputs = {};

    for (const key in inputs) {
      if (key === "guid") {
        newInputs["id"] = inputs[key];
        hasChanges = true;
      } else if (key.match(/Guid$/)) {
        newInputs[key.replace(/Guid$/, "Id")] = inputs[key];
        hasChanges = true;
      } else {
        newInputs[key] = inputs[key];
      }
    }

    if (hasChanges) {
      await CLS.enqueueTaskIn(60 * 1000, task.name, newInputs);
    }

    return { inputs: newInputs, reEnqueued: hasChanges };
  }
}
