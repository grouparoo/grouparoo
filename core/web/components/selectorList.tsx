import Selector from "../components/selector";
import { CardDeck } from "react-bootstrap";
import { useRouter } from "next/router";

function humanizePluginName(name: string) {
  name = name.replace(/-/g, " ");
  name = name.replace(/_/g, " ");
  const words = name.toLowerCase().split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
}

export default function SelectorList({
  onClick,
  items,
  selectedItem,
  displayAddAppButton = false,
}: {
  onClick: Function;
  items: Array<any>;
  selectedItem: any;
  displayAddAppButton?: boolean;
}) {
  const router = useRouter();

  return (
    <CardDeck>
      {items.map((item, idx) => {
        let src: string;
        let title: string;
        let subheading: string;
        let description: string;
        let className: string;
        let badges: { message?: string; variant?: string }[] = [];

        if (item?.app?.guid) {
          // these items are connectionApps, i.e.: ({connection: {}, app: {}})
          src = item.app.icon;
          title = humanizePluginName(item.connection.name);
          subheading = item.app.name;
          description = item.connection.description;
          className =
            item.app.guid === selectedItem.appGuid &&
            item.connection.name === selectedItem.type
              ? "selector-list-selected"
              : "selector-list";
        } else if (item?.plugin) {
          // these items are apps themselves
          src = item.plugin.icon;
          title = humanizePluginName(item.name);
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
        } else {
          throw new Error("I do not know what that is");
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
