import { connect } from "../connect";
import {
  exportProfilesInBatch,
  ForeignKeyMap,
  BatchConfig,
  GroupNameListMap,
} from "../batchHelper";
import { ExportProfilesPluginMethod } from "@grouparoo/core";

// return an object that you can connect with
async function getClient(config: BatchConfig): Promise<any> {
  return connect(config.appOptions);
}

// fetch using the keys in fkMap to set destinationId and result on BatchExports in fkMap
async function setDestinationIds(
  client: any,
  fkMap: ForeignKeyMap, // has newValue and oldValue of foreignKey
  config: BatchConfig
): Promise<void> {}

// delete the given destinationIds
async function deleteByDestinationIds(
  client: any,
  fkMap: ForeignKeyMap
): Promise<void> {}

// update these users by destinationId
async function updateByDestinationIds(
  client: any,
  fkMap: ForeignKeyMap
): Promise<void> {}

// usually this is creating them. set the destinationId on each when done
async function updateByForeignKeyAndSetDestinationIds(
  client: any,
  fkMap: ForeignKeyMap
): Promise<void> {}

// make sure these user are in these groups (keys of map are group names)
async function addToGroups(
  client: any,
  groupMap: GroupNameListMap
): Promise<void> {}
// make sure these users are not in these groups (keys of map are group names)
async function removeFromGroups(
  client: any,
  groupMap: GroupNameListMap
): Promise<void> {}

// mess with the keys (lowercase emails, for example)
function normalizeForeignKeyValue(keyValue: any): string {
  return keyValue.toString();
}
// mess with the names of groups (tags with no spaces, for example)
function normalizeGroupName(groupName: string): string {
  return groupName;
}

// export interface MyBatchMethod {
//   (
//     appOptions: SimpleAppOptions,
//     destinationOptions: SimpleDestinationOptions,
//     exports: ExportedProfile[]
//   ): Promise<{
//     success: boolean;
//     retryDelay?: number;
//     errors?: ErrorWithProfileGuid[];
//   }>;
// }

export async function exportBatch({ appOptions, destinationOptions, exports }) {
  const batchSize = 200;
  const foreignKey = destinationOptions.profileFieldMatch;
  return exportProfilesInBatch(
    exports,
    {
      batchSize,
      foreignKey,
      appOptions,
      destinationOptions,
    },
    {
      getClient,
      setDestinationIds,
      deleteByDestinationIds,
      updateByDestinationIds,
      updateByForeignKeyAndSetDestinationIds,
      addToGroups,
      removeFromGroups,
      normalizeForeignKeyValue,
      normalizeGroupName,
    }
  );
}

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appOptions,
  destinationOptions,
  exports,
}) => {
  return exportBatch({ appOptions, destinationOptions, exports });
};
