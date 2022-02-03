import { createContext, useContext } from "react";
import { Client } from "../client/client";

export const ApiContext = createContext({
  client: new Client(),
});
export const useApi = () => useContext(ApiContext);
