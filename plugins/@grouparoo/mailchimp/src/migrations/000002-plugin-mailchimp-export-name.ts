import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Update Plugin Names
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "mailchimp-export-contacts" },
      { type: "mailchimp-export" }
    );
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "mailchimp-export-contacts-by-id" },
      { type: "mailchimp-export-id" }
    );
    await queryInterface.bulkUpdate(
      "sources",
      { type: "mailchimp-import-contacts" },
      { type: "mailchimp-import" }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "mailchimp-export" },
      { type: "mailchimp-export-list-members" }
    );
    await queryInterface.bulkUpdate(
      "destinations",
      { type: "mailchimp-export-id" },
      { type: "mailchimp-export-list-members-by-id" }
    );
    await queryInterface.bulkUpdate(
      "sources",
      { type: "mailchimp-import" },
      { type: "mailchimp-import-contacts" }
    );
  },
};
