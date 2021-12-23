import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("settings", "type", {
      type: DataTypes.STRING(191),
      defaultValue: "string",
      allowNull: false,
    });

    // If the defaultValue is a regexp number, we can assume a numeric field
    // There were no boolean type settings before this migration
    // https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
    const [settings]: [Record<string, any>[], unknown] =
      await queryInterface.sequelize.query(`select * from "settings"`);
    for (const i in settings) {
      const setting = settings[i];
      if (!isNaN(setting["defaultValue"])) {
        await queryInterface.sequelize.query(
          `update "settings" set type='number' where guid='${setting["guid"]}'`
        );
      }
    }
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("settings", "type");
  },
};
