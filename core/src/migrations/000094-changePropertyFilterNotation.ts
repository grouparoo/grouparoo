import Sequelize from "sequelize";
import { FilterOpsDescriptions } from "../modules/filterOpsDictionary";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    for (const [op, description] of Object.entries(FilterOpsDescriptions)) {
      await queryInterface.sequelize.query(
        `UPDATE "filters" SET "op"='${op}' WHERE "op"='${description}'`
      );
    }
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    for (const [op, description] of Object.entries(FilterOpsDescriptions)) {
      await queryInterface.sequelize.query(
        `UPDATE "filters" SET "op"='${description}' WHERE "op"='${op}'`
      );
    }
  },
};
