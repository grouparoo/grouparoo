import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

export default function PageTransition() {
  const router = useRouter();
  const delay = 1000 * 2; // 2 seconds
  let timer: NodeJS.Timeout;

  useEffect(() => {
    stop();
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", stop);
    router.events.on("routeChangeError", stop);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", stop);
      router.events.off("routeChangeError", stop);
    };
  }, []);

  function start(_nextPage: string) {
    const simpleNextPath = _nextPage.split("?")[0];
    const currentPath = window.location.pathname;
    console.log({ currentPath, simpleNextPath });
    if (currentPath !== simpleNextPath) {
      timer = setTimeout(NProgress.start, delay);
    }
  }

  function stop() {
    clearTimeout(timer);
    NProgress.done();
    NProgress.remove();
  }

  return null;
}
