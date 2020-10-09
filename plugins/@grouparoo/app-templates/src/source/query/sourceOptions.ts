import { SourceOptionsMethod } from "@grouparoo/core";

export interface GetSourceOptionsMethod {
  (): SourceOptionsMethod;
}

export const getSourceOptions: GetSourceOptionsMethod = () => {
  const sourceOptions: SourceOptionsMethod = async () => {
    return {}; // no options at the source level
  };
  return sourceOptions;
};
