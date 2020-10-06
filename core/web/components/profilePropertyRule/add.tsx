import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import LoadingButton from "../loadingButton";
import { useRouter } from "next/router";

export default function AddProfilePropertyRuleForm(props) {
  const { errorHandler, source } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function create() {
    setLoading(true);

    const data = {
      sourceGuid: source.guid,
      unique: false,
      type: "string",
    };

    const response = await execApi("post", `/profilePropertyRule`, data);

    if (response?.profilePropertyRule) {
      router.push(
        `/profilePropertyRule/${response.profilePropertyRule.guid}/edit?nextPage=/source/${source.guid}/overview`
      );
    } else {
      setLoading(false);
    }
  }

  if (source.state === "draft") {
    return (
      <p>
        <small>Source is not ready, cannot add Profile Property Rule</small>
      </p>
    );
  }

  return (
    <LoadingButton
      size="sm"
      variant="outline-primary"
      disabled={loading}
      onClick={create}
    >
      Add Profile Property Rule
    </LoadingButton>
  );
}
