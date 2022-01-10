import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("profileProperties", "unique", {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    });

    const [properties]: [Record<string, any>[], unknown] =
      await queryInterface.sequelize.query(
        "SELECT * FROM \"properties\" WHERE state = 'ready'"
      );
    const uniqueProperties = properties.filter(
      (p) => p["unique"] === 1 || p["unique"] === "1" || p["unique"] === true
    );

    if (uniqueProperties.length > 0) {
      await queryInterface.sequelize.query(
        `UPDATE "profileProperties" SET "unique"=true WHERE "propertyId" IN (${uniqueProperties
          .map((p) => `'${p["id"]}'`)
          .join(", ")})`
      );

      await queryInterface.sequelize.query(
        `UPDATE "profileProperties" SET "unique"=false WHERE "propertyId" NOT IN (${uniqueProperties
          .map((p) => `'${p["id"]}'`)
          .join(", ")})`
      );
    } else {
      await queryInterface.sequelize.query(
        `UPDATE "profileProperties" SET "unique"=false`
      );
    }

    await queryInterface.changeColumn("profileProperties", "unique", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });

    await queryInterface.addIndex(
      "profileProperties",
      ["propertyId", "rawValue", "position", "unique"],
      {
        unique: true,
        fields: ["propertyId", "rawValue", "position", "unique"],
        where: { unique: true },
      }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeIndex(
      "profileProperties",
      ["propertyId", "rawValue", "position", "unique"],
      {
        unique: true,
        fields: ["propertyId", "rawValue", "position", "unique"],
        where: { unique: true },
      }
    );

    await queryInterface.removeColumn("profileProperties", "unique");
  },
};
