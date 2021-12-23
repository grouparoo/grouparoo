module.exports = async function getConfig() {
  return [
    {
      id: "mod_profiles",
      class: "Model",
      name: "Profiles",
      type: "profile",
    },

    {
      id: "group_exists",
      name: "People that exist",
      class: "Group",
      modelId: "mod_profiles",
      rules: [
        {
          propertyId: "grouparooId",
          operation: { op: "exists" },
        },
      ],
    },

    {
      id: "group_recent",
      name: "People that have been recently added",
      class: "Group",
      modelId: "mod_profiles",
      rules: [
        {
          propertyId: "grouparooCreatedAt",
          operation: { op: "relative_gt" },
          relativeMatchNumber: "8",
          relativeMatchUnit: "days",
        },
      ],
    },
  ];
};
