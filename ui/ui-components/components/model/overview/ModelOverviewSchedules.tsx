import { useMemo, useState } from "react";
import EnterpriseLink from "../../GrouparooLink";
import { Actions, Models } from "../../../utils/apiData";
import { formatName } from "../../../utils/formatName";
import { formatSchedule } from "../../../utils/formatSchedule";
import SectionContainer from "../../lib/SectionContainer";
import EntityInfoContainer from "../../lib/entity/EntityInfoContainer";
import EntityInfoHeader from "../../lib/entity/EntityInfoHeader";
import RunAllSchedulesButton from "../../schedule/RunAllSchedulesButton";
import { ApiHook } from "../../../hooks/useApi";
import { successHandler } from "../../../utils/eventHandlers";
import { useGrouparooModelContext } from "../../../contexts/grouparooModel";
import EntityList from "../../lib/entity/EntityList";
import LoadingButton from "../../LoadingButton";
import { grouparooUiEdition } from "../../../utils/uiEdition";

const ScheduleInfo: React.FC<{
  schedule: Models.ScheduleType;
  source?: Models.SourceType;
  execApi: ApiHook["execApi"];
}> = ({ schedule, source, execApi }) => {
  const [loading, setLoading] = useState(false);

  async function enqueueScheduleRun() {
    setLoading(true);
    try {
      const response: Actions.ScheduleRun = await execApi(
        "post",
        `/schedule/${schedule.id}/run`
      );
      if (response.run) {
        successHandler.set({ message: `run ${response.run.id} enqueued` });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <EntityInfoContainer app={source.app}>
      <EntityInfoHeader
        entity={schedule}
        href={`/model/${source.modelId}/source/${source.id}/schedule`}
        linkComponent={EnterpriseLink}
      />
      <div>Source: {formatName(source)}</div>
      <div>Schedule: {formatSchedule(schedule)}</div>
      {grouparooUiEdition() !== "config" && (
        <LoadingButton
          className="mt-1"
          variant="outline-primary"
          size="sm"
          loading={loading}
          onClick={() => {
            enqueueScheduleRun();
          }}
        >
          Run Now
        </LoadingButton>
      )}
    </EntityInfoContainer>
  );
};

interface Props {
  schedules: Models.ScheduleType[];
  sources?: Models.SourceType[];
  execApi: ApiHook["execApi"];
}

const ModelOverviewSchedules: React.FC<Props> = ({
  schedules,
  sources,
  execApi,
}) => {
  const model = useGrouparooModelContext();

  const sourcesById = useMemo<Record<string, Models.SourceType>>(() => {
    const result: Record<string, Models.SourceType> = {};

    if (!sources) return result;

    return sources.reduce((acc, source) => {
      acc[source.id] = source;
      return acc;
    }, result);
  }, [sources]);

  const disabled = !schedules.length;

  return (
    <SectionContainer
      title="Schedules"
      icon="sync-alt"
      description="Schedules check for new and updated data from your Sources."
      disabled={disabled}
      actions={[
        <RunAllSchedulesButton
          size="sm"
          modelId={model.id}
          execApi={execApi}
          disabled={disabled}
        />,
      ]}
    >
      <EntityList
        items={schedules}
        itemType="schedule"
        renderItem={(schedule) => (
          <ScheduleInfo
            schedule={schedule}
            source={sourcesById[schedule.sourceId]}
            execApi={execApi}
          />
        )}
      />
    </SectionContainer>
  );
};

export default ModelOverviewSchedules;
