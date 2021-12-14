import { useCallback, useMemo } from "react";
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
    (recordId: string) => {
      const destinationGroupMemberships: Record<string, string> =
        debouncedDestination.destinationGroupMemberships.reduce((acc, dgm) => {
          acc[dgm.groupId] = dgm.remoteKey;
          return acc;
        }, {} as Record<string, string>);

      return execApi<Actions.DestinationRecordPreview>(
        "get",
        `/destination/${debouncedDestination.id}/recordPreview`,
        {
          groupId: groupId,
          modelId: modelId,
          mapping: debouncedDestination.mapping,
          destinationGroupMemberships,
          recordId,
        }
      );
    },
    [execApi, debouncedDestination, modelId, groupId]
  );

  return (
    <SampleRecordCard
      {...props}
      reloadKey={reloadKey}
      fetchRecord={fetchRecord}
      propertiesTitle={mappingOptions?.labels?.property?.plural}
      groupsTitle={mappingOptions?.labels?.group?.plural}
      propertyLinkDisabled
      importDisabled
    />
  );
};

export default DestinationSampleRecord;
