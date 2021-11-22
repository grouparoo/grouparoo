import React from "react";
import { Models } from "./apiData";

export const formatName = (
  grouparooObj?:
    | Models.AppType
    | Models.SourceType
    | Models.DestinationType
    | Models.ScheduleType
    | Models.GroupType
): React.ReactNode => {
  return (
    <>
      {grouparooObj
        ? grouparooObj.name ||
          `${grouparooObj.state} created on ${
            new Date(grouparooObj.createdAt).toLocaleString().split(",")[0]
          }`
        : "Unknown"}
    </>
  );
};
