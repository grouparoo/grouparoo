import { task } from "actionhero";
import { Run } from "../models/Run";

/**
 * This method creates a new Run for internal use, ie: when you want to create a run due to a new profile property rule
 * This method will enqueue a run which creates an import for every profile
 */
export async function internalRun(creatorType: string, creatorGuid: string) {
  const run = await Run.create({
    creatorType,
    creatorGuid,
    state: "running",
  });

  await task.enqueue("run:internalRun", { runGuid: run.guid });

  return run;
}
