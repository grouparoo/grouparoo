import { GetServerSidePropsContext, NextPageContext } from "next";
import { AppContext } from "next/app";

export type NextContext =
  | AppContext
  | NextPageContext
  | GetServerSidePropsContext;

export type NextContextName =
  | "AppContext"
  | "NextPageContext"
  | "GetServerSidePropsContext";

const isAppContext = (ctx: NextContext): ctx is AppContext =>
  !!ctx.hasOwnProperty("ctx");

const getNextContextName = (ctx: NextContext): NextContextName =>
  isAppContext(ctx)
    ? "AppContext"
    : !!ctx.hasOwnProperty("AppTree")
    ? "NextPageContext"
    : "GetServerSidePropsContext";

export const getRequestContext = (ctx: NextContext) => () => ({
  type: getNextContextName(ctx),
  req: isAppContext(ctx) ? ctx.ctx.req : ctx.req,
  res: isAppContext(ctx) ? ctx.ctx.res : ctx.res,
});
