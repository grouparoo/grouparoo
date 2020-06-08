import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function (props) {
  const { errorHandler, successHandler, source } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function create() {
    const data = {
      sourceGuid: source.guid,
      unique: false,
      type: "string",
    };

    setLoading(true);
    const response = await execApi("post", `/profilePropertyRule`, data);
    setLoading(false);

    if (response?.profilePropertyRule) {
      Router.push(
        `/profilePropertyRule/${response.profilePropertyRule.guid}/edit`
      );
    }
  }

  return (
    <Button
      size="sm"
      variant="outline-primary"
      disabled={loading || source.state === "draft"}
      onClick={create}
    >
      Add Profile Property Rule
    </Button>
  );
}
