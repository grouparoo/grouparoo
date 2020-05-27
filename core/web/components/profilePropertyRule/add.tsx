import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function ({ errorHandler, successHandler, source }) {
  const { execApi } = useApi(errorHandler);
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
      successHandler.set({ message: "Profile Property Rule Created" });
      Router.push({
        pathname: `/profilePropertyRule/${response.profilePropertyRule.guid}`,
        query: { tab: "edit" },
      });
    }
  }

  return (
    <Button
      size="sm"
      variant="warning"
      disabled={loading || source.state === "draft"}
      onClick={create}
    >
      Add Profile Property Rule
    </Button>
  );
}
