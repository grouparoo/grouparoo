import {
  App,
  SimpleAppOptions,
  Source,
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
  connection: any;
  app: App;
  appId: string;
  appOptions: SimpleAppOptions;
  source: Source;
  sourceId: string;
  schedule: Schedule;
  scheduleId: string;
  scheduleOptions: SimpleScheduleOptions;
};

export type GetPropertyOptionsMethodInputs = {
  connection: any;
  app: App;
  appId: string;
  appOptions: SimpleAppOptions;
  source: Source;
  sourceId: string;
  property: Property;
  propertyId: string;
  propertyOptions: SimplePropertyOptions;
};
