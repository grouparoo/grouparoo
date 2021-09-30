import Selector, { BadgeProp } from "./selector";
import { CardDeck } from "react-bootstrap";
import { useRouter } from "next/router";
import { Actions } from "../utils/apiData";

type SelectableApp = Actions.AppOptions["types"][number];
type SelectablePackage = Actions.PluginsAvailableList["plugins"][number];
type SelectableSource =
  Actions.SourceConnectionApps["connectionApps"][number]["app"];
type SelectableDestination =
  Actions.DestinationConnectionApps["connectionApps"][number]["app"];

function isSelectableApp(
  item:
    | SelectableApp
    | SelectablePackage
    | SelectableSource
    | SelectableDestination
): item is SelectableApp {
  return (item as SelectableApp).plugin !== undefined;
}

function isSelectablePackage(
  item:
    | SelectableApp
    | SelectablePackage
    | SelectableSource
    | SelectableDestination
): item is SelectablePackage {
  return (item as SelectablePackage).npmUrl !== undefined;
}

export default function AppSelectorList({
  onClick,
  items,
  selectedItem,
  displayAddAppButton = false,
}: {
  onClick: Function;
  items:
    | SelectableApp[]
    | SelectablePackage[]
    | SelectableSource[]
    | SelectableDestination[];
  selectedItem: any;
  displayAddAppButton?: boolean;
}) {
  const router = useRouter();

  return (
    <CardDeck>
      {items.map(
        (
          item:
            | SelectableApp
            | SelectablePackage
            | SelectableSource
            | SelectableDestination,
          idx: number
        ) => {
          let src: string;
          let title: string;
          let subheading: string;
          let description: string;
          let className: string;
          let metaBadge: BadgeProp;
          let badges: BadgeProp[] = [];

          if (isSelectableApp(item)) {
            // these items are apps themselves
            src = item.plugin.icon;
            title = item.displayName ?? item.name;
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

            if (item.plugin["installed"]) {
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
            title = item.typeDisplayName;
            subheading = item.type;
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
