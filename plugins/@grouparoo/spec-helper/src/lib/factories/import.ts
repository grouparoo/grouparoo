import { loadPath } from "../loadPath";
import RunFactory from "./run";
import { Import } from "@grouparoo/core";

export default async (run?, props: { [key: string]: any } = {}, recordId?) => {
  const { Import } = await import(`@grouparoo/core/${loadPath}`);
  if (!run) run = await RunFactory();

  const instance = new Import({
    data: props,
    rawData: props,
    creatorType: "run",
    creatorId: run.id,
    recordId,
  }) as Import;

  await instance.save();

  return instance;
};
