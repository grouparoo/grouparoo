import { connect } from "../connect";
import { ExportProfilePluginMethod } from "@grouparoo/core";
import { validateQuery } from "../validateQuery";
import format from "pg-format";

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  destination,
  newProfileProperties,
  newGroups,
  toDelete,
}) => {
  let success = false;
  let error: Error;

  const client = await connect(appOptions);
  const {
    table,
    primaryKey,
    groupsTable,
    groupForeignKey,
    groupColumnName,
  } = await destination.parameterizedOptions();

  if (Object.keys(newProfileProperties).length === 0) {
    await client.end();
    return false;
  }

  if (!newProfileProperties[primaryKey]) {
    await client.end();
    throw new Error(
      `newProfileProperties[primaryKey] (${primaryKey}) is a required mapping`
    );
  }

  try {
    // --- Profiles --- //
    if (toDelete) {
      // delete
      await client.query(
        validateQuery(
          format(
            `DELETE FROM %I WHERE %I = %L`,
            table,
            primaryKey,
            newProfileProperties[primaryKey]
          )
        )
      );
    } else if (newProfileProperties[primaryKey]) {
      const existingRecords = await client.query(
        validateQuery(
          format(
            `SELECT * FROM %I WHERE %I = %L`,
            table,
            primaryKey,
            newProfileProperties[primaryKey]
          )
        )
      );

      if (existingRecords.rows.length === 1) {
        // update
        let updateStatement = `UPDATE %I SET`;
        const updateVariables = [table];
        const length = Object.keys(newProfileProperties).length - 1;
        let idx = 0;
        for (const key in newProfileProperties) {
          updateStatement += ` %I = %L${idx < length ? "," : ""} `;
          updateVariables.push(key);
          updateVariables.push(newProfileProperties[key]);
          idx++;
        }
        updateStatement += ` WHERE %I = %L`;
        updateVariables.push(primaryKey);
        updateVariables.push(newProfileProperties[primaryKey]);
        updateStatement = format(updateStatement, ...updateVariables);
        await client.query(validateQuery(updateStatement));

        // erase old columns
        const columnsToErase = Object.keys(existingRecords.rows[0]).filter(
          (k) =>
            newProfileProperties[k] === null ||
            newProfileProperties[k] === undefined
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
          eraseVariables.push(newProfileProperties[primaryKey]);
          eraseStatement = format(eraseStatement, ...eraseVariables);
          await client.query(validateQuery(eraseStatement));
        }
      } else {
        // delete
        await client.query(
          validateQuery(
            format(
              `DELETE FROM %I WHERE %I = %L`,
              table,
              primaryKey,
              newProfileProperties[primaryKey]
            )
          )
        );

        // insert
        await client.query(
          validateQuery(
            format(
              `INSERT INTO %I (%I) VALUES (%L)`,
              table,
              Object.keys(newProfileProperties),
              Object.values(newProfileProperties)
            )
          )
        );
      }
    } else {
      // just insert
      await client.query(
        validateQuery(
          format(
            `INSERT INTO %I (%I) VALUES (%L)`,
            table,
            Object.keys(newProfileProperties),
            Object.values(newProfileProperties)
          )
        )
      );
    }

    // --- Groups --- //

    // delete existing groups
    await client.query(
      validateQuery(
        format(
          `DELETE FROM %I WHERE %I = %L`,
          groupsTable,
          groupForeignKey,
          newProfileProperties[primaryKey]
        )
      )
    );

    // add groups
    if (!toDelete) {
      for (const i in newGroups) {
        const data = {};
        data[groupForeignKey] = newProfileProperties[primaryKey];
        data[groupColumnName] = newGroups[i];
        await client.query(
          validateQuery(
            format(
              `INSERT INTO %I (%I) VALUES (%L)`,
              groupsTable,
              Object.keys(data),
              Object.values(data)
            )
          )
        );
      }
    }

    success = true;
  } catch (e) {
    error = e;
  } finally {
    await client.end();
    if (error) {
      throw error;
    }

    return success;
  }
};
