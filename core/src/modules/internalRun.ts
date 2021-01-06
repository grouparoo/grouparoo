import { task, log, config } from "actionhero";
import { Run } from "../models/Run";
import { Transaction } from "sequelize";

/**
 * This method creates a new Run for internal use, ie: when you want to create a run due to a new Property
 * This method will enqueue a run which creates an import for every profile
 * Enqueuing a new internal run will end any previous runs for the same creator type
 */
export async function internalRun(
  creatorType: string,
  creatorGuid: string,
  transaction?: Transaction
) {
  const previousRuns = await Run.findAll({
    where: {
      creatorType,
      state: "running",
    },
    transaction,
  });

  for (const i in previousRuns) {
    await previousRuns[i].stop(transaction);
  }

  const run = await Run.create(
    {
      creatorType,
      creatorGuid,
      state: "running",
    },
    { transaction }
  );

  log(
    `[ run ] starting run ${
      run.guid
    } for ${creatorType} ${await run.getCreatorName(
      transaction
    )} (${creatorGuid})`,
    "notice"
  );

  // we need to allow time to for the rest of the model update to complete (ie: this could be run after Property#updateOptions and we still need to wait for the state to change)
  await task.enqueueIn(config.tasks.timeout + 1, "run:internalRun", {
    runGuid: run.guid,
  });

  return run;
}
