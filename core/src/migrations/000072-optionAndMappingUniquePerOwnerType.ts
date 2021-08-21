import Sequelzie from "sequelize";

export default {
  up: async (queryInterface: Sequelzie.QueryInterface) => {
    // -- Options ---

    await queryInterface.removeIndex("options", ["ownerId", "key"], {
      unique: true,
      fields: ["ownerId", "key"],
    });
    // we need the old name of the key to find the index name
    await queryInterface.removeIndex("options", ["ownerGuid", "key"], {
      unique: true,
      fields: ["ownerGuid", "key"],
    });

    await queryInterface.addIndex("options", ["ownerId", "ownerType", "key"], {
      unique: true,
      fields: ["ownerId", "ownerType", "key"],
    });

    // -- Mappings ---

    await queryInterface.removeIndex("mappings", ["ownerId", "propertyId"], {
      unique: true,
      fields: ["ownerId", "propertyId"],
    });

    // we need the old name of the key to find the index name
    await queryInterface.removeIndex(
      "mappings",
      ["ownerGuid", "profilePropertyRuleGuid"],
      {
        unique: true,
        fields: ["ownerGuid", "profilePropertyRuleGuid"],
      }
    );

    await queryInterface.removeIndex("mappings", ["ownerId", "remoteKey"], {
      unique: true,
      fields: ["ownerId", "remoteKey"],
    });

    // we need the old name of the key to find the index name
    await queryInterface.removeIndex("mappings", ["ownerGuid", "remoteKey"], {
      unique: true,
      fields: ["ownerGuid", "remoteKey"],
    });

    await queryInterface.addIndex(
      "mappings",
      ["ownerId", "ownerType", "propertyId"],
      {
        unique: true,
        fields: ["ownerId", "ownerType", "propertyId"],
      }
    );

    await queryInterface.addIndex(
      "mappings",
      ["ownerId", "ownerType", "remoteKey"],
      {
        unique: true,
        fields: ["ownerId", "ownerType", "remoteKey"],
      }
    );
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeIndex(
      "options",
      ["ownerId", "ownerType", "key"],
      {
        unique: true,
        fields: ["ownerId", "ownerType", "key"],
      }
    );

    await queryInterface.addIndex("options", ["ownerId", "key"], {
      unique: true,
      fields: ["ownerId", "key"],
    });

    await queryInterface.addIndex("mappings", ["ownerId", "propertyId"], {
      unique: true,
      fields: ["ownerId", "propertyId"],
    });

    await queryInterface.addIndex("mappings", ["ownerId", "remoteKey"], {
      unique: true,
      fields: ["ownerId", "remoteKey"],
    });
  },
};
