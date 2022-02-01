import { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import LoadingButton from "../LoadingButton";
import { Actions, Models } from "../../utils/apiData";
import StateBadge from "../badges/StateBadge";
import { useApi } from "../../contexts/api";
import { Client } from "../../client/client";

export default function AddScheduleForm({
  source,
}: {
  source: Models.SourceType;
}) {
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

export async function createSchedule({
  client,
  router,
  source,
  setLoading,
}: {
  client: Client;
  router: NextRouter;
  source: Models.SourceType;
  setLoading: (loading: boolean) => void;
}) {
  const data = {
    sourceId: source.id,
    recurring: true,
  };

  setLoading(true);
  const response: Actions.ScheduleCreate = await client.request(
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
