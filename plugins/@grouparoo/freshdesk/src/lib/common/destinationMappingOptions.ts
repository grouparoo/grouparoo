import { DestinationMappingOptionsResponseType } from "@grouparoo/core";

export interface KnownFreshdeskField {
  key: string;
  freshdeskKey: string;
  type: DestinationMappingOptionsResponseType;
  required?: boolean;
  important?: boolean;
  toArray?: boolean;
}
