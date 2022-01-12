import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { validateQuery } from "../validateQuery";
import format from "pg-format";

export const exportRecord: ExportRecordPluginMethod = async ({
  connection,
  destination,
  syncOperations,
  export: { newRecordProperties, oldRecordProperties, newGroups, toDelete },
}) => {
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

  // --- Records --- //
  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }
    // delete
    await connection.query(
      validateQuery(
        format(
          `DELETE FROM %I WHERE %I = %L`,
          table,
          primaryKey,
          newRecordProperties[primaryKey]
        )
      )
    );
  } else if (newRecordProperties[primaryKey]) {
    const existingRecords = await connection.query(
      validateQuery(
        format(
          `SELECT * FROM %I WHERE %I = %L`,
          table,
          primaryKey,
          newRecordProperties[primaryKey]
        )
      )
    );

    if (existingRecords.rows.length === 1) {
      if (!syncOperations.update) {
        throw new Errors.InfoError(
          "Destination sync mode does not update existing records."
        );
      }
      // update
      let updateStatement = `UPDATE %I SET`;
      const updateVariables = [table];
      const length = Object.keys(newRecordProperties).length - 1;
      let idx = 0;
      for (const key in newRecordProperties) {
        updateStatement += ` %I = %L${idx < length ? "," : ""} `;
        updateVariables.push(key);
        updateVariables.push(newRecordProperties[key]);
        idx++;
      }
      updateStatement += ` WHERE %I = %L`;
      updateVariables.push(primaryKey);
      updateVariables.push(newRecordProperties[primaryKey]);
      updateStatement = format(updateStatement, ...updateVariables);
      await connection.query(validateQuery(updateStatement));

      // erase old columns
      const columnsToErase = Object.keys(existingRecords.rows[0]).filter(
        (k) =>
          (newRecordProperties[k] === null ||
            newRecordProperties[k] === undefined) &&
          oldRecordProperties[k] !== null &&
          oldRecordProperties[k] !== undefined
      );

      if (columnsToErase.length > 0) {
        let eraseStatement = `UPDATE %I SET`;
        const eraseVariables = [table];
        const length = columnsToErase.length - 1;
        let idx = 0;
        columnsToErase.forEach((col) => {
          eraseStatement += ` %I = %L${idx < length ? "," : ""} `;
          eraseVariables.push(col);
          eraseVariables.push(null);
          idx++;
        });
        eraseStatement += ` WHERE %I = %L`;
        eraseVariables.push(primaryKey);
        eraseVariables.push(newRecordProperties[primaryKey]);
        eraseStatement = format(eraseStatement, ...eraseVariables);
        await connection.query(validateQuery(eraseStatement));
      }
    } else {
      // delete
      await connection.query(
        validateQuery(
          format(
            `DELETE FROM %I WHERE %I = %L`,
            table,
            primaryKey,
            newRecordProperties[primaryKey]
          )
        )
      );
      // insert
      await insert(connection, table, syncOperations, newRecordProperties);
    }
  } else {
    // just insert
    await insert(connection, table, syncOperations, newRecordProperties);
  }

  // --- Groups --- //

  // delete existing groups
  await connection.query(
    validateQuery(
      format(
        `DELETE FROM %I WHERE %I = %L`,
        groupsTable,
        groupForeignKey,
        newRecordProperties[primaryKey]
      )
    )
  );

  // add groups
  if (!toDelete) {
    for (const i in newGroups) {
      const data: Record<string, any> = {};
      data[groupForeignKey] = newRecordProperties[primaryKey];
      data[groupColumnName] = newGroups[i];

      // There may be 2 tasks writing to the user at the same time, so we need to be safer with our writes...
      // Some flavors of postgres cannot handle the ON CONFLICT directive (cough *redshift*).
      // ... Ideally: `INSERT INTO %I (%I) VALUES (%L) ON CONFLICT DO NOTHING`

      const groupInsertQuery = format(
        `INSERT INTO %I (%I) SELECT %L WHERE NOT EXISTS (SELECT %L FROM %I WHERE %I = %L AND %I = %L)`,
        groupsTable,
        Object.keys(data),
        Object.values(data),
        Object.keys(data)[0],
        groupsTable,
        groupForeignKey,
        data[groupForeignKey],
        groupColumnName,
        data[groupColumnName]
      );

      await connection.query(validateQuery(groupInsertQuery));
    }
  }
  return { success: true };
};

const insert = async (
  connection: any,
  table: any,
  syncOperations: Record<string, any>,
  newRecordProperties: Record<string, any>
) => {
  if (!syncOperations.create) {
    throw new Errors.InfoError(
      "Destination sync mode does not create new records."
    );
  }
  await connection.query(
    validateQuery(
      format(
        `INSERT INTO %I (%I) VALUES (%L)`,
        table,
        Object.keys(newRecordProperties),
        Object.values(newRecordProperties)
      )
    )
  );
};
