import Loader from "../../components/loader";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useApi } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";

const guidPrefixes = {
  api: "/apiKey/[guid]/edit",
  app: "/app/[guid]/edit",
  dst: "/destination/[guid]/edit",
  evt: "/event/[guid]/edit",
  exp: "/export/[guid]/edit",
  fil: "/file/[guid]/edit",
  grp: "/group/[guid]/members",
  imp: "/import/[guid]/edit",
  pro: "/profile/[guid]/edit",
  rul: "/property/[guid]/edit",
  run: "/run/[guid]/edit",
  sch: "/source/[guid]/overview",
  src: "/source/[guid]/overview",
  tea: "/team/[guid]/edit",
  tem: "/teamMember/[guid]/edit",
};

export default function FindObject(props) {
  const router = useRouter();
  const { errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);

  const guid = router.query.guid?.toString();
  const prefix = guid.split("_")[0];
  const route = guidPrefixes[prefix];

  useEffect(() => {
    determineRoute();
  }, []);

  async function determineRoute() {
    if (!route) {
      errorHandler.set({ error: `Sorry, I don't know what a "${guid}" is :(` });
    } else if (prefix === "sch") {
      routeScheduleToSource();
    } else {
      const as = route.replace("[guid]", guid);
      router.push(route, as);
    }
  }

  async function load(model: string, guid: string) {
    return execApi("get", `/${model}/${guid}`);
  }

  async function routeScheduleToSource() {
    const response: Actions.ScheduleView = await load("schedule", guid);
    if (response?.schedule) {
      router.push(
        `/source/[guid]/schedule`,
        `/source/${response.schedule.sourceGuid}/schedule`
      );
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Loader />
    </div>
  );
}
