import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { DestinationSyncOperations } from "@grouparoo/core/src/models/Destination";
import SQLiteQueryBuilder from "../queryBuilder";
import { SQLiteConnection } from "../sqlite";
import { buildKeyList, toValuePlaceholders, toValuesArray } from "../util";

export const exportRecord: ExportRecordPluginMethod<SQLiteConnection> = async ({
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
    // --- Records --- //
    if (toDelete) {
      if (!syncOperations.delete) {
        throw new Errors.InfoError(
          "Destination sync mode does not delete records."
        );
      }
      // delete
      const [query, params] = SQLiteQueryBuilder.build(
        `DELETE FROM "${table}" WHERE ${primaryKey} = ?`,
        [newRecordProperties[primaryKey]]
      );
      await connection.asyncQuery(query, params);
    } else if (newRecordProperties[primaryKey]) {
      const [query, params] = SQLiteQueryBuilder.build(
        `SELECT * FROM "${table}" WHERE ${primaryKey} = ?`,
        [newRecordProperties[primaryKey]]
      );
      const existingRecords = await connection.asyncQuery(query, params);
      if (existingRecords.length === 1) {
        if (!syncOperations.update) {
          throw new Errors.InfoError(
            "Destination sync mode does not update existing records."
          );
        }
        // update
        const updateQueryBuilder = new SQLiteQueryBuilder(
          `UPDATE "${table}" SET`
        );
        const maxIdx = Object.keys(newRecordProperties).length - 1;
        Object.keys(newRecordProperties).map((key, idx) => {
          const statement = `${key} = ?${idx < maxIdx ? "," : ""}`;
          updateQueryBuilder.push(statement, [newRecordProperties[key]]);
        });

        updateQueryBuilder.push(`WHERE ${primaryKey} = ?`, [
          newRecordProperties[primaryKey],
        ]);
        await connection.asyncQuery(...updateQueryBuilder.build());

        // erase old columns
        const columnsToErase = Object.keys(existingRecords[0]).filter(
          (k) =>
            (newRecordProperties[k] === null ||
              newRecordProperties[k] === undefined) &&
            oldRecordProperties[k] !== null &&
            oldRecordProperties[k] !== undefined
        );

        if (columnsToErase.length > 0) {
          const eraseQueryBuilder = new SQLiteQueryBuilder(
            `UPDATE "${table}" SET`
          )
            .push(columnsToErase.map((col) => `${col} = NULL`).join(", "))
            .push(`WHERE ${primaryKey} = ?`, [newRecordProperties[primaryKey]]);
          await connection.asyncQuery(...eraseQueryBuilder.build());
        }
      } else {
        // delete
        await connection.asyncQuery(
          ...SQLiteQueryBuilder.build(
            `DELETE FROM "${table}" WHERE ${primaryKey} = ?`,
            [newRecordProperties[primaryKey]]
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
    await connection.asyncQuery(
      ...SQLiteQueryBuilder.build(
        `DELETE FROM "${groupsTable}" WHERE ${groupForeignKey} = ?`,
        [newRecordProperties[primaryKey]]
      )
    );

    // add groups
    if (!toDelete) {
      for (const i in newGroups) {
        const data = {};
        data[groupForeignKey] = newRecordProperties[primaryKey];
        data[groupColumnName] = newGroups[i];

        const keys = buildKeyList(data);
        const values = toValuesArray(data);

        await connection.asyncQuery(
          ...SQLiteQueryBuilder.build(
            `INSERT INTO "${groupsTable}" (${keys}) VALUES ${toValuePlaceholders(
              values
            )} ON CONFLICT DO NOTHING`,
            values
          )
        );
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
  connection: SQLiteConnection,
  table: string,
  syncOperations: DestinationSyncOperations,
  newRecordProperties: Record<string, any>
) => {
  if (!syncOperations.create) {
    throw new Errors.InfoError(
      "Destination sync mode does not create new records."
    );
  }
  // insert
  const keys = buildKeyList(newRecordProperties);
  const values = toValuesArray(newRecordProperties);

  await connection.asyncQuery(
    ...SQLiteQueryBuilder.build(
      `INSERT INTO "${table}" (${keys}) VALUES ${toValuePlaceholders(values)}`,
      values
    )
  );
};
