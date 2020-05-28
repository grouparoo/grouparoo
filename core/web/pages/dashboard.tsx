import { useApi } from "./../hooks/useApi";
import { useEffect, useState } from "react";
import Head from "next/head";
import TotalsList from "../components/visualizations/totals";
import Welcome from "../components/visualizations/welcome";
import Loader from "./../components/loader";

export default function (props) {
  const [appsCount, setAppsCount] = useState(-1);
  const { errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi("get", `/apps/`);
    if (response?.apps) {
      setAppsCount(response?.total);
    }
  }

  if (appsCount === -1) {
    return <Loader />;
  } else if (appsCount === 1) {
    return (
      <>
        <HeaderTitle title="Welcome" />
        <Welcome {...props} />
      </>
    );
  } else if (appsCount > 1) {
    return (
      <>
        <HeaderTitle title="Dashboard" />
        <h1>Dashboard</h1>
        <TotalsList {...props} />
      </>
    );
  }
}

function HeaderTitle({ title }) {
  return (
    <Head>
      <title>Grouparoo: {title}</title>
    </Head>
  );
}
