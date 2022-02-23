import { log } from "actionhero";
import { Op } from "sequelize";
import {
  DestinationConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  validateConfigObjectKeys,
  IdsByClass,
  DestinationConfigSyncMode,
} from "../../classes/codeConfig";
import { App, Destination, Group, Property } from "../.."; // configLoader imports need to be from root

import { DestinationSyncMode } from "../../models/Destination";
import { ConfigWriter } from "../configWriter";

const sanitizeSyncMode = (
  syncMode: DestinationConfigSyncMode,
  configId: string
): DestinationSyncMode => {
  if (syncMode === "additive" || syncMode === "enrich") {
    const newSyncMode = syncMode === "additive" ? "upsert" : "update";
    log(
      `[ config ] Found syncMode "${syncMode}" in Destination config "${configId}". "${syncMode}" is still supported but value should be updated to new name: "${newSyncMode}".`,
      "warning"
    );
    return newSyncMode;
  }

  return syncMode;
};

export async function loadDestination(
  configObject: DestinationConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;

  const app: App = await getParentByName(App, configObject.appId);

  validateConfigObjectKeys(Destination, configObject, [
    "options",
    "mapping",
    "destinationGroupMemberships",
  ]);

  let destination = await Destination.scope(null).findOne({
    where: {
      id: configObject.id,
      appId: app.id,
      [Op.or]: {
        locked: getCodeConfigLockKey(),
        state: "deleted",
      },
    },
  });

  const syncMode = sanitizeSyncMode(configObject.syncMode, configObject.id);

  if (!destination) {
    isNew = true;
    destination = await Destination.create({
      id: configObject.id,
      name: configObject.name,
      type: configObject.type,
      syncMode,
      appId: app.id,
      modelId: configObject.modelId,
    });
  }

  let group: Group;
  if (configObject.groupId) {
    group = await getParentByName(Group, configObject.groupId);
  }

  // do not set groupId or collection here, that's handled within the updateTracking method
  await destination.update({
    name: configObject.name,
    type: configObject.type,
    syncMode,
    modelId: configObject.modelId,
    locked: ConfigWriter.getLockKey(configObject),
  });

  const options = extractNonNullParts(configObject, "options");
  if (options) await destination.setOptions(options);

  let mapping: Record<string, string> = {};
  let destinationGroupMemberships: Record<string, string> = {};

  const sanitizedMappings = extractNonNullParts(configObject, "mapping");
  for (const key in sanitizedMappings) {
    const property = await getParentByName(Property, sanitizedMappings[key]);
    mapping[key] = property.key;
  }
  await destination.setMapping(mapping, externallyValidate, false);

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

  await destination.updateTracking(
    configObject.collection ?? "none", // allow a "null" collection in config to be treated as a "none" collection
    configObject.groupId
  );

  if (destination.state === "deleted") {
    // when bringing back deleted destinations, we need to be sure to trigger a new export even though options may be the same
    await destination.exportMembers();
  }

  await destination.update({ state: "ready" });

  logModel<Destination>(
    destination,
    validate ? "validated" : isNew ? "created" : "updated"
  );

  return { destination: [destination.id] };
}

export async function deleteDestinations(ids: string[]) {
  const destinations = await Destination.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in destinations) {
    const destination = destinations[i];

    // destination:destroy will be enqueued by the `destroy` system task
    await destination.update({ state: "deleted", locked: null });

    logModel<Destination>(destination, "deleted");
  }

  return destinations.map((instance) => instance.id);
}
