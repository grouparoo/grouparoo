import Selector, { BadgeProp } from "./Selector";
import { CardDeck } from "react-bootstrap";
import { useRouter } from "next/router";
import { Actions } from "../utils/apiData";

type SelectablePlugin = Actions.PluginsList["plugins"][number];
type SelectableApp = Actions.AppsList["apps"][number];

function isSelectableApp(item: any): item is SelectableApp {
  return item.installed === undefined;
}

export default function AppSelectorList({
  onClick,
  items,
  selectedItem,
  displayAddAppButton = false,
}: {
  onClick: Function;
  items: SelectablePlugin[] | SelectableApp[];
  selectedItem: any;
  displayAddAppButton?: boolean;
}) {
  const router = useRouter();

  return (
    <CardDeck>
      {items.map((item: SelectablePlugin | SelectableApp, idx: number) => {
        let src: string;
        let title: string;
        let subheading: string;
        let description: string;
        let className: string;
        let metaBadge: BadgeProp;
        let badges: BadgeProp[] = [];

        if (isSelectableApp(item)) {
          // these items are apps
          src = item.icon;
          title = item.name.replace("@grouparoo/", "");
          className =
            item.name === selectedItem.type
              ? "selector-list-selected"
              : "selector-list";

          if (item.provides.source) {
            badges.push({ message: "source", variant: "primary" });
          } else {
            badges.push({});
          }

          if (item.provides.destination) {
            badges.push({ message: "destination", variant: "info" });
          } else {
            badges.push({});
          }

          if (item["installed"]) {
            metaBadge = { message: "installed", variant: "warning" };
          }
        } else {
          // these items are plugins
          src = item.icon;
          title = item.name.replace("@grouparoo/", "");

          if (item.source) {
            badges.push({ message: "source", variant: "primary" });
          } else {
            badges.push({});
          }

          if (item.destination) {
            badges.push({ message: "destination", variant: "info" });
          } else {
            badges.push({});
          }

          if (item.installed) {
            metaBadge = { message: "installed", variant: "warning" };
          }

          className =
            item.name === selectedItem.name
              ? "selector-list-selected"
              : "selector-list";
        }

        return (
          <Selector
            src={src}
            title={title}
            subheading={subheading}
            description={description}
            size={120}
            className={className}
            iconClassName="card-img"
            badges={badges}
            metaBadge={metaBadge}
            onClick={() => onClick(item)}
            key={`card-${idx}`}
          />
        );
      })}

      {displayAddAppButton ? (
        <div
          style={{
            width: "200px",
            borderRadius: "4px",
            borderWidth: "1px",
            borderColor: "gray",
            borderStyle: "solid",
            margin: "15px",
            padding: "20px",
            cursor: "pointer",
          }}
          onClick={() => router.push("/app/new")}
        >
          <div className="d-flex flex-column">
            <p>Don’t see what you’re looking for?</p>
            <strong>Connect a new App</strong>
          </div>
        </div>
      ) : null}
    </CardDeck>
  );
}
