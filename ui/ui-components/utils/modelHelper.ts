import Cookies from "universal-cookie";
import router from "next/router";
import { plural } from "pluralize";
import { NextPageContext } from "next";

export const onChangeModelId = async (newModelId: string) => {
  const cookies = new Cookies();
  cookies.set("grouparooModelId", newModelId, { path: "/" });

  if (router.pathname.match(/^\/model\//)) {
    const pathParts = router.pathname.split("/");
    let newPath = router.pathname;

    if (pathParts.length >= 5 && pathParts[4] !== "new") {
      // redirect /model/old/source/abc to /model/new/sources
      const topic = pathParts[3];
      newPath = `/model/[modelId]/${plural(topic)}`;
    }

    // only keep path params for new url
    const newQuery: typeof router.query = Object.keys(router.query).reduce(
      (query, paramName) => {
        if (newPath.includes(`[${paramName}]`)) {
          query[paramName] = router.query[paramName];
        }
        return query;
      },
      {}
    );

    newQuery.modelId = newModelId;

    router.push({
      query: newQuery,
      pathname: newPath,
    });
  } else {
    // model is not in url,
    // but we should still refresh to update nav menu
    router.reload();
  }
};

export const getModelFromUrlOrCookie = (ctx: NextPageContext) => {
  let modelId: string;
  if (ctx.pathname.match("/model/")) {
    modelId = String(ctx.query.modelId);
  } else {
    const cookies = new Cookies(ctx.req?.headers.cookie);
    modelId = cookies.get("grouparooModelId");
  }

  return modelId;
};
