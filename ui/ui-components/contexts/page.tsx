import { createContext, useContext } from "react";
import { Actions } from "../utils/apiData";

export interface PageContext {
  clusterName: Actions.NavigationList["clusterName"];
  currentTeamMember: Partial<Actions.NavigationList["teamMember"]>;
  navigation: Actions.NavigationList["navigation"];
  navigationMode: Actions.NavigationList["navigationMode"];
}

export const PageContext = createContext<PageContext>(undefined);

export const usePageContext = () => useContext(PageContext);
