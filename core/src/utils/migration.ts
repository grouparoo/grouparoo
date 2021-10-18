import Sequelize from "sequelize";

export namespace MigrationUtils {
  export function getDialect(queryInterface: Sequelize.QueryInterface) {
    const dialect: Sequelize.Dialect =
      queryInterface.sequelize["options"].dialect;
    return dialect;
  }

  export async function countRows(
    queryInterface: Sequelize.QueryInterface,
    table: string
  ) {
    const [rows] = await queryInterface.sequelize.query(
      `SELECT COUNT(*) as c FROM "${table}"`
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
        `[ migration ] Cannot proceed with migration - table ${table} is not empty.  Please remove your SQLite database at ${queryInterface.sequelize["options"].storage} and retry the migration.  See https://www.grouparoo.com/docs/support/upgrading-grouparoo/v06-v07 for more information.`
      );
  }
}
