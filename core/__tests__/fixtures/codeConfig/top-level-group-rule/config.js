module.exports = async function getConfig() {
  return [
    {
      id: "group_exists",
      name: "People that exist",
      class: "Group",
      type: "calculated",
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
      type: "calculated",
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
