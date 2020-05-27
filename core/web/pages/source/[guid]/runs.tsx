import Head from "next/head";
import RunsList from "../../../components/runs/list";
import { useApi } from "../../../hooks/useApi";
import { useState } from "react";
import SourceTabs from "../../../components/tabs/source";
import { Button } from "react-bootstrap";

export default function Page(props) {
  const { errorHandler, successHandler, source } = props;
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);

  async function enqueueScheduleRun() {
    setLoading(true);
    try {
      await execApi("post", `/schedule/${source.schedule.guid}/run`);
      successHandler.set({ message: "run enqueued" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>

      <SourceTabs source={source} />

      <Button
        size="sm"
        variant="warning"
        disabled={loading}
        onClick={() => {
          enqueueScheduleRun();
        }}
      >
        Run Now
      </Button>
      <hr />
      <br />

      <RunsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(null, ctx);
  const { source } = await execApi("get", `/source/${guid}`);
  const runsListInitialProps = await RunsList.hydrate(ctx);
  return { source, ...runsListInitialProps };
};
