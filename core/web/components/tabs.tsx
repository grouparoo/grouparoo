import { Tab, Tabs, Breadcrumb } from "react-bootstrap";
import Router from "next/router";

export default function GrouparooTabs({
  name,
  tabs,
}: {
  name: string;
  tabs: string[];
}) {
  if (!globalThis.location) {
    return null;
  }

  const parts = globalThis.location.href.split("/");
  const topic = parts[3];
  const guid = parts[4];
  const verb = parts[5].split("?")[0];

  function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function pluralize(s: string) {
    return s + "s"; // TODO: is this good enough?
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href={`/${pluralize(topic)}`}>
          {capitalize(pluralize(topic))}
        </Breadcrumb.Item>
        <Breadcrumb.Item>{name !== "" ? name : "Draft"}</Breadcrumb.Item>
        <Breadcrumb.Item>{capitalize(verb)}</Breadcrumb.Item>
      </Breadcrumb>

      <Tabs
        variant="tabs"
        id="page-tabs"
        activeKey={verb}
        onSelect={(k) => {
          if (k !== verb) {
            Router.push(`/${topic}/[guid]/${k}`, `/${topic}/${guid}/${k}`);
          }
        }}
      >
        {tabs.map((tab) => (
          <Tab key={`_tab-${tab}`} eventKey={tab} title={capitalize(tab)} />
        ))}
      </Tabs>

      <br />
    </>
  );
}
