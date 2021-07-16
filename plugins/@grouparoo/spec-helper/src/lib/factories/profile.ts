import faker from "faker";
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
    properties[directlyMappedProperty.key] = faker.datatype.number(99999);
  }

  await profile.addOrUpdateProperties({
    ...properties,
  });

  return profile;
};
