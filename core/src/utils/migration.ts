import Sequelize from "sequelize";

export namespace MigrationUtils {
  export function getOption(
    queryInterface: Sequelize.QueryInterface,
    q: string
  ) {
    // @ts-ignore
    return queryInterface.sequelize["options"][q];
  }

  export function getDialect(queryInterface: Sequelize.QueryInterface) {
    const dialect: Sequelize.Dialect = getOption(queryInterface, "dialect");
    return dialect;
  }

  export async function countRows(
    queryInterface: Sequelize.QueryInterface,
    table: string,
    whereClause?: string
  ) {
    const [rows]: [Record<string, any>, unknown] =
      await queryInterface.sequelize.query(
        `SELECT COUNT(*) as c FROM "${table}" ${
          whereClause ? `WHERE ${whereClause}` : ""
        }`
      );
    return parseInt(rows[0]["c"]);
  }

  export async function ensureSQLiteTableEmpty(
    queryInterface: Sequelize.QueryInterface,
    table: string
  ) {
    if (getDialect(queryInterface) !== "sqlite") return;
    const count = await countRows(queryInterface, table);
    if (count > 0)
      throw new Error(
        `[ migration ] Cannot proceed with migration - table ${table} is not empty.  Please remove your SQLite database at ${getOption(
          queryInterface,
          "storage"
        )} and retry the migration.  See https://github.com/grouparoo/grouparoo/discussions/2428 for more information.`
      );
  }
}
