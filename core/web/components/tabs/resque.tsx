import { Tab, Tabs, Breadcrumb } from "react-bootstrap";
import { useRouter } from "next/router";

export default function ResqueTabs() {
  if (!globalThis.location) return null;
  const router = useRouter();

  const tabs = [
    "overview",
    "delayed",
    "queue",
    "failed",
    "locks",
    "redis",
    "workers",
  ];
  const parts = globalThis.location.href.split("/");
  const key = parts[4].split("?")[0];
  const subKey = parts[5]?.split("?")[0];

  function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href={`/resque`}>Resque</Breadcrumb.Item>
        <Breadcrumb.Item href={`/resque/${key}`}>
          {capitalize(key)}
        </Breadcrumb.Item>
        {subKey ? (
          <Breadcrumb.Item href={`/resque/${key}/${subKey}`}>
            {capitalize(subKey)}
          </Breadcrumb.Item>
        ) : null}
      </Breadcrumb>

      <Tabs
        id="page-tabs"
        activeKey={key}
        onSelect={(k) => {
          router.push(`/resque/${k}`);
        }}
        mountOnEnter
        unmountOnExit
      >
        {tabs.map((tab) => (
          <Tab key={`_tab-${tab}`} eventKey={tab} title={capitalize(tab)} />
        ))}
      </Tabs>
      <br />
    </>
  );
}
