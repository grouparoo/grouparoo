import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../components/Loader";

export default function TeamMemberRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/teams");
  }, []);

  return <Loader />;
}
