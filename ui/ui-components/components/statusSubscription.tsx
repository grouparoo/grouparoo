import { useEffect, useState } from "react";
import { useRealtimeStream } from "../hooks/useRealtimeStream";
import { SessionHandler } from "../utils/sessionHandler";
import { StatusHandler } from "../utils/statusHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { useApi } from "../hooks/useApi";

export default function StatusSubscription(props) {
  const {
    sessionHandler,
    statusHandler,
    errorHandler,
  }: {
    sessionHandler: SessionHandler;
    statusHandler: StatusHandler;
    errorHandler: ErrorHandler;
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const [active, setActive] = useState(false);

  useEffect(() => {
    statusHandler.getSamples(execApi);
  }, []);

  useRealtimeStream("system:status", "status-subscription", (data) => {
    statusHandler.publish(data);
  });

  // useEffect(() => {
  //   const signedIn =
  //     localStorage.getItem("session:csrfToken").length > 0 ? true : false;
  //   setActive(signedIn);

  //   sessionHandler.subscribe("status-subscription", (_teamMember) => {
  //     if (_teamMember.id) {
  //       setActive(true);
  //     } else {
  //       setActive(false);
  //     }
  //   });

  //   return () => {
  //     sessionHandler.unsubscribe("status-subscription");
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!active) return;
  // }, [active]);

  // console.log({ active });

  return null;
}
