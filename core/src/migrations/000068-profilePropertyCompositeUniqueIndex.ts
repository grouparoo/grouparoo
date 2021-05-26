import { Op } from "sequelize";

export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("profileProperties", "unique", {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      });

      const [properties] = await migration.sequelize.query(
        "SELECT * FROM \"properties\" WHERE state = 'ready'"
      );
      const uniqueProperties = properties.filter(
        (p) => p.unique === 1 || p.unique === "1" || p.unique === true
      );

      if (uniqueProperties.length > 0) {
        await migration.sequelize.query(
          `UPDATE "profileProperties" SET "unique"='${
            uniqueProperties[0].unique
          }' WHERE "propertyId" IN (${uniqueProperties
            .map((p) => `'${p.id}'`)
            .join(", ")})`
        );
      }

      await migration.addIndex(
        "profileProperties",
        ["propertyId", "rawValue", "position", "unique"],
        {
          unique: true,
          fields: ["propertyId", "rawValue", "position", "unique"],
          where: { unique: { [Op.eq]: true } },
        }
      );
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeIndex(
        "profileProperties",
        ["propertyId", "rawValue", "position", "unique"],
        {
          unique: true,
          fields: ["propertyId", "rawValue", "position", "unique"],
          where: { unique: { [Op.eq]: true } },
        }
      );

      await migration.removeColumn("profileProperties", "unique");
    });
  },
};
