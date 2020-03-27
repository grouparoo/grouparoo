import { useEffect } from "react";

export function useHistoryPagination(
  staticVariable: any,
  searchKey: string,
  setter: Function
) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const _browserValue = urlParams.get(searchKey) || "0";
    if (parseInt(_browserValue) !== parseInt(staticVariable)) {
      setter(_browserValue);
    }
  }, [window.location.search]);
}
