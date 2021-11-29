import { useState } from "react";
import { Button, ButtonProps } from "react-bootstrap";
import { ApiHook } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";
import { successHandler } from "../../utils/eventHandlers";
import { grouparooUiEdition } from "../../utils/uiEdition";
import LoadingButton from "../LoadingButton";

interface Props {
  execApi: ApiHook["execApi"];
  modelId: string;
  disabled?: boolean;
  size?: ButtonProps["size"];
  onStart?: () => void;
  onSuccess?: () => void;
  onComplete?: () => void;
}

const RunAllSchedulesButton: React.FC<Props> = ({
  execApi,
  modelId,
  disabled,
  size,
  onStart,
  onSuccess,
  onComplete,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const hide = grouparooUiEdition() === "config";

  if (hide) {
    return null;
  }

  if (disabled && !isLoading) {
    return (
      <Button variant="outline-primary" disabled={disabled} size={size}>
        Run all Schedules
      </Button>
    );
  }

  async function enqueueAllSchedulesRun() {
    onStart?.();
    setIsLoading(true);
    try {
      const { runs } = await execApi<Actions.SchedulesRun>(
        "post",
        `/schedules/run`,
        { modelId }
      );
      successHandler.set({ message: `${runs.length} runs enqueued` });
      onSuccess?.();
    } finally {
      setIsLoading(false);
      onComplete?.();
    }
  }

  return (
    <LoadingButton
      variant="outline-primary"
      size={size}
      disabled={isLoading}
      onClick={() => enqueueAllSchedulesRun()}
      hideOn={["config"]}
    >
      Run all Schedules
    </LoadingButton>
  );
};

export default RunAllSchedulesButton;
