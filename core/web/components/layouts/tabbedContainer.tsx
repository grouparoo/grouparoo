import { useState, useEffect } from "react";
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
  apiVersion,
  children,
}: {
  type: string; // the name of the type, like "profile"
  query: { [key: string]: any }; // the query object - the guid of the item, like "pro_abc123"; the active tab from the url, set via "?tab=edit"
  defaultTab: string; // the starting tab when none is set in the URL
  errorHandler: ErrorHandler; //the error subscription object
  apiVersion: string | number; // the version of the Grouparoo API we are using
  children: any; // react children
}) {
  const { guid, tab } = query;
  const [key, setKey] = useState(tab && tab !== "" ? tab : defaultTab);
  const { execApi } = useApi(errorHandler);
  const [name, setName] = useState(guid);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi("get", `/api/${apiVersion}/${type}/${guid}`);
    const possibleNameKeys = ["name", "key"];
    possibleNameKeys.forEach((key) => {
      if (response && response[type] && response[type][key]) {
        return setName(response[type][key]);
      }
    });

    if (type === "profile") {
      const propertiesArray = [];
      for (const k in response?.profile?.properties) {
        const hash = response.profile.properties[k];
        hash.key = k;
        propertiesArray.push(hash);
      }

      const uniqueProperties = propertiesArray.filter((prp) => prp.unique);
      if (uniqueProperties.length > 0) {
        const emails = uniqueProperties.filter((prp) => prp.type === "email");
        if (emails[0]) {
          setName(emails[0].value);
        } else {
          setName(uniqueProperties[0].value);
        }
      }
    }
  }

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
