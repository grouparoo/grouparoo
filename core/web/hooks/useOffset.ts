import { useState } from "react";
import { useRouter } from "next/router";

export function useOffset(defaultValue = 0) {
  const router = useRouter();
  const [offset, setOffset] = useState(
    parseInt(router.query.offset?.toString() || defaultValue.toString())
  );

  return { offset, setOffset };
}
