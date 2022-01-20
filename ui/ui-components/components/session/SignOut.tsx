import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  errorHandler,
  sessionHandler,
  successHandler,
} from "../../eventHandlers";
import { UseApi } from "../../hooks/useApi";
import { disconnectWebsocket } from "../../hooks/useRealtimeStream";
import Loader from "../Loader";

export default function SignOutForm(props) {
  const { execApi } = UseApi(props, errorHandler);
  const router = useRouter();

  useEffect(() => {
    load();
  }, []);

  async function load() {
    window.localStorage.clear();
    disconnectWebsocket();

    try {
      await execApi("delete", `/session`);
      successHandler.set({ message: "Signed Out" });
      sessionHandler.set({ firstName: "" });
    } catch (error) {
      console.error(error);
    } finally {
      router.push("/");
    }
  }

  return <Loader />;
}
