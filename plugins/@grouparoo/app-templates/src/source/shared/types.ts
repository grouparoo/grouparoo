import {
  Schedule,
  SimpleScheduleOptions,
  Property,
  SimplePropertyOptions,
} from "@grouparoo/core";

export type DataResponse = string | number | boolean | Date;

export interface DataResponseRow {
  [column: string]: DataResponse;
}

export type GetScheduleOptionsMethodInputs = {
  schedule: Schedule;
  scheduleId: string;
  scheduleOptions: SimpleScheduleOptions;
};

export type GetPropertyOptionsMethodInputs = {
  property: Property;
  propertyId: string;
  propertyOptions: SimplePropertyOptions;
};
