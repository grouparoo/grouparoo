import Sequelzie from "sequelize";

export default {
  up: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.addIndex("profiles", ["state"], {
      fields: ["state"],
    });

    await queryInterface.addIndex("profileProperties", ["state"], {
      fields: ["state"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeIndex("profiles", ["state"], {
      fields: ["state"],
    });

    await queryInterface.removeIndex("profileProperties", ["state"], {
      fields: ["state"],
    });
  },
};
