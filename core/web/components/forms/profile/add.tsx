import { useApi } from "../../../hooks/useApi";
import Router from "next/router";
import { Button } from "react-bootstrap";

export default function ({ apiVersion, errorHandler }) {
  const { execApi } = useApi(errorHandler);

  async function create() {
    const response = await execApi("post", `/api/${apiVersion}/profile`);
    Router.push(`/profile/${response.profile.guid}`);
  }

  return (
    <>
      <Button variant="warning" onClick={create}>
        Add new Profile
      </Button>
    </>
  );
}
