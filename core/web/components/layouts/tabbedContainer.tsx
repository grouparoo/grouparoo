import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Tab, Tabs, Breadcrumb } from "react-bootstrap";
import { ErrorHandler } from "../../utils/errorHandler";
import Router from "next/router";
import Head from "next/head";

export default function ({
  type,
  query,
  defaultTab,
  errorHandler,
  name,
  children,
}: {
  type: string; // the name of the type, like "profile"
  query: { [key: string]: any }; // the query object - the guid of the item, like "pro_abc123"; the active tab from the url, set via "?tab=edit"
  defaultTab: string; // the starting tab when none is set in the URL
  errorHandler: ErrorHandler; //the error subscription object
  apiVersion: string | number; // the version of the Grouparoo API we are using
  name: string; // the name to render in the breadcrumb
  children: any; // react children
}) {
  const { guid, tab } = query;
  const [key, setKey] = useState(tab && tab !== "" ? tab : defaultTab);
  const { execApi } = useApi(errorHandler);

  if (!Array.isArray(children)) {
    children = [children];
  }

  function handleTabChange(_key) {
    setKey(_key);
    const url = `/${type}/${guid}?tab=${_key}`;
    Router.push(Router.route, url, { shallow: true });
  }

  function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function pluralize(s: string) {
    return s + "s"; // TODO: is this good enough?
  }

  return (
    <>
      <Head>
        <title>
          Grouparoo: {capitalize(type)} - {capitalize(key)}
        </title>
      </Head>

      <Breadcrumb>
        <Breadcrumb.Item href={`/${pluralize(type)}`}>
          {capitalize(pluralize(type))}
        </Breadcrumb.Item>
        <Breadcrumb.Item>{name}</Breadcrumb.Item>
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
          if (child && child.key) {
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
          }
        })}
      </Tabs>
    </>
  );
}
