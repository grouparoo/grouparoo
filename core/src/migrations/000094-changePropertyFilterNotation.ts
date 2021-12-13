import Sequelize from "sequelize";
import { filterOpsDescriptions } from "../modules/filterOpsDictionary";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    for (const op in filterOpsDescriptions) {
      await queryInterface.sequelize.query(
        `UPDATE "filters" SET "op"='${op}' WHERE "op"='${filterOpsDescriptions[op]}'`
      );
    }
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    for (const op in filterOpsDescriptions) {
      await queryInterface.sequelize.query(
        `UPDATE "filters" SET "op"='${filterOpsDescriptions[op]}' WHERE "op"='${op}'`
      );
    }
  },
};
