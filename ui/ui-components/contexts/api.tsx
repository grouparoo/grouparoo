import type { GetServerSidePropsContext, NextPageContext } from "next";
import type { AppContext } from "next/app";
import { createContext, useContext, useMemo } from "react";
import { Client } from "../client/client";

export const ApiContext =
  createContext<ReturnType<typeof useApiInitialState>>(undefined);

export const useApiInitialState = (serverClient?: Client) => {
  const client = useMemo(() => serverClient ?? new Client(), [serverClient]);

  return { client };
};

export const useApi = () => useContext(ApiContext);

function isAppContext(ctx: unknown): ctx is AppContext {
  return !!ctx.hasOwnProperty("ctx");
}

export const getRequestContext =
  (ctx: AppContext | NextPageContext | GetServerSidePropsContext) => () => ({
    req: isAppContext(ctx) ? ctx.ctx.req : ctx.req,
    res: isAppContext(ctx) ? ctx.ctx.res : ctx.res,
  });
