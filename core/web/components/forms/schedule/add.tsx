import { useApi } from "../../../hooks/useApi";
import { useState } from "react";
import Router from "next/router";
import { Button } from "react-bootstrap";

export default function ({ errorHandler, successHandler, source }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);

  async function create() {
    createSchedule({
      sourceGuid: source.guid,
      setLoading,
      successHandler,
      execApi,
    });
  }

  return (
    <Button
      size="sm"
      variant="warning"
      disabled={loading || source.state === "draft"}
      onClick={create}
    >
      Add Schedule
    </Button>
  );
}

export async function createSchedule({
  sourceGuid,
  setLoading,
  successHandler,
  execApi,
}) {
  const data = {
    sourceGuid,
    recurring: false,
  };

  setLoading(true);
  const response = await execApi("post", `/schedule`, data);

  if (response?.schedule) {
    successHandler.set({ message: "Schedule Created" });
    Router.push({
      pathname: `/source/${sourceGuid}`,
      query: { tab: "schedule" },
    });
  } else {
    setLoading(false);
  }
}
