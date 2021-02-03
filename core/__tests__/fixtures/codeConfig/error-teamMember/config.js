module.exports = async function getConfig() {
  return [
    {
      id: "admin_team", // id -> `tea_admin_team`
      name: "Admin Team",
      class: "team",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
      },
    },

    {
      id: "demo", // id -> `tea_person`
      email: "demo@grouparoo.com",
      teamId: "admin_team", // id -> `tea_marketing_team`
      class: "teamMember",
    },
  ];
};
