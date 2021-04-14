import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  validateAndFormatId,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { App, Destination, Group, Property } from "../..";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";

export async function loadDestination(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;

  const app: App = await getParentByName(App, configObject.appId);

  const id = await validateAndFormatId(Destination, configObject.id);
  validateConfigObjectKeys(Destination, configObject);

  let destination = await Destination.scope(null).findOne({
    where: { id, appId: app.id },
  });
  if (!destination) {
    isNew = true;
    destination = await Destination.create({
      id,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
      type: configObject.type,
      appId: app.id,
    });
  }

  let group: Group;
  if (configObject.groupId) {
    group = await getParentByName(Group, configObject.groupId);
  }

  await destination.update({
    type: configObject.type,
    name: configObject.name,
  });

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
    destinationGroupMemberships[membershipGroup.id] = remoteName;
  }
  await destination.setDestinationGroupMemberships(destinationGroupMemberships);

  if (group && destination.groupId !== group.id) {
    await destination.trackGroup(group);
  }

  await destination.update({ state: "ready" });

  logModel(destination, validate ? "validated" : isNew ? "created" : "updated");

  return { destination: [destination.id] };
}

export async function deleteDestinations(ids: string[]) {
  const destinations = await Destination.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in destinations) {
    const destination = destinations[i];
    await destination.update({ state: "deleted", locked: null });
    await CLS.enqueueTask("destination:destroy", {
      destinationId: destination.id,
    });
    logModel(destination, "deleted");
  }

  return destinations.map((instance) => instance.id);
}
