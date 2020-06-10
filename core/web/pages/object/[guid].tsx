import Loader from "../../components/loader";
import Router from "next/router";

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
  // sch: "/schedule/[guid]/edit",
  src: "/source/[guid]/overview",
  tea: "/team/[guid]/edit",
  tem: "/teamMember/[guid]/edit",
};

export default function FindObject({ query, errorHandler }) {
  const guid = query.guid;
  const prefix = guid.split("_")[0];
  const route = guidPrefixes[prefix];

  if (!route) {
    errorHandler.set({ error: `Sorry, I don't know what a "${guid}" is :(` });
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
