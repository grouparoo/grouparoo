import { Tab, Tabs, Breadcrumb } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { plural } from "pluralize";
import { capitalize } from "../utils/languageHelper";

interface Props {
  name: string;
  draftType?: string;
  tabs: string[];
  defaultTab?: string;
  scopeName?: string;
  hideScope?: boolean;
}

const GrouparooTabs: React.FC<Props> = ({
  name,
  draftType,
  tabs,
  defaultTab,
  scopeName,
  hideScope = false,
}) => {
  const router = useRouter();
  if (!router.pathname) return null;

  const parts = router.asPath.split("/");
  const scope = parts.slice(0, parts.length - 3).join("/");
  const topic = parts[parts.length - 3];
  const id = parts[parts.length - 2];
  const verb = parts[parts.length - 1].split("?")[0];

  const pathnameParts = router.pathname.split("/");
  const pathnameScope = pathnameParts
    .slice(0, pathnameParts.length - 3)
    .join("/");
  const pathnameId = pathnameParts[pathnameParts.length - 2];

  let scopeId: string;
  let scopeTopic: string;

  if (parts.length - 4 > 0) {
    scopeId = parts[parts.length - 4];
    scopeTopic = parts[parts.length - 5];
  }

  if (!defaultTab) defaultTab = tabs[0];

  return (
    <>
      <Breadcrumb>
        {!hideScope && (
          <li className="breadcrumb-item">
            {scopeTopic ? (
              <Link href={`/${scopeTopic}/${scopeId}/overview`}>
                <a>{scopeName || scopeId}</a>
              </Link>
            ) : (
              <Link href={`${scope}/${plural(topic)}`}>
                <a>{capitalize(plural(topic))}</a>
              </Link>
            )}
          </li>
        )}
        <li className="breadcrumb-item">
          <Link href={`${scope}/${topic}/${id}/${defaultTab}`}>
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

      {tabs.includes(verb) && (
        <Tabs
          variant="tabs"
          id="page-tabs"
          activeKey={verb}
          onSelect={(k) => {
            if (k !== verb) {
              router.push(
                `${pathnameScope}/${topic}/${pathnameId}/${k}`,
                `${scope}/${topic}/${id}/${k}`
              );
            }
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={`_tab-${tab}`}
              eventKey={tab}
              title={capitalize(tab)}
            ></Tab>
          ))}
        </Tabs>
      )}
      <br />
    </>
  );
};

export default GrouparooTabs;
