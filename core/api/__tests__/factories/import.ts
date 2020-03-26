import { Import } from "./../../src/models/Import";
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
