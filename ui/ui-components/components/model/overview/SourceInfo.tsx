import { Models } from "../../../utils/apiData";
import { formatSchedule } from "../../../utils/formatSchedule";
import EntityInfoContainer from "./EntityInfoContainer";
import EntityInfoHeading from "./EntityInfoHeading";

const renderMapping = (mapping: Record<string, string>): React.ReactNode => {
  const keys = Object.keys(mapping);
  if (!keys.length) return null;
  return `${keys} → ${mapping[keys[0]]}`;
};

const SourceInfo: React.FC<{
  source: Models.SourceType;
  isPrimarySource?: boolean;
}> = ({ source, isPrimarySource }) => {
  const { app, connection, schedule, mapping } = source;

  return (
    <EntityInfoContainer app={isPrimarySource ? undefined : app}>
      <EntityInfoHeading entity={source} />
      <div>{connection?.displayName}</div>
      {isPrimarySource && <div>Primary Key: {renderMapping(mapping)}</div>}
      <div>Schedule: {formatSchedule(schedule)}</div>
    </EntityInfoContainer>
  );
};

export default SourceInfo;
