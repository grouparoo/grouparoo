import { useEffect } from "react";
import { useRealtimeStream } from "../hooks/useRealtimeStream";
import { StatusHandler } from "../utils/statusHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { UseApi } from "../hooks/useApi";
import { useRouter } from "next/router";

export default function StatusSubscription(props) {
  const router = useRouter();

  const {
    statusHandler,
    errorHandler,
  }: {
    statusHandler: StatusHandler;
    errorHandler: ErrorHandler;
  } = props;
  const { execApi } = UseApi(props, errorHandler);
  const subscriptionKey = "status-subscription";

  useEffect(() => {
    if (router.pathname.match(/^\/session/)) return;
    statusHandler.getSamples(execApi);
  }, []);

  useRealtimeStream("system:status", subscriptionKey, (data) => {
    statusHandler.publish(data);
  });

  return null;
}
