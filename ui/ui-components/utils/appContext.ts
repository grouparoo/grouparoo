import { GetServerSidePropsContext, NextPageContext } from "next";
import { AppContext } from "next/app";

function isAppContext(ctx: unknown): ctx is AppContext {
  return !!ctx.hasOwnProperty("ctx");
}
export const getRequestContext =
  (ctx: AppContext | NextPageContext | GetServerSidePropsContext) => () => ({
    req: isAppContext(ctx) ? ctx.ctx.req : ctx.req,
    res: isAppContext(ctx) ? ctx.ctx.res : ctx.res,
  });
