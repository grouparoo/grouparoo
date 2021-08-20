export default {
  up: async function (migration) {
    // -- Options ---

    await migration.removeIndex("options", ["ownerId", "key"], {
      unique: true,
      fields: ["ownerId", "key"],
    });
    // we need the old name of the key to find the index name
    await migration.removeIndex("options", ["ownerGuid", "key"], {
      unique: true,
      fields: ["ownerGuid", "key"],
    });

    await migration.addIndex("options", ["ownerId", "ownerType", "key"], {
      unique: true,
      fields: ["ownerId", "ownerType", "key"],
    });

    // -- Mappings ---

    await migration.removeIndex("mappings", ["ownerId", "propertyId"], {
      unique: true,
      fields: ["ownerId", "propertyId"],
    });

    // we need the old name of the key to find the index name
    await migration.removeIndex(
      "mappings",
      ["ownerGuid", "profilePropertyRuleGuid"],
      {
        unique: true,
        fields: ["ownerGuid", "profilePropertyRuleGuid"],
      }
    );

    await migration.removeIndex("mappings", ["ownerId", "remoteKey"], {
      unique: true,
      fields: ["ownerId", "remoteKey"],
    });

    // we need the old name of the key to find the index name
    await migration.removeIndex("mappings", ["ownerGuid", "remoteKey"], {
      unique: true,
      fields: ["ownerGuid", "remoteKey"],
    });

    await migration.addIndex(
      "mappings",
      ["ownerId", "ownerType", "propertyId"],
      {
        unique: true,
        fields: ["ownerId", "ownerType", "propertyId"],
      }
    );

    await migration.addIndex(
      "mappings",
      ["ownerId", "ownerType", "remoteKey"],
      {
        unique: true,
        fields: ["ownerId", "ownerType", "remoteKey"],
      }
    );
  },

  down: async function (migration) {
    await migration.removeIndex("options", ["ownerId", "ownerType", "key"], {
      unique: true,
      fields: ["ownerId", "ownerType", "key"],
    });

    await migration.addIndex("options", ["ownerId", "key"], {
      unique: true,
      fields: ["ownerId", "key"],
    });

    await migration.addIndex("mappings", ["ownerId", "propertyId"], {
      unique: true,
      fields: ["ownerId", "propertyId"],
    });

    await migration.addIndex("mappings", ["ownerId", "remoteKey"], {
      unique: true,
      fields: ["ownerId", "remoteKey"],
    });
  },
};
