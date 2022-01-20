import { createContext, useContext, useMemo } from "react";
import type { IncomingMessage, ServerResponse } from "http";
import { Client } from "../client/client";

export const ApiContext =
  createContext<ReturnType<typeof useApiInitialState>>(undefined);

export const useApiInitialState = (serverClient?: Client) => {
  const client = useMemo(() => serverClient ?? new Client(), [serverClient]);

  return { client };
};

export const useApi = () => useContext(ApiContext);
