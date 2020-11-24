module.exports = async function getConfig() {
  return [
    {
      id: "admin_team", // guid -> `tea_admin_team`
      name: "Admin Team",
      class: "team",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
      },
    },

    {
      id: "demo", // guid -> `tea_person`
      email: "demo@grouparoo.com",
      teamId: "admin_team", // guid -> `tea_marketing_team`
      class: "teamMember",
    },
  ];
};
