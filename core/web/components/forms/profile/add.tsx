import { useApi } from "../../../hooks/useApi";
import Router from "next/router";
import { Button } from "react-bootstrap";

export default function ({ errorHandler }) {
  const { execApi } = useApi(errorHandler);

  async function create() {
    const response = await execApi("post", `/profile`);
    Router.push("/profile/[guid]", `/profile/${response.profile.guid}`);
  }

  return (
    <>
      <Button variant="warning" onClick={create}>
        Add new Profile
      </Button>
    </>
  );
}
