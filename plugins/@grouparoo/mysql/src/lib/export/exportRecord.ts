import { ExportRecordPluginMethod } from "@grouparoo/core";
import { MySQLConnection } from "../connect";
import { checkOptionsIntegrity } from "./destinationMappingOptions";

export const exportRecord: ExportRecordPluginMethod<MySQLConnection> = async ({
  connection,
  destination,
  destinationOptions,
  export: { newRecordProperties, oldRecordProperties, newGroups, toDelete },
}) => {
  checkOptionsIntegrity(destinationOptions);
  if (
    !destinationOptions.groupsTable ||
    !destinationOptions.groupForeignKey ||
    !destinationOptions.groupColumnName
  ) {
    newGroups = [];
  }
  let error;
  let { table, primaryKey, groupsTable, groupForeignKey, groupColumnName } =
    await destination.parameterizedOptions();

  table = table?.toString();
  primaryKey = primaryKey?.toString();
  groupsTable = groupsTable?.toString();
  groupForeignKey = groupForeignKey?.toString();
  groupColumnName = groupColumnName?.toString();

  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }

  if (!newRecordProperties[primaryKey]) {
    throw new Error(
      `newRecordProperties[primaryKey] (${primaryKey}) is a required mapping`
    );
  }

  try {
    // --- Records --- //
    if (toDelete) {
      await connection.asyncQuery(`DELETE FROM ?? WHERE ?? = ?`, [
        table,
        primaryKey,
        newRecordProperties[primaryKey],
      ]);
    } else if (newRecordProperties[primaryKey]) {
      const existingRecords = await connection.asyncQuery(
        `SELECT * FROM ?? WHERE ?? = ?`,
        [table, primaryKey, newRecordProperties[primaryKey]]
      );

      if (existingRecords.length === 1) {
        // update
        await connection.asyncQuery(`UPDATE ?? SET ? WHERE ?? = ?`, [
          table,
          newRecordProperties,
          primaryKey,
          newRecordProperties[primaryKey],
        ]);

        // erase old columns
        const columnsToErase = Object.keys(existingRecords[0]).filter(
          (k) =>
            (newRecordProperties[k] === null ||
              newRecordProperties[k] === undefined) &&
            (oldRecordProperties[k] !== null ||
              oldRecordProperties[k] !== undefined)
        );

        if (columnsToErase.length > 0) {
          const nullData = {};
          columnsToErase.forEach((k) => (nullData[k] = null));

          await connection.asyncQuery(`UPDATE ?? SET ? WHERE ?? = ?`, [
            table,
            nullData,
            primaryKey,
            newRecordProperties[primaryKey],
          ]);
        }
      } else {
        // delete & insert
        await connection.asyncQuery(`DELETE FROM ?? WHERE ?? = ?`, [
          table,
          primaryKey,
          newRecordProperties[primaryKey],
        ]);

        await connection.asyncQuery(`INSERT INTO ?? SET ?`, [
          table,
          newRecordProperties,
        ]);
      }
    } else {
      // just insert
      await connection.asyncQuery(`INSERT INTO ?? SET ?`, [
        table,
        newRecordProperties,
      ]);
    }

    // --- Groups --- //

    await connection.asyncQuery(`DELETE FROM ?? WHERE ?? = ?`, [
      groupsTable,
      groupForeignKey,
      newRecordProperties[primaryKey],
    ]);

    if (!toDelete) {
      for (const i in newGroups) {
        const data = {};
        data[groupForeignKey] = newRecordProperties[primaryKey];
        data[groupColumnName] = newGroups[i];
        await connection.asyncQuery(`INSERT IGNORE INTO ?? SET ?`, [
          groupsTable,
          data,
        ]);
      }
    }
  } catch (e) {
    error = e;
  } finally {
    if (error) {
      throw error;
    }

    return { success: true };
  }
};
