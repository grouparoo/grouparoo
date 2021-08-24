import { loadPath } from "../loadPath";
import RunFactory from "./run";

export default async (run?, props: { [key: string]: any } = {}, recordId?) => {
  const { Import } = await import(`@grouparoo/core/${loadPath}`);
  if (!run) run = await RunFactory();

  const instance = new Import({
    data: props,
    rawData: props,
    creatorType: "run",
    creatorId: run.id,
    recordId,
  });

  await instance.save();

  return instance;
};
