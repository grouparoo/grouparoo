import { Property } from "@grouparoo/core";
import { loadPath } from "../loadPath";
import SourceFactory from "./source";

const data = async (props = {}) => {
  const defaultProps = {
    type: "string",
    unique: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...defaultProps, ...props };
};

export default async (
  source?,
  props: { [key: string]: any } = {},
  options: { [key: string]: any } = {}
) => {
  const { Property } = await import(`@grouparoo/core/${loadPath}`);
  if (!source) source = await SourceFactory();

  props.sourceId = source.id;
  const mergedProps = await data(props);
  const instance = new Property(mergedProps) as Property;
  if (instance.key && !instance.id) instance.id = instance.key;
  await instance.save();

  await instance.setOptions(options);
  await instance.update({ state: "ready" });

  return instance;
};
