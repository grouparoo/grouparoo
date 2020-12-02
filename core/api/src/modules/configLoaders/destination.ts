import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  codeConfigLockKey,
  validateAndFormatGuid,
} from "../../classes/codeConfig";
import { App, Destination, Group, ProfilePropertyRule } from "../..";
import { Op } from "sequelize";

export async function loadDestination(configObject: ConfigurationObject) {
  let isNew = false;

  const app: App = await getParentByName(App, configObject.appId);

  const guid = await validateAndFormatGuid(Destination, configObject.id);
  let destination = await Destination.scope(null).findOne({
    where: { guid, appGuid: app.guid },
  });
  if (!destination) {
    isNew = true;
    destination = await Destination.create({
      guid,
      locked: codeConfigLockKey,
      name: configObject.name,
      type: configObject.type,
      appGuid: app.guid,
    });
  }

  let group: Group;
  if (configObject.groupId) {
    group = await getParentByName(Group, configObject.groupId);
  }

  await destination.update({
    name: configObject.name,
    groupGuid: group?.guid,
  });

  await destination.setOptions(extractNonNullParts(configObject, "options"));

  let mapping = {};
  const sanitizedMappings = extractNonNullParts(configObject, "mapping");
  for (const key in sanitizedMappings) {
    const rule = await getParentByName(
      ProfilePropertyRule,
      sanitizedMappings[key]
    );
    mapping[key] = rule.key;
  }
  await destination.setMapping(mapping);

  let destinationGroupMemberships = {};
  const sanitizedDestinationGroupMemberships = extractNonNullParts(
    configObject,
    "destinationGroupMemberships"
  );
  for (const remoteName in sanitizedDestinationGroupMemberships) {
    const group = await getParentByName(
      Group,
      sanitizedDestinationGroupMemberships[remoteName]
    );
    destinationGroupMemberships[group.guid] = remoteName;
  }
  await destination.setDestinationGroupMemberships(destinationGroupMemberships);

  await destination.update({ state: "ready" });

  logModel(destination, isNew ? "created" : "updated");
  return destination;
}

export async function deleteDestinations(guids: string[]) {
  const destinations = await Destination.scope(null).findAll({
    where: { locked: codeConfigLockKey, guid: { [Op.notIn]: guids } },
  });

  for (const i in destinations) {
    const destination = destinations[i];
    await destination.unTrackGroup();
    await destination.destroy();
    logModel(destination, "deleted");
  }
}
