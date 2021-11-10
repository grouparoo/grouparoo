import { Image, Badge } from "react-bootstrap";

export default function AppIcon({
  src = "",
  size = 50,
  fluid = false,
  className = "",
}: {
  src?: string;
  size?: number;
  fluid?: boolean;
  className?: string;
}) {
  if (!src || src === "") {
    return (
      <div
        style={{
          padding: 10,
          textAlign: "center",
          height: fluid ? null : size,
          width: fluid ? null : size,
        }}
      >
        <br />
        <Badge>
          <em>no icon</em>
        </Badge>
      </div>
    );
  }

  if (fluid) {
    return <Image src={src} className={className} rounded fluid />;
  } else {
    return (
      <div style={{ paddingTop: fluid ? "100%" : undefined }}>
        <Image
          src={src}
          rounded
          className={className}
          style={{ height: size, width: size }}
        />
      </div>
    );
  }
}
