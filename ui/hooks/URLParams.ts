import { useState } from "react";
import { useRouter } from "next/router";

export function updateURLParams(
  router: ReturnType<typeof useRouter>,
  args: {
    [key: string]: number | string;
  }
) {
  let url = `${globalThis.location.pathname}?`;

  for (const k in args) {
    const v = args[k];
    if (typeof v === "number") {
      if (v && v !== 0) url += `${k}=${v}&`;
    } else {
      if (v && v !== "") url += `${k}=${escape(v)}&`;
    }
  }

  const routerMethod =
    url === `${globalThis.location.pathname}?` ? "replace" : "push";

  router[routerMethod](router.route, url, { shallow: true });
}

export function useOffset(defaultValue = 0) {
  const router = useRouter();
  const [offset, setOffset] = useState(
    parseInt(router.query.offset?.toString() || defaultValue.toString(), 10)
  );

  return { offset, setOffset };
}
