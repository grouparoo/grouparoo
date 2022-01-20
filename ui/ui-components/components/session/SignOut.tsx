import { useEffect } from "react";
import { useRouter } from "next/router";
import { sessionHandler, successHandler } from "../../eventHandlers";
import { disconnectWebsocket } from "../../hooks/useRealtimeStream";
import Loader from "../Loader";
import { useApi } from "../../contexts/api";

export default function SignOutForm(props) {
  const { client } = useApi();
  const router = useRouter();

  useEffect(() => {
    load();
  }, []);

  async function load() {
    window.localStorage.clear();
    disconnectWebsocket();

    try {
      await client.request("delete", `/session`);
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
