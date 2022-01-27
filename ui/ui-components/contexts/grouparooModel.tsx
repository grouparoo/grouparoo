import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Models } from "../utils/apiData";

interface GrouparooModelContext {
  model: Models.GrouparooModelType;
  setModel: Dispatch<SetStateAction<Models.GrouparooModelType>>;
}

export const GrouparooModelContext =
  createContext<GrouparooModelContext>(undefined);

export const useGrouparooModel = () => useContext(GrouparooModelContext);

export const GrouparooModelContextProvider: React.FC<{
  value: Models.GrouparooModelType;
}> = ({ value: modelProp, children }) => {
  const [updatedModel, setModel] = useState(modelProp);

  useEffect(() => {
    setModel(modelProp);
  }, [modelProp]);

  return (
    <GrouparooModelContext.Provider
      value={{ model: updatedModel || modelProp, setModel }}
    >
      {children}
    </GrouparooModelContext.Provider>
  );
};
