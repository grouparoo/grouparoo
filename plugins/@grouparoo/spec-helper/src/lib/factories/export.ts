import { loadPath } from "../loadPath";
import DestinationFactory from "./destination";
import RecordFactory from "./record";

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

  return Object.assign({}, defaultProps, props);
};

export default async (
  record?,
  destination?,
  props: { [key: string]: any } = {}
) => {
  const { Export } = await import(`@grouparoo/core/${loadPath}`);
  if (!record) record = await RecordFactory();
  if (!destination) destination = await DestinationFactory();

  props.Id = record.id;
  props.destinationId = destination.id;

  const mergedProps = await data(props);
  const instance = new Export(mergedProps);
  await instance.save();

  return instance;
};
