import Sequelzie from "sequelize";

export default {
  up: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.addIndex("imports", ["createdProfile"], {
      fields: ["createdProfile"],
    });

    await queryInterface.addIndex("imports", ["exportedAt"], {
      fields: ["exportedAt"],
    });

    await queryInterface.addIndex("profileProperties", ["rawValue"], {
      fields: ["rawValue"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeIndex("imports", ["createdProfile"], {
      fields: ["createdProfile"],
    });

    await queryInterface.removeIndex("imports", ["exportedAt"], {
      fields: ["exportedAt"],
    });

    await queryInterface.removeIndex("profileProperties", ["rawValue"], {
      fields: ["rawValue"],
    });
  },
};
