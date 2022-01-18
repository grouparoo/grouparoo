import { UseApi } from "../../hooks/useApi";
import { useState } from "react";
import { useRouter } from "next/router";
import LoadingButton from "../LoadingButton";
import { Actions, Models } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import StateBadge from "../badges/StateBadge";

export default function AddScheduleForm(props) {
  const {
    errorHandler,
    source,
  }: { errorHandler: ErrorHandler; source: Models.SourceType } = props;
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function create() {
    createSchedule({ execApi, router, source, setLoading });
  }

  if (source.state === "draft") {
    return (
      <span>
        Cannot add Schedule until Source is
        <StateBadge state="ready" marginBottom={0} />
      </span>
    );
  }

  return (
    <LoadingButton
      size="sm"
      variant="outline-primary"
      loading={loading}
      onClick={create}
    >
      Add Schedule
    </LoadingButton>
  );
}

export async function createSchedule({ execApi, router, source, setLoading }) {
  const data = {
    sourceId: source.id,
    recurring: true,
  };

  setLoading(true);
  const response: Actions.ScheduleCreate = await execApi(
    "post",
    `/schedule`,
    data
  );

  if (response?.schedule) {
    router.push(
      `/model/[modelId]/source/[sourceId]/schedule`,
      `/model/${source.modelId}/source/${source.id}/schedule`
    );
    return true;
  } else {
    setLoading(false);
    return false;
  }
}
