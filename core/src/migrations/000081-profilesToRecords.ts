import Sequelize from "sequelize";

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

    await queryInterface.renameTable("profiles", "records");

    for (const [table, collection] of Object.entries(renames)) {
      for (const batch of collection) {
        const [oldName, newName] = batch;
        console.log(
          `ALTER TABLE "${table}" RENAME COLUMN "${oldName}" TO "${newName}";`
        );
        await queryInterface.sequelize.query(
          `ALTER TABLE "${table}" RENAME COLUMN "${oldName}" TO "${newName}";`
        );
      }
    }

    await queryInterface.renameTable("profileProperties", "recordProperties");

    await queryInterface.sequelize.query(
      `UPDATE "logs" SET "topic"='grouparooRecord' WHERE "topic"='profile'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "logs" SET "topic"='recordProperty' WHERE "topic"='profileProperty'`
    );
  },

  down: async function () {
    throw new Error("irreversible migration");
  },
};
