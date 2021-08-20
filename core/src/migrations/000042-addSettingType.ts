export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("settings", "type", {
      type: DataTypes.STRING(191),
      defaultValue: "string",
      allowNull: false,
    });

    // If the defaultValue is a regexp number, we can assume a numeric field
    // There were no boolean type settings before this migration
    // https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
    const [settings] = await migration.sequelize.query(
      `select * from "settings"`
    );
    for (const i in settings) {
      const setting = settings[i];
      if (!isNaN(setting.defaultValue)) {
        await migration.sequelize.query(
          `update "settings" set type='number' where guid='${setting.guid}'`
        );
      }
    }
  },

  down: async function (migration) {
    await migration.removeColumn("settings", "type");
  },
};
