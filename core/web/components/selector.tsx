import AppIcon from "../components/appIcon";

export default function Selector({
  src = "",
  name = "",
  size = 50,
  iconClassName = "",
  className = "",
  key = "",
}: {
  src?: string;
  name?: string;
  size?: number;
  iconClassName?: string;
  className?: string;
  key?: string;
}) {
  return (
    <div
      style={{
        width: "150px",
        height: "200px",
        borderRadius: "4px",
        borderColor: "gray",
        color: "white",
        margin: "15px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingRight: "5px",
        paddingLeft: "5px",
        cursor: "pointer",
      }}
      className={className}
      key={key}
    >
      <div className="d-flex flex-column">
        <div
          className="align-self-center"
          style={{
            backgroundColor: "white",
            width: "100px",
            height: "100px",
            borderRadius: "4px",
            paddingTop: "5px",
            textAlign: "center",
            wordWrap: "break-word",
          }}
        >
          <AppIcon className={iconClassName} src={src} size={size} />
        </div>
        <br />
        <h4 className="align-self-center" style={{ textAlign: "center" }}>
          {name}
        </h4>
      </div>
    </div>
  );
}
