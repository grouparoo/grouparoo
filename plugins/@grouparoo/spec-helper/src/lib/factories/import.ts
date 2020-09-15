import { Import } from "@grouparoo/core/api/src";
import RunFactory from "./run";

export default async (run?, props: { [key: string]: any } = {}) => {
  if (!run) {
    run = await RunFactory();
  }

  const instance = new Import({
    data: props,
    rawData: props,
    creatorType: "run",
    creatorGuid: run.guid,
  });

  await instance.save();

  return instance;
};
