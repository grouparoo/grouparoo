import { useState } from "react";
import { UseApi } from "../../hooks/useApi";
import LoadingButton from "../LoadingButton";
import { useRouter } from "next/router";
import { Actions, Models } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import StateBadge from "../badges/StateBadge";

export default function PropertyAddButton(props) {
  const {
    errorHandler,
    source,
  }: { errorHandler: ErrorHandler; source: Models.SourceType } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
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
      const property = response.property;
      router.push(
        `/model/${source.modelId}/property/${property.id}/edit?nextPage=/model/${source.modelId}/source/${source.id}/overview`
      );
    } else {
      setLoading(false);
    }
  }

  if (source.state === "draft") {
    return (
      <p>
        <small>
          Cannot add Properties until Source is
          <StateBadge state="ready" marginBottom={0} />
        </small>
      </p>
    );
  }

  return (
    <LoadingButton
      size="sm"
      variant="outline-primary"
      loading={loading}
      onClick={create}
    >
      Add Property
    </LoadingButton>
  );
}
