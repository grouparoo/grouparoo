import { useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import Router from "next/router";
import Loader from "./../../loader";
import { create } from "domain";

export default function ({ apiVersion, errorHandler, successHandler, source }) {
  const { execApi } = useApi(errorHandler);

  useEffect(() => {
    create();
  }, []);

  async function create() {
    const data = {
      sourceGuid: source.guid,
      recurring: false,
    };

    const response = await execApi("post", `/api/${apiVersion}/schedule`, data);

    if (response?.schedule) {
      successHandler.set({ message: "Schedule Created" });
      Router.push(`/schedule/${response.schedule.guid}`);
    }
  }

  return <Loader />;
}
