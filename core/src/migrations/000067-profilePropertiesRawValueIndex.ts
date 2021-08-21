import Sequelzie from "sequelize";

export default {
  up: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.addIndex(
      "profileProperties",
      ["propertyId", "rawValue"],
      {
        fields: ["propertyId", "rawValue"],
      }
    );
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeIndex(
      "profileProperties",
      ["propertyId", "rawValue"],
      {
        fields: ["propertyId", "rawValue"],
      }
    );
  },
};
