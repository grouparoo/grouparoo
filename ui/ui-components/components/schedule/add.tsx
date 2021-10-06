import { UseApi } from "../../hooks/useApi";
import { useState } from "react";
import { useRouter } from "next/router";
import LoadingButton from "../loadingButton";
import { Actions, Models } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";

export default function AddScheduleForm(props) {
  const {
    errorHandler,
    source,
  }: { errorHandler: ErrorHandler; source: Models.SourceType } = props;
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function create() {
    createSchedule({ execApi, router, sourceId: source.id, setLoading });
  }

  if (source.state === "draft") {
    return (
      <p>
        <small>Source is not ready, cannot add Schedule</small>
      </p>
    );
  }

  return (
    <LoadingButton
      size="sm"
      variant="outline-primary"
      disabled={loading}
      onClick={create}
    >
      Add Schedule
    </LoadingButton>
  );
}

export async function createSchedule({
  execApi,
  router,
  sourceId,
  setLoading,
}) {
  const data = {
    sourceId,
    recurring: false,
  };

  setLoading(true);
  const response: Actions.ScheduleCreate = await execApi(
    "post",
    `/schedule`,
    data
  );

  if (response?.schedule) {
    // TODO:sched GET MODEL
    router.push(
      `/model/[modelId]/source/[sourceId]/schedule`,
      `/model/${"anything"}/source/${sourceId}/schedule`
    );
    return true;
  } else {
    setLoading(false);
    return false;
  }
}
