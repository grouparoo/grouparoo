import { Tab, Tabs, Breadcrumb } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

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
  if (!globalThis.location) return null;
  const router = useRouter();

  const parts = globalThis.location.href.split("/");
  const topic = parts[3];
  const guid = parts[4];
  const verb = parts[5].split("?")[0];

  if (!defaultTab) defaultTab = tabs[0];

  return (
    <>
      <Breadcrumb>
        <li className="breadcrumb-item">
          <Link href={`/${pluralize(topic)}`}>
            <a>{capitalize(pluralize(topic))}</a>
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link
            href={`/${topic}/[guid]/${defaultTab}`}
            as={`/${topic}/${guid}/${defaultTab}`}
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
            router.push(`/${topic}/[guid]/${k}`, `/${topic}/${guid}/${k}`);
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

export function capitalize(s: string) {
  return s
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function pluralize(s: string) {
  return s + "s"; // TODO: is this good enough?
}
