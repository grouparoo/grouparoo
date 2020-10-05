import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import Router from "next/router";
import LoadingButton from "../loadingButton";

export default function AddScheduleForm(props) {
  const { errorHandler, source } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function create() {
    createSchedule({ execApi, sourceGuid: source.guid, setLoading });
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

export async function createSchedule({ execApi, sourceGuid, setLoading }) {
  const data = {
    sourceGuid,
    recurring: false,
  };

  setLoading(true);
  const response = await execApi("post", `/schedule`, data);

  if (response?.schedule) {
    Router.push(`/source/${sourceGuid}/schedule`);
  } else {
    setLoading(false);
  }
}
