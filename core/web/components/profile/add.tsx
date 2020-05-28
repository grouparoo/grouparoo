import { useApi } from "../../hooks/useApi";
import Router from "next/router";
import { Button } from "react-bootstrap";

export default function (props) {
  const { execApi } = useApi(props);

  async function create() {
    const response = await execApi("post", `/profile`);
    Router.push(
      "/profile/[guid]/edit",
      `/profile/${response.profile.guid}/edit`
    );
  }

  return (
    <>
      <Button variant="warning" onClick={create}>
        Add new Profile
      </Button>
    </>
  );
}
