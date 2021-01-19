import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  validateAndFormatGuid,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { App, Destination, Group, Property } from "../..";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";

export async function loadDestination(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  let isNew = false;

  const app: App = await getParentByName(App, configObject.appId);

  const guid = await validateAndFormatGuid(Destination, configObject.id);
  validateConfigObjectKeys(Destination, configObject);

  let destination = await Destination.scope(null).findOne({
    where: { guid, appGuid: app.guid },
  });
  if (!destination) {
    isNew = true;
    destination = await Destination.create({
      guid,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
      type: configObject.type,
      appGuid: app.guid,
    });
  }

  let group: Group;
  if (configObject.groupId) {
    group = await getParentByName(Group, configObject.groupId);
  }

  await destination.update({ name: configObject.name });

  await destination.setOptions(extractNonNullParts(configObject, "options"));

  let mapping = {};
  const sanitizedMappings = extractNonNullParts(configObject, "mapping");
  for (const key in sanitizedMappings) {
    const property = await getParentByName(Property, sanitizedMappings[key]);
    mapping[key] = property.key;
  }
  await destination.setMapping(mapping, externallyValidate, false);

  let destinationGroupMemberships = {};
  const sanitizedDestinationGroupMemberships = extractNonNullParts(
    configObject,
    "destinationGroupMemberships"
  );
  for (const remoteName in sanitizedDestinationGroupMemberships) {
    const membershipGroup = await getParentByName(
      Group,
      sanitizedDestinationGroupMemberships[remoteName]
    );
    destinationGroupMemberships[membershipGroup.guid] = remoteName;
  }
  await destination.setDestinationGroupMemberships(destinationGroupMemberships);

  if (group && destination.groupGuid !== group.guid) {
    await destination.trackGroup(group);
  }

  await destination.update({ state: "ready" });

  logModel(destination, validate ? "validated" : isNew ? "created" : "updated");

  return destination;
}

export async function deleteDestinations(guids: string[]) {
  const destinations = await Destination.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), guid: { [Op.notIn]: guids } },
  });

  for (const i in destinations) {
    const destination = destinations[i];
    await destination.update({ state: "deleted", locked: null });
    await CLS.enqueueTask("destination:destroy", {
      destinationGuid: destination.guid,
    });
    logModel(destination, "deleted");
  }

  return destinations.map((instance) => instance.guid);
}
