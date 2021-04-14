import { useEffect } from "react";
import { useRealtimeStream } from "../hooks/useRealtimeStream";
import { StatusHandler } from "../utils/statusHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { useApi } from "../hooks/useApi";

export default function StatusSubscription(props) {
  const {
    statusHandler,
    errorHandler,
  }: {
    statusHandler: StatusHandler;
    errorHandler: ErrorHandler;
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const subscriptionKey = "status-subscription";

  useEffect(() => {
    statusHandler.getSamples(execApi);
  }, []);

  useRealtimeStream("system:status", subscriptionKey, (data) => {
    statusHandler.publish(data);
  });

  return null;
}
