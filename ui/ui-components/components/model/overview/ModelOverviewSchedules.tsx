import { useMemo } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import { formatName } from "../../../utils/formatName";
import { formatSchedule } from "../../../utils/formatSchedule";
import SectionContainer from "./SectionContainer";
import EntitySummaryContainer from "./EntitySummaryContainer";
import EntitySummaryHeading from "./EntitySummaryHeading";

const ScheduleSummary: React.FC<{
  schedule: Models.ScheduleType;
  source?: Models.SourceType;
}> = ({ schedule, source }) => {
  return (
    <EntitySummaryContainer app={source.app}>
      <EntitySummaryHeading entity={schedule} />
      <div>Source: {formatName(source)}</div>
      <div>Schedule: {formatSchedule(schedule)}</div>
    </EntitySummaryContainer>
  );
};

const ModelOverviewSchedules: React.FC<{
  schedules: Models.ScheduleType[];
  sources?: Models.SourceType[];
}> = ({ schedules, sources }) => {
  const sourcesById = useMemo<Record<string, Models.SourceType>>(() => {
    const result: Record<string, Models.SourceType> = {};

    if (!sources) return result;

    return sources.reduce((acc, source) => {
      acc[source.id] = source;
      return acc;
    }, result);
  }, [sources]);

  return (
    <SectionContainer
      title="Schedules"
      icon="sync-alt"
      description="Checks for new data from your Sources."
    >
      {schedules.length > 0 && (
        <ListGroup className="list-group-flush">
          {schedules.map((group, index) => (
            <ListGroupItem key={index}>
              <ScheduleSummary
                schedule={group}
                source={sourcesById[group.sourceId]}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </SectionContainer>
  );
};

export default ModelOverviewSchedules;
