import Loader from "../../components/loader";
import Router from "next/router";
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
  const { query, errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);

  const guid = query.guid;
  const prefix = guid.split("_")[0];
  const route = guidPrefixes[prefix];

  async function load(model, guid) {
    return execApi("get", `/${model}/${guid}`);
  }

  async function routeScheduleToSource() {
    const response = await load("schedule", guid);
    if (response?.schedule) {
      Router.push(`/source/${response.schedule.source.guid}/schedule`);
    }
  }

  if (!route) {
    errorHandler.set({ error: `Sorry, I don't know what a "${guid}" is :(` });
  } else if (prefix === "sch") {
    routeScheduleToSource();
  } else {
    const href = route.replace("[guid]", guid);
    Router.push(href);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Loader />
    </div>
  );
}
