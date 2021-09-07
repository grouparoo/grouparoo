import * as UUID from "uuid";
import { loadPath } from "../loadPath";

const data = async (props = {}) => {
  const defaultProps = {
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}, properties = {}) => {
  const { Profile } = await import(`@grouparoo/core/${loadPath}`);
  const profile = await Profile.create(await data(props));

  const { Property } = await import(`@grouparoo/core/${loadPath}`);
  const allProperties = await Property.findAllWithCache();
  const directlyMappedProperty = allProperties.find((p) => p.directlyMapped);

  if (directlyMappedProperty) {
    properties[directlyMappedProperty.key] = UUID.v4();
  }

  await profile.addOrUpdateProperties({
    ...properties,
  });

  return profile;
};
