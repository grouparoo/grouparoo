import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Models } from "../utils/apiData";

interface GrouparooModelContext {
  model: Models.GrouparooModelType;
}

export const GrouparooModelContext =
  createContext<GrouparooModelContext>(undefined);

export const useGrouparooModel = () => useContext(GrouparooModelContext);
