import { ExportProfilePluginMethod } from "@grouparoo/core";
import { validateQuery } from "../validateQuery";

export const exportProfile: ExportProfilePluginMethod = async ({
  connection,
  destination,
  export: { newProfileProperties, oldProfileProperties, newGroups, toDelete },
}) => {
  let error: Error;

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

  // TODO:
  //
  // - [ ] Something isn't working here. To recreate, run the update SQL in
  //   TablePlus and then re-run the users source. Track down the issue.
  // - [ ] Get tests passing.
  // - [ ] Refactor this file.
  // - [ ] Remove console logs.
  // - [ ] Remove pg packages.
  // - [ ] Support relative paths.

  try {
    // --- Profiles --- //
    if (toDelete) {
      // delete
      const query = `DELETE FROM ${table} WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
      validateQuery(query);

      console.log("--- [DEST 01] exportProfile ---", query);

      await connection.asyncQuery(query);
    } else if (newProfileProperties[primaryKey]) {
      const query = `SELECT * FROM ${table} WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
      validateQuery(query);

      console.log("--- [DEST 02] exportProfile ---", query);

      const existingRecords = await connection.asyncQuery(query);

      console.log("### ", existingRecords);

      if (existingRecords.length === 1) {
        // update
        let updateStatement = `UPDATE ${table} SET`;
        const maxIdx = Object.keys(newProfileProperties).length - 1;
        newProfileProperties.map((key, idx) => {
          updateStatement += ` ${key} = ${newProfileProperties[key]}`;
          if (idx < maxIdx) updateStatement += `,`;
        });
        updateStatement += ` WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
        validateQuery(updateStatement);

        console.log("--- [DEST 03] exportProfile ---", updateStatement);

        await connection.asyncQuery(updateStatement);

        // erase old columns
        const columnsToErase = Object.keys(existingRecords[0]).filter(
          (k) =>
            (newProfileProperties[k] === null ||
              newProfileProperties[k] === undefined) &&
            oldProfileProperties[k] !== null &&
            oldProfileProperties[k] !== undefined
        );

        if (columnsToErase.length > 0) {
          let eraseStatement = `UPDATE ${table} SET`;
          const maxIdx = columnsToErase.length - 1;
          columnsToErase.map((col, idx) => {
            eraseStatement += ` ${col} = NULL`;
            if (idx < maxIdx) eraseStatement += `,`;
          });
          eraseStatement += ` WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
          validateQuery(eraseStatement);

          console.log("--- [DEST 04] exportProfile ---", eraseStatement);

          await connection.asyncQuery(eraseStatement);
        }
      } else {
        // delete
        const deleteQuery = `DELETE FROM ${table} WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
        validateQuery(deleteQuery);

        console.log("--- [DEST 05] exportProfile ---", deleteQuery);

        await connection.asyncQuery(deleteQuery);

        // insert
        const query = `INSERT INTO ${table} (${Object.keys(
          newProfileProperties
        )}) VALUES (${Object.values(newProfileProperties)})`;
        validateQuery(query);

        console.log("--- [DEST 06] exportProfile ---", query);

        await connection.asyncQuery(query);
      }
    } else {
      // just insert
      const query = `INSERT INTO ${table} (${Object.keys(
        newProfileProperties
      )}) VALUES (${Object.values(newProfileProperties)})`;
      validateQuery(query);

      console.log("--- [DEST 07] exportProfile ---", query);

      await connection.asyncQuery(query);
    }

    // --- Groups --- //

    // delete existing groups
    const deleteGroupsQuery = `DELETE FROM ${groupsTable} WHERE ${groupForeignKey} = ${newProfileProperties[primaryKey]}`;
    validateQuery(deleteGroupsQuery);

    console.log("--- [DEST 08] exportProfile ---", deleteGroupsQuery);

    await connection.asyncQuery(deleteGroupsQuery);

    // add groups
    if (!toDelete) {
      for (const i in newGroups) {
        const data = {};
        data[groupForeignKey] = newProfileProperties[primaryKey];
        data[groupColumnName] = newGroups[i];

        const groupInsertQuery = `INSERT INTO ${groupsTable} (${Object.keys(
          data
        )}) VALUES (${Object.values(data)}) ON CONFLICT IGNORE`;
        validateQuery(groupInsertQuery);

        console.log("--- [DEST 09] exportProfile ---", groupInsertQuery);

        await connection.asyncQuery(groupInsertQuery);
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
