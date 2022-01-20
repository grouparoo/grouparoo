import { useMemo, useState } from "react";
import EnterpriseLink from "../../GrouparooLink";
import { Actions, Models } from "../../../utils/apiData";
import { formatName } from "../../../utils/formatName";
import { formatSchedule } from "../../../utils/formatSchedule";
import SectionContainer from "../../lib/SectionContainer";
import EntityInfoContainer from "../../lib/entity/EntityInfoContainer";
import EntityInfoHeader from "../../lib/entity/EntityInfoHeader";
import RunAllSchedulesButton from "../../schedule/RunAllSchedulesButton";
import { successHandler } from "../../../eventHandlers";
import { useGrouparooModelContext } from "../../../contexts/grouparooModel";
import EntityList from "../../lib/entity/EntityList";
import LoadingButton from "../../LoadingButton";
import { grouparooUiEdition } from "../../../utils/uiEdition";
import { useApi } from "../../../contexts/api";

const ScheduleInfo: React.FC<{
  schedule: Models.ScheduleType;
  source?: Models.SourceType;
}> = ({ schedule, source }) => {
  const [loading, setLoading] = useState(false);
  const { client } = useApi();

  async function enqueueScheduleRun() {
    setLoading(true);
    try {
      const response: Actions.ScheduleRun = await client.action(
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
}

const ModelOverviewSchedules: React.FC<Props> = ({ schedules, sources }) => {
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
          />
        )}
      />
    </SectionContainer>
  );
};

export default ModelOverviewSchedules;
