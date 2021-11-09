import { ExportRecordPluginMethod } from "@grouparoo/core";
import { MySQLConnection } from "@grouparoo/mysql/dist/lib/connect";

export const exportRecord: ExportRecordPluginMethod<MySQLConnection> = async ({
  connection,
  destination,
  export: { newRecordProperties, oldRecordProperties, newGroups, toDelete },
}) => {
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
      await connection.asyncQuery(`ALTER TABLE ?? DELETE WHERE ?? = ?`, [
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
        const { [primaryKey]: _, ...columnsToUpdate } = newRecordProperties;

        // update
        await connection.asyncQuery(`ALTER TABLE ?? UPDATE ? WHERE ?? = ?`, [
          table,
          columnsToUpdate,
          primaryKey,
          newRecordProperties[primaryKey],
        ]);

        // erase old columns
        const columnsToErase = Object.keys(existingRecords[0]).filter(
          (k) =>
            k !== primaryKey &&
            (newRecordProperties[k] === null ||
              newRecordProperties[k] === undefined) &&
            (oldRecordProperties[k] !== null ||
              oldRecordProperties[k] !== undefined)
        );

        if (columnsToErase.length > 0) {
          const nullData = {};
          columnsToErase.forEach((k) => (nullData[k] = null));

          await connection.asyncQuery(`ALTER TABLE ?? UPDATE ? WHERE ?? = ?`, [
            table,
            nullData,
            primaryKey,
            newRecordProperties[primaryKey],
          ]);
        }
      } else {
        // delete & insert
        await connection.asyncQuery(`ALTER TABLE ?? DELETE WHERE ?? = ?`, [
          table,
          primaryKey,
          newRecordProperties[primaryKey],
        ]);

        await connection.asyncQuery(`INSERT INTO ?? (??) VALUES (?)`, [
          table,
          Object.keys(newRecordProperties),
          Object.values(newRecordProperties),
        ]);
      }
    } else {
      // just insert
      await connection.asyncQuery(`INSERT INTO ?? (??) VALUES (?)`, [
        table,
        Object.keys(newRecordProperties),
        Object.values(newRecordProperties),
      ]);
    }

    // --- Groups --- //

    await connection.asyncQuery(`ALTER TABLE ?? DELETE WHERE ?? = ?`, [
      groupsTable,
      groupForeignKey,
      newRecordProperties[primaryKey],
    ]);

    if (toDelete) {
      return;
    }

    for (const i in newGroups) {
      const data = {
        [groupForeignKey]: newRecordProperties[primaryKey],
        [groupColumnName]: newGroups[i],
      };

      const query = `INSERT INTO ?? (??) SELECT ? WHERE NOT EXISTS (SELECT ?? FROM ?? WHERE ?? = ? AND ?? = ?)`;
      const params = [
        groupsTable,
        Object.keys(data),
        Object.values(data),
        groupForeignKey,
        groupsTable,
        groupForeignKey,
        data[groupForeignKey],
        groupColumnName,
        data[groupColumnName],
      ];

      await connection.asyncQuery(query, params);
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
