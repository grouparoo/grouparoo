import { Property } from "@grouparoo/core/src";
import SourceFactory from "./source";

const data = async (props = {}) => {
  const defaultProps = {
    type: "string",
    unique: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (
  source?,
  props: { [key: string]: any } = {},
  options: { [key: string]: any } = {}
) => {
  if (!source) {
    source = await SourceFactory();
  }
  props.sourceGuid = source.guid;
  const mergedProps = await data(props);
  const instance = new Property(mergedProps);
  await instance.save();

  await instance.setOptions(options);
  await instance.update({ state: "ready" });

  return instance;
};
