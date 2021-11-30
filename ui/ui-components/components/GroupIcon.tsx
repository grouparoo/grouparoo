import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function AppIcon({
  size,
  ...props
}: Omit<FontAwesomeIconProps, "icon">) {
  return <FontAwesomeIcon {...props} icon={"users"} size={size ?? "lg"} />;
}
