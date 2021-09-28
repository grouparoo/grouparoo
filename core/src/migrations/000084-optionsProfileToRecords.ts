import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='membershipRecordField' WHERE "key"='membershipProfileField'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='recordMatchField' WHERE "key"='profileMatchField'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='recordObject' WHERE "key"='profileObject'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='recordReferenceField' WHERE "key"='profileReferenceField'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='recordReferenceMatchField' WHERE "key"='profileReferenceMatchField'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='recordReferenceObject' WHERE "key"='profileReferenceObject'`
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='membershipProfileField' WHERE "key"='membershipRecordField'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='profileMatchField' WHERE "key"='recordMatchField'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='profileObject' WHERE "key"='recordObject'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='profileReferenceField' WHERE "key"='recordReferenceField'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='profileReferenceMatchField' WHERE "key"='recordReferenceMatchField'`
    );
    await queryInterface.sequelize.query(
      `UPDATE "config" SET "key"='profileReferenceObject' WHERE "key"='recordReferenceObject'`
    );
  },
};
