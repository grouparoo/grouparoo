import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import Router from "next/router";
import LoadingButton from "../loadingButton";

export default function (props) {
  const { execApi } = useApi(props);
  const [loading, setLoading] = useState(false);

  async function create() {
    setLoading(true);
    const response = await execApi("post", `/profile`);
    Router.push(
      "/profile/[guid]/edit",
      `/profile/${response.profile.guid}/edit`
    );
  }

  return (
    <>
      <LoadingButton variant="warning" disabled={loading} onClick={create}>
        Add new Profile
      </LoadingButton>
    </>
  );
}
