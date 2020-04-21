import Selector from "../components/selector";
import { CardDeck, Card } from "react-bootstrap";
import Router from "next/router";

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
  return (
    <CardDeck>
      {items.map((item, idx) => {
        let src: string;
        let title: string;
        let subheading: string;
        let description: string;
        let className: string;

        if (item?.app?.guid) {
          // these itmes are connectionApps, i.e.: ({connection: {}, app: {}})
          src = item.app.icon;
          title = item.connection.name;
          subheading = item.app.name;
          description = item.connection.description;
          className =
            item.app.guid === selectedItem.appGuid &&
            item.connection.name === selectedItem.type
              ? "button-color-selected"
              : "button-color";
        } else if (item?.plugin) {
          // these itmes are apps theselves
          src = item.plugin.icon;
          title = item.name;
          className =
            item.name === selectedItem.type
              ? "button-color-selected"
              : "button-color";
        } else {
          throw new Error("i do not know what that is");
        }

        return (
          <div onClick={() => onClick(item)} key={`card-${idx}`}>
            <Selector
              src={src}
              title={title}
              subheading={subheading}
              description={description}
              size={120}
              className={className}
              iconClassName="card-img"
            />
          </div>
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
          onClick={() => Router.push("/app/new")}
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
