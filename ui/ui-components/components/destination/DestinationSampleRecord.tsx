import { useCallback, useMemo, useState } from "react";
import SampleRecordCard, {
  SampleRecordCardProps,
} from "../record/SampleRecordCard";
import { Actions, Models } from "../../utils/apiData";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";

interface Props {
  destination: Models.DestinationType;
  collection: Models.DestinationType["collection"];
  groupId: string;
  mappingOptions?: any;
}

type SampleRecordOmittedProps = Omit<
  SampleRecordCardProps,
  | "fetchRecord"
  | "reloadKey"
  | "groupsTitle"
  | "propertiesTitle"
  | "propertyLinkDisabled"
  | "importDisabled"
>;

const DestinationSampleRecord: React.FC<Props & SampleRecordOmittedProps> = ({
  destination,
  mappingOptions,
  groupId,
  collection,
  ...props
}) => {
  const { execApi, modelId } = props;
  const debouncedDestination = useDebouncedValue(destination, 1000);
  const [warning, setWarning] = useState<string>();

  const reloadKey = useMemo(
    () =>
      JSON.stringify([
        groupId,
        collection,
        debouncedDestination.id,
        debouncedDestination.group,
        debouncedDestination.mapping,
        debouncedDestination.destinationGroupMemberships,
      ]),
    [debouncedDestination, groupId, collection]
  );

  const fetchRecord = useCallback<SampleRecordCardProps["fetchRecord"]>(
    async (recordId: string) => {
      const destinationGroupMemberships: Record<string, string> =
        debouncedDestination.destinationGroupMemberships.reduce((acc, dgm) => {
          acc[dgm.groupId] = dgm.remoteKey;
          return acc;
        }, {} as Record<string, string>);

      const response = await execApi<Actions.DestinationRecordPreview>(
        "get",
        `/destination/${debouncedDestination.id}/recordPreview`,
        {
          groupId,
          modelId,
          collection,
          mapping: debouncedDestination.mapping,
          destinationGroupMemberships,
          recordId,
        }
      );

      let warning: string;

      if (collection === "none") {
        warning =
          "This Grouparoo Record will not be part of the export to the Destination because no Model or Group is selected.";
      } else if (
        collection === "group" &&
        groupId &&
        (!response.record || !response.record.groupIds.includes(groupId))
      ) {
        warning = `
          This Grouparoo Record will not be sent to the Destination because it‘s not in the selected Group.
          You can switch to a random Record to get one that will export.
        `;
      }

      setWarning(warning);

      console.log(response);

      return response;
    },
    [execApi, debouncedDestination, modelId, groupId, collection]
  );

  return (
    <SampleRecordCard
      {...props}
      reloadKey={reloadKey}
      fetchRecord={fetchRecord}
      propertiesTitle={mappingOptions?.labels?.property?.plural}
      groupsTitle={mappingOptions?.labels?.group?.plural}
      warning={warning}
      propertyLinkDisabled
      importDisabled
    />
  );
};

export default DestinationSampleRecord;
