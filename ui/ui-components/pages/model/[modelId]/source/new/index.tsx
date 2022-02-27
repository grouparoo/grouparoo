import { useApi } from "../../../../../contexts/api";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useRouter } from "next/router";
import AppSelectorList from "../../../../../components/AppSelectorList";
import { Actions } from "../../../../../utils/apiData";
import LinkButton from "../../../../../components/LinkButton";
import { generateClient } from "../../../../../client/client";
import { useGrouparooModel } from "../../../../../contexts/grouparooModel";
import { withServerErrorHandler } from "../../../../../utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "../../../../../utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  const { modelId } = ctx.query;
  const { sources, total: totalSources } =
    await client.request<Actions.SourcesList>("get", "/sources", {
      modelId,
      limit: 1,
    });
  const isCreatingPrimarySource = totalSources === 0;
  const isPrimarySourceNotReady =
    totalSources === 1 && sources[0].state !== "ready";
  const { connectionApps } = await client.request<Actions.SourceConnectionApps>(
    "get",
    `/sources/connectionApps`
  );

  return {
    props: { connectionApps, isCreatingPrimarySource, isPrimarySourceNotReady },
  };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  connectionApps,
  isCreatingPrimarySource,
  isPrimarySourceNotReady,
}) => {
  const router = useRouter();
  const { client } = useApi();
  const { model } = useGrouparooModel();
  const [loading, setLoading] = useState(false);
  const [app, setApp] = useState({ id: null });

  const [apps, disabledAppIds] = useMemo(() => {
    const appIds: string[] = [];
    const apps = connectionApps.reduce((acc, connectionApp) => {
      if (!appIds.includes(connectionApp.app.id)) {
        acc.push(connectionApp.app);
        appIds.push(connectionApp.app.id);
      }
      return acc;
    }, []);

    const disabledAppIds = apps
      .filter((app) => {
        return (
          connectionApps.filter(
            (c) =>
              c.app.id === app.id &&
              (!isCreatingPrimarySource ||
                c.connection.methods.includes("uniquePropertyBootstrapOptions"))
          ).length === 0
        );
      })
      .map((app) => app.id);

    return [apps, disabledAppIds];
  }, [connectionApps, isCreatingPrimarySource]);

  useEffect(() => {
    if (isPrimarySourceNotReady) {
      router.push(`/model/${model.id}/sources`);
    }
  }, [isPrimarySourceNotReady, model, router]);

  async function updateApp(
    app: Actions.SourceConnectionApps["connectionApps"][number]["app"]
  ) {
    setApp({ id: app.id });
    const matchingApps = connectionApps.filter(
      (c) =>
        c.app.id === app.id &&
        (!isCreatingPrimarySource ||
          c.connection.methods.includes("uniquePropertyBootstrapOptions"))
    );

    if (matchingApps.length > 1) {
      router.push(`/model/${model.id}/source/new/${app.id}`);
    } else {
      if (loading) return;

      setLoading(true);
      const response: Actions.SourceCreate = await client.request(
        "post",
        `/source`,
        {
          appId: app.id,
          modelId: model.id,
          type: matchingApps[0].connection.name,
        }
      );
      if (response?.source) {
        router.push(
          `/model/${response.source.modelId}/source/${response.source.id}/edit`
        );
      } else {
        setLoading(false);
      }
    }
  }

  if (isPrimarySourceNotReady) {
    // The effect hook above will redirect to the sources page
    // Cannot create a new source until the primary source is ready
    return null;
  }

  if (apps.length === 0) {
    return (
      <>
        <Alert variant="primary">
          There are no Apps in the ready state yet.
          <br />
          <br />
          <LinkButton size="sm" href="/apps">
            Add an App
          </LinkButton>
        </Alert>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New Source</title>
      </Head>

      <h1>
        Choose App for new {isCreatingPrimarySource ? "Primary " : ""}Source
      </h1>

      {isCreatingPrimarySource && (
        <p>
          Some apps may be disabled because not all apps are compatible for
          creating a <strong>Primary</strong> Source.
        </p>
      )}

      <Form id="form">
        <AppSelectorList
          onClick={updateApp}
          selectedItem={app}
          items={apps}
          displayAddAppButton={true}
          disabledAppIds={disabledAppIds}
        />
      </Form>
    </>
  );
};

export default Page;
