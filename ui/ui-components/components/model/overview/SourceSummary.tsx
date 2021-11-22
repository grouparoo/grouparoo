import { Models } from "../../../utils/apiData";
import { formatSchedule } from "../../../utils/formatSchedule";
import EntitySummaryContainer from "./EntitySummaryContainer";
import EntitySummaryHeading from "./EntitySummaryHeading";

const renderMapping = (mapping: Record<string, string>): React.ReactNode => {
  const keys = Object.keys(mapping);
  if (!keys.length) return null;
  return `${keys} → ${mapping[keys[0]]}`;
};

const SourceSummary: React.FC<{
  source: Models.SourceType;
  isPrimarySource?: boolean;
}> = ({ source, isPrimarySource }) => {
  const { app, connection, schedule, mapping } = source;

  return (
    <EntitySummaryContainer app={isPrimarySource ? undefined : app}>
      <EntitySummaryHeading entity={source} />
      <div>{connection?.displayName}</div>
      {isPrimarySource && <div>Primary Key: {renderMapping(mapping)}</div>}
      <div>Schedule: {formatSchedule(schedule)}</div>
    </EntitySummaryContainer>
  );
};

export default SourceSummary;
