exports.default = async function buildConfig() {
  return [
    {
      id: "view-only-team", // id -> `admin_team`
      name: "View Only Team",
      class: "team",
      options: {
        permissionAllRead: true,
        permissionAllWrite: false,
      },
    },

    {
      class: "apiKey",
      id: "test-key",
      name: "test-key",
      apiKey: "abc123",
      options: {
        permissionAllRead: null,
        permissionAllWrite: null,
      },
      permissions: [{ topic: "app", read: true, write: true }],
    },
  ];
};
