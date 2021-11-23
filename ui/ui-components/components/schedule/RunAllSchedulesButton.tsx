import { useState } from "react";
import { ApiHook } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";
import { successHandler } from "../../utils/eventHandlers";
import LoadingButton from "../LoadingButton";

interface Props {
  execApi: ApiHook["execApi"];
  modelId: string;
  onComplete?: () => void;
}

const RunAllSchedulesButton: React.FC<Props> = ({
  execApi,
  modelId,
  onComplete,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  async function enqueueAllSchedulesRun() {
    setIsLoading(true);
    try {
      const { runs } = await execApi<Actions.SchedulesRun>(
        "post",
        `/schedules/run`,
        { modelId }
      );
      successHandler.set({ message: `${runs.length} runs enqueued` });
      onComplete?.();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <LoadingButton
      variant="outline-primary"
      size="sm"
      disabled={isLoading}
      onClick={() => enqueueAllSchedulesRun()}
      hideOn={["config"]}
    >
      Run all Schedules
    </LoadingButton>
  );
};

export default RunAllSchedulesButton;
