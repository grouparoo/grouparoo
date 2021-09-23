import { loadPath } from "../loadPath";
import DestinationFactory from "./destination";
import { ExportProcessor } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    state: "pending",
    remoteKey: "external-id",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (destination?, props: { [key: string]: any } = {}) => {
  const { ExportProcessor } = await import(`@grouparoo/core/${loadPath}`);
  if (!destination) destination = await DestinationFactory();

  props.destinationId = destination.id;

  const mergedProps = await data(props);
  const instance = new ExportProcessor(mergedProps) as ExportProcessor;
  await instance.save();

  return instance;
};
