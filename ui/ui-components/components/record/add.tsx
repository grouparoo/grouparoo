import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useRouter } from "next/router";
import LoadingButton from "../loadingButton";
import { Actions } from "../../utils/apiData";

export default function AddRecord(props) {
  const { execApi } = useApi(props);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function create() {
    setLoading(true);
    const response: Actions.RecordCreate = await execApi("post", `/record`);
    router.push("/record/[id]/edit", `/record/${response.record.id}/edit`);
  }

  return (
    <>
      <LoadingButton variant="warning" disabled={loading} onClick={create}>
        Add new Record
      </LoadingButton>
    </>
  );
}
