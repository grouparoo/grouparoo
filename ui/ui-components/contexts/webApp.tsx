import { createContext, useContext } from "react";
import { Actions } from "../utils/apiData";

export interface WebAppContext {
  clusterName: Actions.NavigationList["clusterName"];
  currentTeamMember: Partial<Actions.NavigationList["teamMember"]>;
  navigation: Actions.NavigationList["navigation"];
  navigationMode: Actions.NavigationList["navigationMode"];
}

export const WebAppContext = createContext<WebAppContext>(undefined);

export const useWebAppContext = () => useContext(WebAppContext);
