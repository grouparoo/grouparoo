import { loadPath } from "../loadPath";
import RunFactory from "./run";

export default async (run?, props: { [key: string]: any } = {}, profileId?) => {
  const { Import } = await import(`@grouparoo/core/${loadPath}`);
  if (!run) run = await RunFactory();

  const instance = new Import({
    data: props,
    rawData: props,
    creatorType: "run",
    creatorId: run.id,
    profileId,
  });

  await instance.save();

  return instance;
};
