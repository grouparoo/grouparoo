import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function AppIcon({
  size,
}: {
  size?: FontAwesomeIconProps["size"];
}) {
  return <FontAwesomeIcon icon={"users"} size={size ?? "lg"} />;
}
