import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import Router from "next/router";
import { Button } from "react-bootstrap";

export default function (props) {
  const { errorHandler, successHandler, source } = props;
  const { execApi } = useApi(props, errorHandler);
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
      variant="outline-primary"
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
    Router.push(`/source/${sourceGuid}/schedule`);
  } else {
    setLoading(false);
  }
}
