import { Models } from "../../../utils/apiData";
import { formatSchedule } from "../../../utils/formatSchedule";
import EntityInfoContainer from "./EntityInfoContainer";
import EntityInfoHeader from "./EntityInfoHeader";

const renderMapping = (mapping: Record<string, string>): React.ReactNode => {
  const keys = Object.keys(mapping);
  if (!keys.length) return null;
  return (
    <>
      <code>{keys[0]}</code> → <code>{mapping[keys[0]]}</code>
    </>
  );
};

const SourceInfo: React.FC<{
  source: Models.SourceType;
  isPrimarySource?: boolean;
}> = ({ source, isPrimarySource }) => {
  const { app, connection, schedule, mapping } = source;

  return (
    <EntityInfoContainer app={isPrimarySource ? undefined : app}>
      <EntityInfoHeader
        entity={source}
        href={`/model/${source.modelId}/source/${source.id}/overview`}
      />
      <div>{connection?.displayName}</div>
      {isPrimarySource && <div>Primary Key: {renderMapping(mapping)}</div>}
      <div>Schedule: {formatSchedule(schedule)}</div>
    </EntityInfoContainer>
  );
};

export default SourceInfo;
