import { Errors, ExportProfilePluginMethod } from "@grouparoo/core";
import { validateQuery } from "../validateQuery";

export const exportProfile: ExportProfilePluginMethod = async ({
  connection,
  destination,
  syncOperations,
  export: { newProfileProperties, oldProfileProperties, newGroups, toDelete },
}) => {
  let error: Error;

  let { table, primaryKey, groupsTable, groupForeignKey, groupColumnName } =
    await destination.parameterizedOptions();

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
      if (!syncOperations.delete) {
        throw new Errors.InfoError(
          "Destination sync mode does not delete profiles."
        );
      }
      // delete
      const query = `DELETE FROM ${table} WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
      validateQuery(query);
      await connection.asyncQuery(query);
    } else if (newProfileProperties[primaryKey]) {
      const query = `SELECT * FROM ${table} WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
      validateQuery(query);
      const existingRecords = await connection.asyncQuery(query);
      if (existingRecords.length === 1) {
        if (!syncOperations.update) {
          throw new Errors.InfoError(
            "Destination sync mode does not update existing profiles."
          );
        }
        // update
        let updateStatement = `UPDATE ${table} SET`;
        const maxIdx = Object.keys(newProfileProperties).length - 1;
        Object.keys(newProfileProperties).map((key, idx) => {
          updateStatement += ` ${key} = "${newProfileProperties[key]}"`;
          if (idx < maxIdx) updateStatement += `,`;
        });
        updateStatement += ` WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
        validateQuery(updateStatement);
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
          await connection.asyncQuery(eraseStatement);
        }
      } else {
        // delete
        const deleteQuery = `DELETE FROM ${table} WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
        validateQuery(deleteQuery);
        await connection.asyncQuery(deleteQuery);

        // insert
        await insert(connection, table, syncOperations, newProfileProperties);
      }
    } else {
      if (!syncOperations.create) {
        throw new Errors.InfoError(
          "Destination sync mode does not create new profiles."
        );
      }
      // just insert
      await insert(connection, table, syncOperations, newProfileProperties);
    }

    // --- Groups --- //

    // delete existing groups
    const deleteGroupsQuery = `DELETE FROM ${groupsTable} WHERE ${groupForeignKey} = ${newProfileProperties[primaryKey]}`;
    validateQuery(deleteGroupsQuery);
    await connection.asyncQuery(deleteGroupsQuery);

    // add groups
    if (!toDelete) {
      for (const i in newGroups) {
        const data = {};
        data[groupForeignKey] = newProfileProperties[primaryKey];
        data[groupColumnName] = newGroups[i];

        const groupInsertQuery = `INSERT INTO ${groupsTable} (${buildKeyList(
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
  newProfileProperties
) => {
  if (!syncOperations.create) {
    throw new Errors.InfoError(
      "Destination sync mode does not create new profiles."
    );
  }
  // insert
  const query = `INSERT INTO ${table} (${buildKeyList(
    newProfileProperties
  )}) VALUES (${buildValueList(newProfileProperties)})`;
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
