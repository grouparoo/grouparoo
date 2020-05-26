import Loader from "../../components/loader";
import Router from "next/router";

const guidPrefixes = {
  pro: "/profile",
  grp: "/group",
  rul: "/profilePropertyRule",
  app: "/app",
  sch: "/schedule",
  run: "/run",
  dst: "/destination",
  evt: "/event",
  tea: "/team",
  tem: "/teamMember",
  imp: "/import",
  exp: "/export",
};

export default function FindObject({ query, errorHandler }) {
  const guid = query.guid;
  const prefix = guid.split("_")[0];
  const route = guidPrefixes[prefix];

  if (!route) {
    errorHandler.set({ error: `Sorry, I don't know what a "${guid}" is :(` });
  } else {
    const href = `${route}/[guid]/edit`;
    const as = `${route}/${guid}/edit`;
    Router.push(href, as);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Loader />
    </div>
  );
}
