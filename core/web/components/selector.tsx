import AppIcon from "../components/appIcon";

export default function Selector({
  src = "",
  title = "",
  size = 50,
  iconClassName = "",
  subheading = "",
  description = "",
  className = "",
}: {
  src: string;
  title: string;
  className: string;
  size?: number;
  iconClassName?: string;
  subheading?: string;
  description?: string;
}) {
  return (
    <div
      style={{
        width: "200px",
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
    >
      <div className="d-flex flex-column">
        <div
          className="align-self-center"
          style={{
            backgroundColor: "white",
            width: "140px",
            height: "140px",
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
