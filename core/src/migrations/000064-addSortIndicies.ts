import Sequelzie from "sequelize";

export default {
  up: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.addIndex("profiles", ["createdAt"], {
      fields: ["createdAt"],
    });

    await queryInterface.addIndex("runs", ["updatedAt"], {
      fields: ["updatedAt"],
    });

    await queryInterface.addIndex("imports", ["createdAt"], {
      fields: ["createdAt"],
    });

    await queryInterface.addIndex("exports", ["createdAt"], {
      fields: ["createdAt"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeIndex("profiles", ["createdAt"], {
      fields: ["createdAt"],
    });

    await queryInterface.removeIndex("runs", ["updatedAt"], {
      fields: ["updatedAt"],
    });

    await queryInterface.removeIndex("imports", ["createdAt"], {
      fields: ["createdAt"],
    });

    await queryInterface.removeIndex("exports", ["createdAt"], {
      fields: ["createdAt"],
    });
  },
};
