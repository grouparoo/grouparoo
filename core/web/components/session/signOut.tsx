import { useEffect } from "react";
import Router from "next/router";
import Loader from "../loader";
import { useApi } from "../../hooks/useApi";

export default function (props) {
  const { errorHandler, successHandler, sessionHandler } = props;
  const { execApi } = useApi(props, errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    window.localStorage.clear();
    await execApi("delete", `/session`);
    successHandler.set({ message: "Signed Out" });
    sessionHandler.set({ firstName: "" });
    Router.push("/");
  }

  return <Loader />;
}
