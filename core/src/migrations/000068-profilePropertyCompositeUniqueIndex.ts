import { Op } from "sequelize";
import { config } from "actionhero";

export default {
  up: async function (migration, DataTypes) {
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
        `UPDATE "profileProperties" SET "unique"=true WHERE "propertyId" IN (${uniqueProperties
          .map((p) => `'${p.id}'`)
          .join(", ")})`
      );

      await migration.sequelize.query(
        `UPDATE "profileProperties" SET "unique"=false WHERE "propertyId" NOT IN (${uniqueProperties
          .map((p) => `'${p.id}'`)
          .join(", ")})`
      );
    } else {
      await migration.sequelize.query(
        `UPDATE "profileProperties" SET "unique"=false`
      );
    }

    await migration.changeColumn("profileProperties", "unique", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });

    await migration.addIndex(
      "profileProperties",
      ["propertyId", "rawValue", "position", "unique"],
      {
        unique: true,
        fields: ["propertyId", "rawValue", "position", "unique"],
        where: { unique: { [Op.eq]: true } },
      }
    );

    // All previous SQLite indexes had been removed (migration 000053), but we need to manually apply the per-profile position/value lock
    // We cannot use Sequelize to apply the second index as it clobbers the first (https://github.com/sequelize/sequelize/issues/12823)
    if (config.sequelize?.dialect === "sqlite") {
      await migration.sequelize.query(
        "CREATE UNIQUE INDEX `profile_properties_profile_guid_profile_property_rule_guid_posi` ON `profileProperties` (`profileId`, `propertyId`, `position`)"
      );
    }
  },

  down: async function (migration) {
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
  },
};
