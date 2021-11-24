import { useMemo } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import { formatName } from "../../../utils/formatName";
import { formatSchedule } from "../../../utils/formatSchedule";
import SectionContainer from "./SectionContainer";
import EntityInfoContainer from "./EntityInfoContainer";
import EntityInfoHeader from "./EntityInfoHeader";
import RunAllSchedulesButton from "../../schedule/RunAllSchedulesButton";
import { ApiHook } from "../../../hooks/useApi";
import { useGrouparooModelContext } from "../../../contexts/grouparooModelContext";

const ScheduleInfo: React.FC<{
  schedule: Models.ScheduleType;
  source?: Models.SourceType;
}> = ({ schedule, source }) => {
  return (
    <EntityInfoContainer app={source.app}>
      <EntityInfoHeader
        entity={schedule}
        href={`/model/${source.modelId}/source/${source.id}/schedule`}
      />
      <div>Source: {formatName(source)}</div>
      <div>Schedule: {formatSchedule(schedule)}</div>
    </EntityInfoContainer>
  );
};

const ModelOverviewSchedules: React.FC<{
  schedules: Models.ScheduleType[];
  sources?: Models.SourceType[];
  execApi: ApiHook["execApi"];
}> = ({ schedules, sources, execApi }) => {
  const model = useGrouparooModelContext();

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
              <ScheduleInfo
                schedule={group}
                source={sourcesById[group.sourceId]}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
      <RunAllSchedulesButton size="sm" modelId={model.id} execApi={execApi} />
    </SectionContainer>
  );
};

export default ModelOverviewSchedules;
