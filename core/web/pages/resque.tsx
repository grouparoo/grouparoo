import { Fragment } from "react";
import ResqueOverview from "../components/lists/resque/overview";
import ResqueDelayed from "../components/lists/resque/delayed";
import ResqueFailed from "../components/lists/resque/failed";
import ResqueLocks from "../components/lists/resque/locks";
import ResqueQueue from "../components/lists/resque/queue";
import ResqueRedis from "../components/lists/resque/redis";
import ResqueWorkers from "../components/lists/resque/workers";

export default function (props) {
  return (
    <ResqueTabs defaultTab="overview" query={props.query}>
      <Fragment key="overview">
        <ResqueOverview {...props} />
      </Fragment>

      <Fragment key="delayed">
        <ResqueDelayed {...props} />
      </Fragment>

      <Fragment key="failed">
        <ResqueFailed {...props} />
      </Fragment>

      <Fragment key="locks">
        <ResqueLocks {...props} />
      </Fragment>

      <Fragment key="queue">
        <ResqueQueue {...props} />
      </Fragment>

      <Fragment key="workers">
        <ResqueWorkers {...props} />
      </Fragment>

      <Fragment key="redis">
        <ResqueRedis {...props} />
      </Fragment>
    </ResqueTabs>
  );
}

import { useState } from "react";
import { Tab, Tabs, Breadcrumb } from "react-bootstrap";
import Router from "next/router";
import Head from "next/head";

function ResqueTabs({
  defaultTab,
  query,
  children,
}: {
  defaultTab: string;
  query: { [key: string]: any };
  children: any;
}) {
  const { tab } = query;
  const [key, setKey] = useState(tab && tab !== "" ? tab : defaultTab);

  if (!Array.isArray(children)) {
    children = [children];
  }

  function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function handleTabChange(_key) {
    setKey(_key);
    const url = `/resque?tab=${_key}`;
    Router.push(Router.route, url, { shallow: true });
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Resque</title>
      </Head>

      <Breadcrumb>
        <Breadcrumb.Item href={`/resque`}>Resque</Breadcrumb.Item>
        <Breadcrumb.Item>{capitalize(key)}</Breadcrumb.Item>
      </Breadcrumb>

      <Tabs
        id="page-tabs"
        activeKey={key}
        onSelect={handleTabChange}
        mountOnEnter
        unmountOnExit
      >
        {children.map((child) => {
          return (
            <Tab
              key={`_tab-${child.key}`}
              eventKey={child.key}
              title={capitalize(child.key)}
            >
              <br />
              {child}
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
}
