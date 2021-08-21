import Sequelzie from "sequelize";

export default {
  up: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.addIndex("imports", ["startedAt"], {
      fields: ["startedAt"],
    });

    await queryInterface.addIndex("exports", ["startedAt"], {
      fields: ["startedAt"],
    });

    await queryInterface.addIndex("exportProcessors", ["startedAt"], {
      fields: ["startedAt"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeIndex("imports", ["startedAt"], {
      fields: ["startedAt"],
    });

    await queryInterface.removeIndex("exports", ["startedAt"], {
      fields: ["startedAt"],
    });

    await queryInterface.removeIndex("exportProcessors", ["startedAt"], {
      fields: ["startedAt"],
    });
  },
};
