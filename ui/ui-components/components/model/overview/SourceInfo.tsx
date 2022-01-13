import EnterpriseLink from "../../GrouparooLink";
import { Models } from "../../../utils/apiData";
import { formatSchedule } from "../../../utils/formatSchedule";
import StateBadge from "../../badges/StateBadge";
import EntityInfoContainer from "../../lib/entity/EntityInfoContainer";
import EntityInfoHeader from "../../lib/entity/EntityInfoHeader";

const renderMapping = (mapping: Record<string, string>): React.ReactNode => {
  const keys = Object.keys(mapping);
  if (!keys.length) return null;
  return (
    <>
      <code>{keys[0]}</code> → <code>{mapping[keys[0]]}</code>
    </>
  );
};

const renderSchedule = (
  source: Models.SourceType,
  schedule: Models.ScheduleType
): React.ReactNode => {
  const scheduleNode = formatSchedule(schedule);

  if (schedule) {
    return (
      <>
        <EnterpriseLink
          href={`/model/${source.modelId}/source/${source.id}/schedule`}
        >
          {scheduleNode}
        </EnterpriseLink>
        <StateBadge state={schedule.state} marginBottom={0} />
      </>
    );
  }

  return scheduleNode;
};

const SourceInfo: React.FC<{
  source: Models.SourceType;
  isPrimarySource?: boolean;
}> = ({ source, isPrimarySource }) => {
  const { app, connection, schedule, mapping, scheduleAvailable } = source;

  return (
    <EntityInfoContainer app={isPrimarySource ? undefined : app}>
      <EntityInfoHeader
        entity={source}
        href={`/model/${source.modelId}/source/${source.id}/overview`}
        linkComponent={EnterpriseLink}
      />
      <div>{connection?.displayName}</div>
      {isPrimarySource && <div>Primary Key: {renderMapping(mapping)}</div>}
      {scheduleAvailable && (
        <div>Schedule: {renderSchedule(source, schedule)}</div>
      )}
    </EntityInfoContainer>
  );
};

export default SourceInfo;
