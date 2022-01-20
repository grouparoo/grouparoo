import { useRouter } from "next/router";
import { useEffect } from "react";
import { errorHandler, statusHandler } from "../eventHandlers";
import { useRealtimeStream } from "../hooks/useRealtimeStream";
import { UseApi } from "../hooks/useApi";

export default function StatusSubscription(props) {
  const router = useRouter();
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
