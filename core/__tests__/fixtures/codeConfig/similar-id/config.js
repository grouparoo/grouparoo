module.exports = async function getConfig() {
  return [
    {
      id: "mailchimp",
      name: "Mailchimp App",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "test-file-path.db",
      },
    },

    {
      id: "mailchimp", // duplicate ID
      name: "Mailchimp Destination",
      class: "Destination",
      type: "test-plugin-export",
      appId: "mailchimp",
      syncMode: "sync",
      options: {
        table: "other-file-path.db",
      },
    },
  ];
};
