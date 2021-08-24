import Sequelize from "sequelize";

const renames: { [table: string]: [string, string][] } = {
  exports: [
    ["oldProfileProperties", "oldRecordProperties"],
    ["newProfileProperties", "newRecordProperties"],
  ],
  groupMembers: [["profileId", "recordId"]],
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
};

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
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
  },

  down: async function () {
    throw new Error("irreversible migration");
  },
};
