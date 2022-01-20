import { useApi } from "../../contexts/api";
import { useState } from "react";
import { useRouter } from "next/router";
import LoadingButton from "../LoadingButton";
import { Actions } from "../../utils/apiData";

export default function AddRecord(props) {
  const { client } = useApi();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function create() {
    setLoading(true);

    const { record }: Actions.RecordCreate = await client.request(
      "post",
      `/record`
    );
    router.push(
      "/model/[modelId]/record/[recordId]/edit",
      `/model/${record.modelId}/record/${record.id}/edit`
    );
  }

  return (
    <>
      <LoadingButton variant="warning" loading={loading} onClick={create}>
        Add new Record
      </LoadingButton>
    </>
  );
}
