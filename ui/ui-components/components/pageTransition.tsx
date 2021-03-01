import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

export default function PageTransition() {
  const router = useRouter();
  const delay = 1000 * 2; // 2 seconds
  let timer: NodeJS.Timeout;

  useEffect(() => {
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", stop);
    router.events.on("routeChangeError", stop);

    () => {
      stop();
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", stop);
      router.events.off("routeChangeError", stop);
    };
  }, []);

  function start() {
    timer = setTimeout(NProgress.start, delay);
  }

  function stop() {
    clearTimeout(timer);
    NProgress.done();
    NProgress.remove();
  }

  return null;
}
