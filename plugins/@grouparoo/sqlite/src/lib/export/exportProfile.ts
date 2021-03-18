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

  try {
    // --- Profiles --- //
    if (toDelete) {
      // delete
      const query = `DELETE FROM ${table} WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
      validateQuery(query);
      await connection.asyncQuery(query);
    } else if (newProfileProperties[primaryKey]) {
      const query = `SELECT * FROM ${table} WHERE ${primaryKey} = ${newProfileProperties[primaryKey]}`;
      validateQuery(query);
      const existingRecords = await connection.asyncQuery(query);

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
        const query = `INSERT INTO ${table} (${Object.keys(
          newProfileProperties
        )}) VALUES (${buildValueList(newProfileProperties)})`;
        validateQuery(query);
        await connection.asyncQuery(query);
      }
    } else {
      // just insert
      const query = `INSERT INTO ${table} (${Object.keys(
        newProfileProperties
      )}) VALUES (${buildValueList(newProfileProperties)})`;
      validateQuery(query);
      await connection.asyncQuery(query);
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

        const groupInsertQuery = `INSERT INTO ${groupsTable} (${Object.keys(
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

interface ValueListItem {
  [key: string]: any;
}

export const buildValueList = (data: any[] | ValueListItem) => {
  const values = Array.isArray(data) ? data : Object.values(data);
  return values.map((v) => (typeof v === "string" ? `'${v}'` : v));
};
