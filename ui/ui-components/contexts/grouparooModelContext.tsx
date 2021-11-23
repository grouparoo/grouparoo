import { createContext, useContext } from "react";
import { Models } from "../utils/apiData";

export const GrouparooModelContext =
  createContext<Models.GrouparooModelType>(undefined);

export const useGrouparooModelContext = () => useContext(GrouparooModelContext);

export const GrouparooModelContextProvider: React.FC<{
  model: Models.GrouparooModelType;
}> = ({ model, children }) => (
  <GrouparooModelContext.Provider value={model}>
    {children}
  </GrouparooModelContext.Provider>
);
