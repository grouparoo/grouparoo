import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import LoadingButton from "../loadingButton";
import { useRouter } from "next/router";
import { Actions, Models } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";

export default function AddPropertyForm(props) {
  const {
    errorHandler,
    source,
  }: { errorHandler: ErrorHandler; source: Models.SourceType } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function create() {
    setLoading(true);

    const data = {
      sourceId: source.id,
      unique: false,
      type: "string",
    };

    const response: Actions.PropertyCreate = await execApi(
      "post",
      `/property`,
      data
    );

    if (response?.property) {
      router.push(
        `/property/${response.property.id}/edit?nextPage=/source/${source.id}/overview`
      );
    } else {
      setLoading(false);
    }
  }

  if (source.state === "draft") {
    return (
      <p>
        <small>Source is not ready, cannot add Property</small>
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
      Add Property
    </LoadingButton>
  );
}
