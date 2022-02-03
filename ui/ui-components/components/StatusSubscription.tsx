import { useRouter } from "next/router";
import { useEffect } from "react";
import { statusHandler } from "../eventHandlers";
import { useRealtimeStream } from "../hooks/useRealtimeStream";
import { useApi } from "../contexts/api";

export default function StatusSubscription(props) {
  const router = useRouter();

  const { client } = useApi();
  const subscriptionKey = "status-subscription";

  useEffect(() => {
    if (router.pathname.match(/^\/session/)) return;
    statusHandler.getSamples(client);
  }, [client, router.pathname]);

  useRealtimeStream("system:status", subscriptionKey, (data) => {
    statusHandler.publish(data);
  });

  return null;
}
