import { createContext, useContext } from "react";
import type { Client } from "../client/client";

export const ApiContext = createContext<{ client: Client }>(undefined);
export const useApi = () => useContext(ApiContext);
