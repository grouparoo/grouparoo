import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../loader";
import { useApi } from "../../hooks/useApi";
import { disconnectWebsocket } from "../../hooks/useRealtimeStream";
import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";
import { SessionHandler } from "../../utils/sessionHandler";

export default function SignOutForm(props) {
  const {
    errorHandler,
    successHandler,
    sessionHandler,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    sessionHandler: SessionHandler;
  } = props;
  const { execApi } = useApi(props, errorHandler);
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
