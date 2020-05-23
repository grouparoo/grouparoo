import { useEffect } from "react";
import Router from "next/router";
import Loader from "../../loader";
import { useApi } from "../../../hooks/useApi";

export default function ({ errorHandler, successHandler, sessionHandler }) {
  const { execApi } = useApi(errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    window.localStorage.clear();
    await execApi("delete", `/session`);
    successHandler.set({ message: "Signed Out" });
    sessionHandler.set();
    Router.push("/");
  }

  return <Loader />;
}
