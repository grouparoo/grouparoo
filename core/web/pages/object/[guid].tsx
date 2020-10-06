import Loader from "../../components/loader";
import { useRouter } from "next/router";
import { useApi } from "../../hooks/useApi";

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
  rul: "/profilePropertyRule/[guid]/edit",
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

  async function load(model: string, guid: string) {
    return execApi("get", `/${model}/${guid}`);
  }

  async function routeScheduleToSource() {
    const response = await load("schedule", guid);
    if (response?.schedule) {
      router.push(
        `/source/[guid]/schedule`,
        `/source/${response.schedule.source.guid}/schedule`
      );
    }
  }

  if (!route) {
    errorHandler.set({ error: `Sorry, I don't know what a "${guid}" is :(` });
  } else if (prefix === "sch") {
    routeScheduleToSource();
  } else {
    const as = route.replace("[guid]", guid);
    router.push(route, as);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Loader />
    </div>
  );
}
