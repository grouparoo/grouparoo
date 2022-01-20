import type { GetServerSidePropsContext, NextPageContext } from "next";
import type { AppContext } from "next/app";
import { createContext, useContext } from "react";
import { Client } from "../client/client";

export const ApiContext = createContext<{ client: Client }>(undefined);
export const useApi = () => useContext(ApiContext);

export const generateClient = (
  ctx: AppContext | NextPageContext | GetServerSidePropsContext
) => new Client(getRequestContext(ctx));

function isAppContext(ctx: unknown): ctx is AppContext {
  return !!ctx.hasOwnProperty("ctx");
}

export const getRequestContext =
  (ctx: AppContext | NextPageContext | GetServerSidePropsContext) => () => ({
    req: isAppContext(ctx) ? ctx.ctx.req : ctx.req,
    res: isAppContext(ctx) ? ctx.ctx.res : ctx.res,
  });