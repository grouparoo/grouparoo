import React from "react";
import { Models } from "./apiData";

export const formatName = (
  entity?:
    | Models.AppType
    | Models.SourceType
    | Models.DestinationType
    | Models.ScheduleType
    | Models.GroupType
): React.ReactNode => {
  return (
    <>
      {entity
        ? entity.name ||
          `${entity.state} created on ${
            new Date(entity.createdAt).toLocaleString().split(",")[0]
          }`
        : "Unknown"}
    </>
  );
};
