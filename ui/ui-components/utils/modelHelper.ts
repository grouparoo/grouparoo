import Cookies from "universal-cookie";
import { NextPageContext } from "next";

export const getModelFromUrlOrCookie = (ctx: NextPageContext) => {
  const pathParts = ctx.pathname.split("/");
  if (
    pathParts.length > 3 &&
    pathParts[1] === "model" &&
    pathParts[2] === "[modelId]"
  ) {
    return String(ctx.query.modelId);
  }

  const cookies = new Cookies(ctx.req?.headers.cookie);
  return String(cookies.get("grouparooModelId"));
};

export const setModelCookie = (modelId: string, ctx?: NextPageContext) => {
  if (ctx?.res) {
    ctx.res.setHeader("set-cookie", `grouparooModelId=${modelId}; Path=/`);
  } else {
    const cookies = new Cookies();
    cookies.set("grouparooModelId", modelId, { path: "/" });
  }
};
