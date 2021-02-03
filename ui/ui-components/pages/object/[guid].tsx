import Loader from "../../components/loader";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useApi } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";

const idPrefixes = {
  api: "/apiKey/[id]/edit",
  app: "/app/[id]/edit",
  dst: "/destination/[id]/edit",
  evt: "/event/[id]/edit",
  exp: "/export/[id]/edit",
  fil: "/file/[id]/edit",
  grp: "/group/[id]/members",
  imp: "/import/[id]/edit",
  pro: "/profile/[id]/edit",
  rul: "/property/[id]/edit",
  run: "/run/[id]/edit",
  sch: "/source/[id]/overview",
  src: "/source/[id]/overview",
  tea: "/team/[id]/edit",
  tem: "/teamMember/[id]/edit",
};

export default function FindObject(props) {
  const router = useRouter();
  const { errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);

  const id = router.query.id?.toString();
  const prefix = id.split("_")[0];
  const route = idPrefixes[prefix];

  useEffect(() => {
    determineRoute();
  }, []);

  async function determineRoute() {
    if (!route) {
      errorHandler.set({ error: `Sorry, I don't know what a "${id}" is :(` });
    } else if (prefix === "sch") {
      routeScheduleToSource();
    } else {
      const as = route.replace("[id]", id);
      router.push(route, as);
    }
  }

  async function load(model: string, id: string) {
    return execApi("get", `/${model}/${id}`);
  }

  async function routeScheduleToSource() {
    const response: Actions.ScheduleView = await load("schedule", id);
    if (response?.schedule) {
      router.push(
        `/source/[id]/schedule`,
        `/source/${response.schedule.sourceId}/schedule`
      );
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Loader />
    </div>
  );
}
