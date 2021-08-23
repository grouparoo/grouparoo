import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.addIndex(
      "profileProperties",
      ["propertyId", "rawValue"],
      {
        fields: ["propertyId", "rawValue"],
      }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeIndex(
      "profileProperties",
      ["propertyId", "rawValue"],
      {
        fields: ["propertyId", "rawValue"],
      }
    );
  },
};
