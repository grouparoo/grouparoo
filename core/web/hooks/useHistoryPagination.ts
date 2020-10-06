import { useEffect } from "react";
import { useRouter } from "next/router";

export function useHistoryPagination(
  staticVariable: any,
  searchKey: string,
  setter: Function
) {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window?.location?.search);
    const _browserValue = urlParams.get(searchKey) || "0";
    if (parseInt(_browserValue) !== parseInt(staticVariable)) {
      setter(_browserValue);
    }
  }, [router.query]);
}
