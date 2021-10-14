import Sequelize from "sequelize";

// Note: In some future world this import might break.  We no longer need to use this after a few months from when this migration is deployed in Grouparoo v0.7
import { getConfigDir } from "../modules/pluginDetails";
import { loadConfigObjects } from "../modules/configLoaders";
import { ModelConfigurationObject } from "../classes/codeConfig";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    const [counts] = await queryInterface.sequelize.query(
      `SELECT COUNT(*) as c FROM "records"`
    );
    const countRecords = parseInt(counts[0]["c"]);

    let codeConfigInUse = false;
    const [sources] = await queryInterface.sequelize.query(
      `SELECT COUNT(*) as c FROM "sources" WHERE "locked" IS NOT NULL`
    );
    const [destinations] = await queryInterface.sequelize.query(
      `SELECT COUNT(*) as c FROM "destinations" WHERE "locked" IS NOT NULL`
    );
    if (parseInt(sources[0]["c"]) > 0 || parseInt(destinations[0]["c"]) > 0) {
      codeConfigInUse = true;
    }

    let default_model = {
      id: "mod_profiles",
      name: "Profiles",
      type: "profile",
    };

    if (countRecords === 0) {
      // OK, we don't have any records we need to worry about updating
    } else if (codeConfigInUse === true) {
      const configDir = await getConfigDir();
      const configObjects = await loadConfigObjects(configDir);
      const modelConfigObjects = configObjects.filter(
        (o) => o.class === "Model"
      ) as Required<ModelConfigurationObject>[];

      if (modelConfigObjects.length === 0) {
        throw new Error("Make a single Model config file");
      } else if (modelConfigObjects.length > 1) {
        throw new Error(
          "To migrate existing records, deploy this migration with just one Model"
        );
      }
      // Use the model file to migrate all the existing records, but do not create the model (code config will handle that later)
      default_model = modelConfigObjects[0];
    } else {
      // Not using Code Config - Create the default Model
      await queryInterface.sequelize.query(`
INSERT INTO "models" ("id", "name", "type", "createdAt", "updatedAt")
VALUES ('${default_model.id}', '${default_model.name}', '${default_model.type}', NOW(), NOW())
      `);
    }

    await queryInterface.addColumn("models", "locked", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await queryInterface.addColumn("records", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model.id,
      allowNull: true,
    });

    await queryInterface.changeColumn("records", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addColumn("sources", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model.id,
      allowNull: true,
    });

    await queryInterface.changeColumn("sources", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addColumn("groups", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model.id,
      allowNull: true,
    });

    await queryInterface.changeColumn("groups", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.addColumn("destinations", "modelId", {
      type: DataTypes.STRING(191),
      defaultValue: default_model.id,
      allowNull: true,
    });

    await queryInterface.changeColumn("destinations", "modelId", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("models", "locked");
    await queryInterface.removeColumn("records", "modelId");
    await queryInterface.removeColumn("sources", "modelId");
    await queryInterface.removeColumn("groups", "modelId");
    await queryInterface.removeColumn("destinations", "modelId");
  },
};
