import AppIcon from "../components/appIcon";

export default function Selector({
  src = "",
  title = "",
  size = 50,
  iconClassName = "",
  subheading = "",
  description = "",
  className = "",
  onClick = () => {},
}: {
  src: string;
  title: string;
  className: string;
  size?: number;
  iconClassName?: string;
  subheading?: string;
  description?: string;
  onClick?: any;
}) {
  return (
    <div
      style={{
        width: 200,
        borderRadius: 4,
        borderColor: "gray",
        color: "white",
        margin: 15,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 5,
        paddingLeft: 5,
        cursor: "pointer",
      }}
      className={className}
      onClick={onClick}
    >
      <div className="d-flex flex-column">
        <div
          className="align-self-center"
          style={{
            backgroundColor: "white",
            width: 140,
            height: 140,
            borderRadius: 4,
            paddingTop: 5,
            textAlign: "center",
            wordWrap: "break-word",
          }}
        >
          <AppIcon className={iconClassName} src={src} size={size} />
        </div>
        <br />
        <h4 className="align-self-center" style={{ textAlign: "center" }}>
          {title}
        </h4>
        {subheading || description ? (
          <p style={{ textAlign: "center" }}>
            <br />
            <strong>{subheading}</strong>
            <br />
            <br />
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
