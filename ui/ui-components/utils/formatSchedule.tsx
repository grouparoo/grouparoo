import React from "react";
import { Models } from "./apiData";

export const formatSchedule = (
  schedule?: Models.ScheduleType
): React.ReactNode => {
  if (!schedule) {
    return "None";
  }

  const recurringFrequencyMinutes = schedule.recurringFrequency
    ? schedule.recurringFrequency / (60 * 1000)
    : undefined;

  return recurringFrequencyMinutes
    ? `Every ${recurringFrequencyMinutes} minutes`
    : "Not recurring";
};
