import { useApi } from "../../../hooks/useApi";
import { useState } from "react";
import Router from "next/router";
import { Button } from "react-bootstrap";

export default function ({ apiVersion, errorHandler, successHandler, source }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);

  async function create() {
    const data = {
      sourceGuid: source.guid,
      recurring: false,
    };

    setLoading(true);
    const response = await execApi("post", `/api/${apiVersion}/schedule`, data);

    if (response?.schedule) {
      successHandler.set({ message: "Schedule Created" });
      Router.push(`/schedule/${response.schedule.guid}?tab=edit`);
    } else {
      setLoading(false);
    }
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
