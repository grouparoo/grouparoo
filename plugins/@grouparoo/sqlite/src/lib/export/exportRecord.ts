import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { validateQuery } from "../validateQuery";

export const exportRecord: ExportRecordPluginMethod = async ({
  connection,
  destination,
  syncOperations,
  export: { newRecordProperties, oldRecordProperties, newGroups, toDelete },
}) => {
  let error: Error;

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
    // --- Profiles --- //
    if (toDelete) {
      if (!syncOperations.delete) {
        throw new Errors.InfoError(
          "Destination sync mode does not delete records."
        );
      }
      // delete
      const query = `DELETE FROM "${table}" WHERE ${primaryKey} = ${newRecordProperties[primaryKey]}`;
      validateQuery(query);
      await connection.asyncQuery(query);
    } else if (newRecordProperties[primaryKey]) {
      const query = `SELECT * FROM "${table}" WHERE ${primaryKey} = ${newRecordProperties[primaryKey]}`;
      validateQuery(query);
      const existingRecords = await connection.asyncQuery(query);
      if (existingRecords.length === 1) {
        if (!syncOperations.update) {
          throw new Errors.InfoError(
            "Destination sync mode does not update existing records."
          );
        }
        // update
        let updateStatement = `UPDATE "${table}" SET`;
        const maxIdx = Object.keys(newRecordProperties).length - 1;
        Object.keys(newRecordProperties).map((key, idx) => {
          updateStatement += ` ${key} = "${newRecordProperties[key]}"`;
          if (idx < maxIdx) updateStatement += `,`;
        });
        updateStatement += ` WHERE ${primaryKey} = ${newRecordProperties[primaryKey]}`;
        validateQuery(updateStatement);
        await connection.asyncQuery(updateStatement);

        // erase old columns
        const columnsToErase = Object.keys(existingRecords[0]).filter(
          (k) =>
            (newRecordProperties[k] === null ||
              newRecordProperties[k] === undefined) &&
            oldRecordProperties[k] !== null &&
            oldRecordProperties[k] !== undefined
        );

        if (columnsToErase.length > 0) {
          let eraseStatement = `UPDATE "${table}" SET`;
          const maxIdx = columnsToErase.length - 1;
          columnsToErase.map((col, idx) => {
            eraseStatement += ` ${col} = NULL`;
            if (idx < maxIdx) eraseStatement += `,`;
          });
          eraseStatement += ` WHERE ${primaryKey} = ${newRecordProperties[primaryKey]}`;
          validateQuery(eraseStatement);
          await connection.asyncQuery(eraseStatement);
        }
      } else {
        // delete
        const deleteQuery = `DELETE FROM "${table}" WHERE ${primaryKey} = ${newRecordProperties[primaryKey]}`;
        validateQuery(deleteQuery);
        await connection.asyncQuery(deleteQuery);

        // insert
        await insert(connection, table, syncOperations, newRecordProperties);
      }
    } else {
      // just insert
      await insert(connection, table, syncOperations, newRecordProperties);
    }

    // --- Groups --- //

    // delete existing groups
    const deleteGroupsQuery = `DELETE FROM "${groupsTable}" WHERE ${groupForeignKey} = ${newRecordProperties[primaryKey]}`;
    validateQuery(deleteGroupsQuery);
    await connection.asyncQuery(deleteGroupsQuery);

    // add groups
    if (!toDelete) {
      for (const i in newGroups) {
        const data = {};
        data[groupForeignKey] = newRecordProperties[primaryKey];
        data[groupColumnName] = newGroups[i];

        const groupInsertQuery = `INSERT INTO "${groupsTable}" (${buildKeyList(
          data
        )}) VALUES (${buildValueList(data)}) ON CONFLICT DO NOTHING`;
        validateQuery(groupInsertQuery);
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

const insert = async (
  connection,
  table,
  syncOperations,
  newRecordProperties
) => {
  if (!syncOperations.create) {
    throw new Errors.InfoError(
      "Destination sync mode does not create new records."
    );
  }
  // insert
  const query = `INSERT INTO "${table}" (${buildKeyList(
    newRecordProperties
  )}) VALUES (${buildValueList(newRecordProperties)})`;
  validateQuery(query);
  await connection.asyncQuery(query);
};

const buildKeyList = (data: any[] | { [key: string]: any }) => {
  const keys = Array.isArray(data) ? data : Object.keys(data);
  return keys.map((v) => `"${v}"`);
};

interface ValueListItem {
  [key: string]: any;
}

export const buildValueList = (data: any[] | ValueListItem) => {
  const values = Array.isArray(data) ? data : Object.values(data);
  return values.map((v) => {
    switch (typeof v) {
      case "string":
        return `"${v}"`;
      case "number":
        return v;
      // Protect against syntax errors if the value can't be resolved.
      default:
        return `''`;
    }
  });
};
