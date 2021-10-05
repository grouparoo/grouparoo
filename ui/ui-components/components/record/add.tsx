import { useState } from "react";
import { UseApi } from "../../hooks/useApi";
import { useRouter } from "next/router";
import LoadingButton from "../loadingButton";
import { Actions } from "../../utils/apiData";

export default function AddRecord(props) {
  const { execApi } = UseApi(props);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function create() {
    setLoading(true);

    const { record }: Actions.RecordCreate = await execApi("post", `/record`);
    router.push(
      "/model/[modelId]/record/[recordId]/edit",
      `/model/${record.modelId}/record/${record.id}/edit`
    );
  }

  return (
    <>
      <LoadingButton variant="warning" disabled={loading} onClick={create}>
        Add new Record
      </LoadingButton>
    </>
  );
}
