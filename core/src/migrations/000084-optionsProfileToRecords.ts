import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    const [options] = await queryInterface.sequelize.query(
      `SELECT o."id" as id, "key" FROM "options" o JOIN "destinations" d ON o."ownerId"=d."id" WHERE d."type"='salesforce-objects-export'`
    );
    const legacyOptionsKeys = [
      "profileObject",
      "profileMatchField",
      "membershipProfileField",
      "profileReferenceField",
      "profileReferenceObject",
      "profileReferenceMatchField",
    ];
    for (const opt of options) {
      let newKey: string;
      if (legacyOptionsKeys.includes(opt["key"])) {
        newKey = opt["key"]
          .replace("profile", "record")
          .replace("Profile", "Record");
        await queryInterface.sequelize.query(
          `UPDATE "options" SET "key"=? WHERE "id"=?`,
          {
            replacements: [newKey, opt["id"]],
          }
        );
      }
    }
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    const [options] = await queryInterface.sequelize.query(
      `SELECT o."id" as id, "key" FROM "options" o JOIN "destinations" d ON o."ownerId"=d."id" WHERE d."type"='salesforce-objects-export'`
    );
    const newOptionsKeys = [
      "recordObject",
      "recordMatchField",
      "membershipRecordField",
      "recordReferenceField",
      "recordReferenceObject",
      "recordReferenceMatchField",
    ];
    for (const opt of options) {
      let newKey: string;
      if (newOptionsKeys.includes(opt["key"])) {
        newKey = opt["key"]
          .replace("record", "profile")
          .replace("Record", "Profile");
        await queryInterface.sequelize.query(
          `UPDATE "options" SET "key"=? WHERE "id"=?`,
          {
            replacements: [newKey, opt["id"]],
          }
        );
      }
    }
  },
};
