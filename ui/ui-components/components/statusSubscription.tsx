import { useEffect, useState } from "react";
import { useRealtimeStream } from "../hooks/useRealtimeStream";
import { SessionHandler } from "../utils/sessionHandler";
import { StatusHandler } from "../utils/statusHandler";

export default function StatusSubscription(props) {
  const {
    sessionHandler,
    statusHandler,
  }: { sessionHandler: SessionHandler; statusHandler: StatusHandler } = props;
  const [active, setActive] = useState(false);

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
