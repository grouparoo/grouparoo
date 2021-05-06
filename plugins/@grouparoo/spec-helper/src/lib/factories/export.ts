import { loadPath } from "../loadPath";
import DestinationFactory from "./destination";
import ProfileFactory from "./profile";

const data = async (props = {}) => {
  const defaultProps = {
    oldProfileProperties: {},
    newProfileProperties: {},
    oldGroups: [],
    newGroups: [],
    state: "pending",

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (
  profile?,
  destination?,
  props: { [key: string]: any } = {}
) => {
  const { Export } = await import(`@grouparoo/core/${loadPath}`);
  if (!profile) profile = await ProfileFactory();
  if (!destination) destination = await DestinationFactory();

  props.profileId = profile.id;
  props.destinationId = destination.id;

  const mergedProps = await data(props);
  const instance = new Export(mergedProps);
  await instance.save();

  return instance;
};
