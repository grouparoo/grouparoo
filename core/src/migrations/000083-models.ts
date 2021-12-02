import Sequelize from "sequelize";
import { MigrationUtils } from "../utils/migration";

// Note: In some future world this import might break.  We no longer need to use this after a few months from when this migration is deployed in Grouparoo v0.7
import { getConfigDir } from "../modules/pluginDetails";
import { loadConfigObjects } from "../modules/configLoaders";
import { ModelConfigurationObject } from "../classes/codeConfig";
import * as uuid from "uuid";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    let codeConfigInUse = false;
    if (
      (await MigrationUtils.countRows(
        queryInterface,
        "sources",
        `"locked" = 'config:code'`
      )) > 0 ||
      (await MigrationUtils.countRows(
        queryInterface,
        "destinations",
        `"locked" = 'config:code'`
      )) > 0
    ) {
      codeConfigInUse = true;
    }

    let default_model = {
      id: `mod_${uuid.v4()}`,
      name: "Profiles",
      type: "profile",
    };

    const countRecords = await MigrationUtils.countRows(
      queryInterface,
      "records"
    );

    if (countRecords === 0) {
      // OK, we don't have any records we need to worry about updating
    } else if (codeConfigInUse === true) {
      const configDir = await getConfigDir();
      const { configObjects, errors } = await loadConfigObjects(configDir);
      if (errors.length > 0) throw new Error(errors.join("; "));
      const modelConfigObjects = configObjects.filter(
        (o) => o.class === "Model"
      ) as Required<ModelConfigurationObject>[];

      if (modelConfigObjects.length === 0) {
        throw new Error(
          "There are no Models configured. When first upgrading to v0.7, Grouparoo requires a single Model to be created to define where existing Records should be migrated. See https://www.grouparoo.com/docs/support/upgrading-grouparoo/v06-v07 for more information."
        );
      } else if (modelConfigObjects.length > 1) {
        throw new Error(
          "There is more than one Model configured. When first upgrading to v0.7, Grouparoo requires a single Model to be created to define where existing Records should be migrated. More Models can then be created after that. See https://www.grouparoo.com/docs/support/upgrading-grouparoo/v06-v07 for more information."
        );
      }
      // Use the model file to migrate all the existing records, but do not create the model (code config will handle that later)
      default_model = modelConfigObjects[0];
      if (!default_model.id)
        throw new Error(
          `Model does not have an id (${JSON.stringify(default_model)})`
        );
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
