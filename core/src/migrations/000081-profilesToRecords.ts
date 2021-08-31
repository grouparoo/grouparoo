import Sequelize, { Op } from "sequelize";
import { config } from "actionhero";

const renames: { [table: string]: [string, string][] } = {
  exports: [
    ["profileId", "recordId"],
    ["oldProfileProperties", "oldRecordProperties"],
    ["newProfileProperties", "newRecordProperties"],
  ],
  groupMembers: [["profileId", "recordId"]],
  groupRules: [["profileColumn", "recordColumn"]],
  imports: [
    ["profileId", "recordId"],
    ["oldProfileProperties", "oldRecordProperties"],
    ["newProfileProperties", "newRecordProperties"],
    ["profileAssociatedAt", "recordAssociatedAt"],
    ["profileUpdatedAt", "recordUpdatedAt"],
    ["createdProfile", "createdRecord"],
  ],
  profileProperties: [["profileId", "recordId"]],
  runs: [
    ["profilesCreated", "recordsCreated"],
    ["profilesImported", "recordsImported"],
  ],
  schedules: [["confirmProfiles", "confirmRecords"]],
};

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    if (config.sequelize?.dialect === "sqlite") {
      // All previous SQLite indexes had been removed (migration 000053), but we need to manually remove and re-add those special indexes for the recordProperties table.
      // Continued below at end of migration
      // See https://github.com/sequelize/sequelize/issues/12823
      await queryInterface.removeIndex(
        "profileProperties",
        ["profileId", "propertyId", "position"],
        {
          unique: true,
          fields: ["profileId", "propertyId", "position"],
        }
      );

      await queryInterface.removeIndex(
        "profileProperties",
        ["propertyId", "rawValue", "position", "unique"],
        {
          unique: true,
          fields: ["propertyId", "rawValue", "position", "unique"],
          where: { unique: { [Op.eq]: true } },
        }
      );
    }

    await queryInterface.createTable("models", {
      id: {
        type: DataTypes.STRING(191),
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("models", ["name"], {
      unique: true,
      fields: ["name"],
    });

    // Should be in an initializer
    //
    // await migration.sequelize.query(
    //   `INSERT INTO "entityTypes" ("id", "name", "type", "createdAt", "updatedAt") VALUES ('profiles', 'profiles', 'profile', NOW(), NOW()); `
    // );

    await queryInterface.renameTable("profiles", "records");

    await queryInterface.addColumn("records", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: true,
      defaultValue: "profile",
    });

    await queryInterface.changeColumn("records", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: null,
    });

    for (const [table, collection] of Object.entries(renames)) {
      for (const batch of collection) {
        const [oldName, newName] = batch;
        await queryInterface.renameColumn(table, oldName, newName);
      }
    }

    await queryInterface.renameTable("profileProperties", "recordProperties");

    if (config.sequelize?.dialect === "sqlite") {
      await queryInterface.addIndex(
        "recordProperties",
        ["propertyId", "rawValue", "position", "unique"],
        {
          unique: true,
          fields: ["propertyId", "rawValue", "position", "unique"],
          where: { unique: { [Op.eq]: true } },
        }
      );

      await queryInterface.addIndex(
        "recordProperties",
        ["recordId", "propertyId", "position"],
        {
          unique: true,
          fields: ["recordId", "propertyId", "position"],
        }
      );
    }
  },

  down: async function () {
    throw new Error("irreversible migration");
  },
};
