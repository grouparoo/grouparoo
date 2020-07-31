import Router from "next/router";
import { useEffect } from "react";
import Loader from "../components/loader";

export default function TeamMemberRedirect() {
  useEffect(() => {
    Router.push("/teams");
  }, []);

  return <Loader />;
}
