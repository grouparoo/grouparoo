import { useState } from "react";
import { useRouter } from "next/router";
import LoadingButton from "../LoadingButton";
import { Actions, Models } from "../../utils/apiData";
import StateBadge from "../badges/StateBadge";
import { errorHandler } from "../../eventHandlers";
import { useApi } from "../../contexts/api";

export default function AddScheduleForm(props) {
  const { source }: { source: Models.SourceType } = props;
  const { client } = useApi();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function create() {
    createSchedule({ client, router, source, setLoading });
  }

  if (source.state === "draft") {
    return (
      <span>
        Cannot add Schedule until Source is
        <StateBadge state="ready" marginBottom={0} />
      </span>
    );
  }

  return (
    <LoadingButton
      size="sm"
      variant="outline-primary"
      loading={loading}
      onClick={create}
    >
      Add Schedule
    </LoadingButton>
  );
}

// TODO: Revisit this, pattern is suspicious.
export async function createSchedule({ client, router, source, setLoading }) {
  const data = {
    sourceId: source.id,
    recurring: true,
  };

  setLoading(true);
  const response: Actions.ScheduleCreate = await client.action(
    "post",
    `/schedule`,
    data
  );

  if (response?.schedule) {
    router.push(
      `/model/[modelId]/source/[sourceId]/schedule`,
      `/model/${source.modelId}/source/${source.id}/schedule`
    );
    return true;
  } else {
    setLoading(false);
    return false;
  }
}
