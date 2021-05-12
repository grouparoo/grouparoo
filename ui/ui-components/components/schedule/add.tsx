import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import { useRouter } from "next/router";
import LoadingButton from "../loadingButton";
import { Actions } from "../../utils/apiData";

export default function AddScheduleForm(props) {
  const { errorHandler, source } = props;
  const { execApi } = useApi(props, errorHandler);
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
    writeConfig: process.env.GROUPAROO_UI_EDITION === "config",
  };

  setLoading(true);
  const response: Actions.ScheduleCreate = await execApi(
    "post",
    `/schedule`,
    data
  );

  if (response?.schedule) {
    router.push(`/source/[id]/schedule`, `/source/${sourceId}/schedule`);
    return true;
  } else {
    setLoading(false);
    return false;
  }
}
