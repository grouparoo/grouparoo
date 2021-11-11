import Selector, { BadgeProp } from "./Selector";
import { CardDeck } from "react-bootstrap";
import { useRouter } from "next/router";
import { Actions } from "../utils/apiData";

type SelectablePlugin = Actions.AppOptions["plugins"][number];
type SelectablePackage = Actions.PluginsAvailableList["plugins"][number];
type SelectableApp = Actions.AppsList["apps"][number];

function isSelectablePlugin(item: any): item is SelectablePlugin {
  return (
    item.name !== undefined &&
    item.icon !== undefined &&
    item.pluginApp === undefined
  );
}

function isSelectablePackage(item: any): item is SelectablePackage {
  return item.npmUrl !== undefined;
}

export default function AppSelectorList({
  onClick,
  items,
  selectedItem,
  displayAddAppButton = false,
}: {
  onClick: Function;
  items: SelectablePlugin[] | SelectablePackage[] | SelectableApp[];
  selectedItem: any;
  displayAddAppButton?: boolean;
}) {
  const router = useRouter();

  return (
    <CardDeck>
      {items.map(
        (
          item: SelectablePlugin | SelectablePackage | SelectableApp,
          idx: number
        ) => {
          let src: string;
          let title: string;
          let subheading: string;
          let description: string;
          let className: string;
          let metaBadge: BadgeProp;
          let badges: BadgeProp[] = [];

          if (isSelectablePlugin(item)) {
            // these items are plugins
            src = item.icon;
            title = item.name.replace("@grouparoo/", "");
            className =
              item.name === selectedItem.type
                ? "selector-list-selected"
                : "selector-list";

            if (
              item.connections.filter((c) => c.direction === "import").length >
              0
            ) {
              badges.push({ message: "source", variant: "primary" });
            } else {
              badges.push({});
            }

            if (
              item.connections.filter((c) => c.direction === "export").length >
              0
            ) {
              badges.push({ message: "destination", variant: "info" });
            } else {
              badges.push({});
            }

            if (item["installed"]) {
              metaBadge = { message: "installed", variant: "warning" };
            }
          } else if (isSelectablePackage(item)) {
            // these items are from the plugin manifest on www.grouparoo.com
            src = item.imageUrl;
            title = item.name;
            className =
              item.name === selectedItem.type
                ? "selector-list-selected"
                : "selector-list";

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
          } else {
            // these are apps extracted from connectionApps
            src = item.icon;
            title = item.pluginApp.displayName;
            subheading = item.name;
            className =
              item.id === selectedItem.id
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
        }
      )}

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
