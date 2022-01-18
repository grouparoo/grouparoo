import { Tab, Tabs, Breadcrumb } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { plural } from "pluralize";
import { capitalize } from "../utils/languageHelper";
import { useMemo } from "react";

interface Props {
  name: string;
  parentNames?: string[];
  draftType?: string;
  tabs: string[];
  defaultTab?: string;
  hideScopeBreadcrumb?: boolean;
}

interface GrouparooTabTopic {
  type: string;
  id: string;
  href: string;
  name: string;
}

const GrouparooTabs: React.FC<Props> = ({
  name,
  parentNames,
  draftType,
  tabs,
  defaultTab,
  hideScopeBreadcrumb,
}) => {
  const router = useRouter();

  const parts = router.asPath.split("?")[0].split("/");
  const pathnameParts = router.pathname?.split("?")[0].split("/");
  const numParts = parts.length;
  const verb = parts[numParts - 1];

  defaultTab ??= tabs[0];

  const navigateToTab = useMemo<(tabName: string) => void>(() => {
    const scope = parts.slice(0, parts.length - 3).join("/");
    const topic = parts[parts.length - 3];
    const pathnameScope = pathnameParts
      .slice(0, pathnameParts.length - 3)
      .join("/");
    const pathnameId = pathnameParts[pathnameParts.length - 2];
    const id = parts[parts.length - 2];

    return (tabName: string) => {
      if (verb === tabName) return;

      router.push(
        `${pathnameScope}/${topic}/${pathnameId}/${tabName}`,
        `${scope}/${topic}/${id}/${tabName}`
      );
    };
  }, [parts, pathnameParts]);

  const topics = useMemo<GrouparooTabTopic[]>(
    () =>
      parts.slice(1, numParts - 1).reduce((acc, type, index, values) => {
        if (index % 2 === 1) return acc;

        const id = values[index + 1];
        const parentName = parentNames?.[Math.floor(index / 2)];
        const hrefRoot: string = `${parts.slice(0, index + 3).join("/")}`;

        let page: string = "overview";
        let topicName: string;

        if (parentName) {
          topicName = parentName;
        } else if (index === numParts - 4) {
          topicName =
            name !== ""
              ? name
              : draftType
              ? `${capitalize(draftType)} Draft`
              : "Draft";
          page = defaultTab;
        } else {
          topicName = capitalize(plural(id));
        }

        if (index === 0 && !hideScopeBreadcrumb) {
          // Add the scope list page. E.g. Apps.
          acc.push({
            type,
            id: "list",
            name: capitalize(plural(type)),
            href: `/${plural(type)}`,
          });
        }

        acc.push({
          type,
          id,
          name: topicName,
          href: `${hrefRoot}/${page}`,
        });

        return acc;
      }, [] as GrouparooTabTopic[]),
    [numParts, draftType, defaultTab, parentNames]
  );

  if (!router.pathname) return null;

  return (
    <>
      <Breadcrumb>
        {topics.map((topic) => (
          <li
            key={`breadcrumb_${topic.type}_${topic.id}`}
            className="breadcrumb-item"
          >
            <Link href={topic.href}>
              <a>{topic.name}</a>
            </Link>
          </li>
        ))}
        <Breadcrumb.Item>{capitalize(verb)}</Breadcrumb.Item>
      </Breadcrumb>

      {tabs.includes(verb) && (
        <Tabs
          variant="tabs"
          id="page-tabs"
          activeKey={verb}
          onSelect={navigateToTab}
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
