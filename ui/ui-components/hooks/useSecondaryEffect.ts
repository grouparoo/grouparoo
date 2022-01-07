import { useEffect, useRef } from "react";

export const useSecondaryEffect = (method: Function, changeArgs: any[]) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      method();
    } else {
      didMount.current = true;
    }
  }, changeArgs);
};
