import { connect } from "./../connect";
import {
  Profile,
  App,
  Destination,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";

export async function exportProfile(
  app: App,
  appOptions: SimpleAppOptions,
  destination: Destination,
  destinationOptions: SimpleDestinationOptions,
  profile: Profile,
  oldProfileProperties: { [key: string]: any },
  newProfileProperties: { [key: string]: any },
  oldGroups: Array<string>,
  newGroups: Array<string>,
  toDelete: boolean
) {
  let success = false;
  let error;

  const client = await connect(appOptions);
  const {
    table,
    primaryKey,
    groupsTable,
    groupForeignKey,
    groupColumnName,
  } = await destination.parameterizedOptions();

  if (Object.keys(newProfileProperties).length === 0) {
    await client.asyncEnd();
    return false;
  }

  if (!newProfileProperties[primaryKey]) {
    await client.asyncEnd();
    throw new Error(
      `newProfileProperties[primaryKey] (${primaryKey}) is a required mapping`
    );
  }

  try {
    // --- Profiles --- //
    if (toDelete) {
      await client.asyncQuery(`DELETE FROM ?? WHERE ?? = ?`, [
        table,
        primaryKey,
        newProfileProperties[primaryKey],
      ]);
    } else if (newProfileProperties[primaryKey]) {
      const existingRecords = await client.asyncQuery(
        `SELECT * FROM ?? WHERE ?? = ?`,
        [table, primaryKey, newProfileProperties[primaryKey]]
      );

      if (existingRecords.length === 1) {
        // update
        await client.asyncQuery(`UPDATE ?? SET ? WHERE ?? = ?`, [
          table,
          newProfileProperties,
          primaryKey,
          newProfileProperties[primaryKey],
        ]);

        // erase old columns
        const columnsToErase = Object.keys(existingRecords[0]).filter(
          (k) =>
            newProfileProperties[k] === null ||
            newProfileProperties[k] === undefined
        );

        if (columnsToErase.length > 0) {
          const nullData = {};
          columnsToErase.forEach((k) => (nullData[k] = null));

          await client.asyncQuery(`UPDATE ?? SET ? WHERE ?? = ?`, [
            table,
            nullData,
            primaryKey,
            newProfileProperties[primaryKey],
          ]);
        }
      } else {
        // delete & insert
        await client.asyncQuery(`DELETE FROM ?? WHERE ?? = ?`, [
          table,
          primaryKey,
          newProfileProperties[primaryKey],
        ]);

        await client.asyncQuery(`INSERT INTO ?? SET ?`, [
          table,
          newProfileProperties,
        ]);
      }
    } else {
      // just insert
      await client.asyncQuery(`INSERT INTO ?? SET ?`, [
        table,
        newProfileProperties,
      ]);
    }

    // --- Groups --- //

    await client.asyncQuery(`DELETE FROM ?? WHERE ?? = ?`, [
      groupsTable,
      groupForeignKey,
      newProfileProperties[primaryKey],
    ]);

    if (!toDelete) {
      for (const i in newGroups) {
        const data = {};
        data[groupForeignKey] = newProfileProperties[primaryKey];
        data[groupColumnName] = newGroups[i];
        await client.asyncQuery(`INSERT INTO ?? SET ?`, [groupsTable, data]);
      }
    }

    success = true;
  } catch (e) {
    error = e;
  } finally {
    await client.asyncEnd();
    if (error) {
      throw error;
    }

    return success;
  }
}
