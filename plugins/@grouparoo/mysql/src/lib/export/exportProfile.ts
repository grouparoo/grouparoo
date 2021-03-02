import { ExportProfilePluginMethod } from "@grouparoo/core";

export const exportProfile: ExportProfilePluginMethod = async ({
  connection,
  destination,
  export: { newProfileProperties, oldProfileProperties, newGroups, toDelete },
}) => {
  let success = false;
  let error;

  let {
    table,
    primaryKey,
    groupsTable,
    groupForeignKey,
    groupColumnName,
  } = await destination.parameterizedOptions();

  table = table?.toString();
  primaryKey = primaryKey?.toString();
  groupsTable = groupsTable?.toString();
  groupForeignKey = groupForeignKey?.toString();
  groupColumnName = groupColumnName?.toString();

  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }

  if (!newProfileProperties[primaryKey]) {
    throw new Error(
      `newProfileProperties[primaryKey] (${primaryKey}) is a required mapping`
    );
  }

  try {
    // --- Profiles --- //
    if (toDelete) {
      await connection.asyncQuery(`DELETE FROM ?? WHERE ?? = ?`, [
        table,
        primaryKey,
        newProfileProperties[primaryKey],
      ]);
    } else if (newProfileProperties[primaryKey]) {
      const existingRecords = await connection.asyncQuery(
        `SELECT * FROM ?? WHERE ?? = ?`,
        [table, primaryKey, newProfileProperties[primaryKey]]
      );

      if (existingRecords.length === 1) {
        // update
        await connection.asyncQuery(`UPDATE ?? SET ? WHERE ?? = ?`, [
          table,
          newProfileProperties,
          primaryKey,
          newProfileProperties[primaryKey],
        ]);

        // erase old columns
        const columnsToErase = Object.keys(existingRecords[0]).filter(
          (k) =>
            (newProfileProperties[k] === null ||
              newProfileProperties[k] === undefined) &&
            oldProfileProperties[k] !== null &&
            oldProfileProperties[k] !== undefined
        );

        if (columnsToErase.length > 0) {
          const nullData = {};
          columnsToErase.forEach((k) => (nullData[k] = null));

          await connection.asyncQuery(`UPDATE ?? SET ? WHERE ?? = ?`, [
            table,
            nullData,
            primaryKey,
            newProfileProperties[primaryKey],
          ]);
        }
      } else {
        // delete & insert
        await connection.asyncQuery(`DELETE FROM ?? WHERE ?? = ?`, [
          table,
          primaryKey,
          newProfileProperties[primaryKey],
        ]);

        await connection.asyncQuery(`INSERT INTO ?? SET ?`, [
          table,
          newProfileProperties,
        ]);
      }
    } else {
      // just insert
      await connection.asyncQuery(`INSERT INTO ?? SET ?`, [
        table,
        newProfileProperties,
      ]);
    }

    // --- Groups --- //

    await connection.asyncQuery(`DELETE FROM ?? WHERE ?? = ?`, [
      groupsTable,
      groupForeignKey,
      newProfileProperties[primaryKey],
    ]);

    if (!toDelete) {
      for (const i in newGroups) {
        const data = {};
        data[groupForeignKey] = newProfileProperties[primaryKey];
        data[groupColumnName] = newGroups[i];
        await connection.asyncQuery(`INSERT IGNORE INTO ?? SET ?`, [
          groupsTable,
          data,
        ]);
      }
    }

    success = true;
  } catch (e) {
    error = e;
  } finally {
    if (error) {
      throw error;
    }

    return { success: true };
  }
};
