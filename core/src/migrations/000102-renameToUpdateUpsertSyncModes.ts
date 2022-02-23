import Sequelize from "sequelize";

const updateSyncMode = (
  queryInterface: Sequelize.QueryInterface,
  prevSyncMode: string,
  nextSyncMode: string
) =>
  queryInterface.bulkUpdate(
    "destinations",
    {
      syncMode: nextSyncMode,
    },
    {
      syncMode: prevSyncMode,
    }
  );

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await updateSyncMode(queryInterface, "additive", "upsert");
    await updateSyncMode(queryInterface, "enrich", "update");
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await updateSyncMode(queryInterface, "upsert", "additive");
    await updateSyncMode(queryInterface, "update", "enrich");
  },
};
