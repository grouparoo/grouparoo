import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import { useRouter } from "next/router";
import LoadingButton from "../loadingButton";

export default function AddScheduleForm(props) {
  const { errorHandler, source } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function create() {
    createSchedule({ execApi, router, sourceGuid: source.guid, setLoading });
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
  sourceGuid,
  setLoading,
}) {
  const data = {
    sourceGuid,
    recurring: false,
  };

  setLoading(true);
  const response = await execApi("post", `/schedule`, data);

  if (response?.schedule) {
    router.push(`/source/[guid]/schedule`, `/source/${sourceGuid}/schedule`);
    return true;
  } else {
    setLoading(false);
    return false;
  }
}
