import { Tab, Tabs, Breadcrumb } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { plural } from "pluralize";
import { capitalize } from "../utils/languageHelper";

export default function GrouparooTabs({
  name,
  draftType,
  tabs,
  defaultTab,
}: {
  name: string;
  draftType?: string;
  tabs: string[];
  defaultTab?: string;
}) {
  const router = useRouter();
  if (!router.pathname) return null;

  const parts = router.asPath.split("/");
  const topic = parts[1];
  const id = parts[2];
  const verb = parts[3].split("?")[0];

  if (!defaultTab) defaultTab = tabs[0];

  return (
    <>
      <Breadcrumb>
        <li className="breadcrumb-item">
          <Link href={`/${plural(topic)}`}>
            <a>{capitalize(plural(topic))}</a>
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link
            href={`/${topic}/[id]/${defaultTab}`}
            as={`/${topic}/${id}/${defaultTab}`}
          >
            <a>
              {name !== ""
                ? name
                : draftType
                ? `${capitalize(draftType)} Draft`
                : "Draft"}
            </a>
          </Link>
        </li>
        <Breadcrumb.Item>{capitalize(verb)}</Breadcrumb.Item>
      </Breadcrumb>

      <Tabs
        variant="tabs"
        id="page-tabs"
        activeKey={verb}
        onSelect={(k) => {
          if (k !== verb) {
            router.push(`/${topic}/[id]/${k}`, `/${topic}/${id}/${k}`);
          }
        }}
      >
        {tabs.map((tab) => (
          <Tab key={`_tab-${tab}`} eventKey={tab} title={capitalize(tab)}></Tab>
        ))}
      </Tabs>

      <br />
    </>
  );
}
