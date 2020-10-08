import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useRouter } from "next/router";
import LoadingButton from "../loadingButton";
import { Actions } from "../../utils/apiData";

export default function (props) {
  const { execApi } = useApi(props);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function create() {
    setLoading(true);
    const response: Actions.ProfileCreate = await execApi("post", `/profile`);
    router.push(
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
