import Loader from "../../components/loader";
import Router from "next/router";

const guidPrefixes = {
  pro: "/profile/[guid]/edit",
  grp: "/group/[guid]/members",
  rul: "/profilePropertyRule/[guid]/edit",
  app: "/app/[guid]/edit",
  run: "/run/[guid]/edit",
  dst: "/destination/[guid]/edit",
  tea: "/team/[guid]/edit",
  tem: "/teamMember/[guid]/edit",
  evt: "/event/[guid]/edit",
  imp: "/import/[guid]/edit",
  exp: "/export/[guid]/edit",
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
