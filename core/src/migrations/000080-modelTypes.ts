const DEFAULT_ENTITY_ID = "profile";

const renames: { [tableName: string]: [old: string, new: string][] } = {
  exports: [
    ["oldProfileProperties", "oldModelProperties"],
    ["newProfileProperties", "newModelProperties"],
  ],
  groupMembers: [["profileId", "modelId"]],
  imports: [
    ["profileId", "modelId"],
    ["oldProfileProperties", "oldModelProperties"],
    ["newProfileProperties", "newModelProperties"],
    ["profileAssociatedAt", "modelAssociatedAt"],
    ["profileUpdatedAt", "modelUpdatedAt"],
    ["createdProfile", "createdModel"],
  ],
  profileProperties: [["profileId", "modelId"]],
  runs: [
    ["importsCreated", "modelsCreated"],
    ["profilesCreated", "modelsCreated"],
    ["profilesImported", "modelsImported"],
  ],
};

export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("entityTypes", {
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

      await migration.addIndex("entityTypes", ["name"], {
        unique: true,
        fields: ["name"],
      });

      // Should be in an initializer
      //
      // await migration.sequelize.query(
      //   `INSERT INTO "entityTypes" ("id", "name", "type", "createdAt", "updatedAt") VALUES ('profiles', 'profiles', 'profile', NOW(), NOW()); `
      // );

      await migration.renameTable("profiles", "models");

      await migration.addColumn("models", "entityTypeId", {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: DEFAULT_ENTITY_ID,
      });
      await migration.addColumn("models", "entityTypeId", {
        type: DataTypes.STRING(191),
        allowNull: false,
      });

      for (const [table, collection] of Object.entries(renames)) {
        await migration.renameColumn(table, collection[0], collection[1]);
      }

      await migration.renameTable("profileProperties", "modelProperties");
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {});
  },
};
