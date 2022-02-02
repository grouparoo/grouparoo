import { GetServerSidePropsContext, NextPageContext } from "next";
import { AppContext } from "next/app";

export type NextContextType =
  | "AppContext"
  | "NextPageContext"
  | "ServerSidePropsContext";

function isAppContext(ctx: unknown): ctx is AppContext {
  return !!ctx.hasOwnProperty("ctx");
}

function getNextContextType(ctx: unknown): NextContextType {
  if (isAppContext(ctx)) {
    return "AppContext";
  }

  if (!!ctx.hasOwnProperty("AppTree")) {
    return "NextPageContext";
  }

  if (!!ctx.hasOwnProperty(".m.")) {
    return "ServerSidePropsContext";
  }

  return undefined;
}

export const getRequestContext =
  (ctx: AppContext | NextPageContext | GetServerSidePropsContext) => () => ({
    type: getNextContextType(ctx),
    req: isAppContext(ctx) ? ctx.ctx.req : ctx.req,
    res: isAppContext(ctx) ? ctx.ctx.res : ctx.res,
  });
