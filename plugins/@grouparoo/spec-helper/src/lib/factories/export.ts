import { loadPath } from "../loadPath";
import DestinationFactory from "./destination";
import RecordFactory from "./record";
import { Export, GrouparooRecord, Destination } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    oldRecordProperties: {},
    newRecordProperties: {},
    oldGroups: [],
    newGroups: [],
    state: "pending",

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...defaultProps, ...props };
};

export default async (
  record?: GrouparooRecord,
  destination?: Destination,
  props: { [key: string]: any } = {}
) => {
  const { Export } = await import(`@grouparoo/core/${loadPath}`);
  if (!record) record = await RecordFactory();
  if (!destination) destination = await DestinationFactory();

  props.recordId = record.id;
  props.destinationId = destination.id;

  const mergedProps = await data(props);
  const instance = new Export(mergedProps) as Export;
  await instance.save();

  return instance;
};
