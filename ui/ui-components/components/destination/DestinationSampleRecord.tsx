import { useCallback, useMemo, useState } from "react";
import SampleRecordCard, {
  SampleRecordCardProps,
} from "../record/SampleRecordCard";
import { Models } from "../../utils/apiData";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { useApi } from "../../contexts/api";
import { RecordView } from "@grouparoo/core/src/actions/records";

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
  const { client } = useApi();
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
      const response = await client.requestAction<RecordView>(
        "get",
        `/record/${recordId}`,
        {
          id: recordId, // TODO: Remove this once requestAction can handle route params
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
          This Grouparoo Record will not be sent to the Destination because it's not in the selected Group.
          You can switch to a random Record to get one that will export.
        `;
      }

      setWarning(warning);

      return response;
    },
    [client, groupId, collection]
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
      randomRecordDisabled={collection === "none"}
      groupId={groupId}
    />
  );
};

export default DestinationSampleRecord;
