import { Tab, Tabs, Breadcrumb } from "react-bootstrap";
import { useRouter } from "next/router";
import { capitalize } from "../../utils/languageHelper";

export default function ResqueTabs() {
  const router = useRouter();
  if (!router.pathname) return null;

  const tabs = [
    "overview",
    "delayed",
    "queue",
    "failed",
    "locks",
    "redis",
    "workers",
  ];

  const parts = router.asPath.split("/");
  const key = parts[2].split("?")[0];
  const subKey = parts[3]?.split("?")[0];

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
