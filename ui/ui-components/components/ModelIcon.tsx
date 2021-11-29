import { Models } from "../utils/apiData";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function AppIcon({
  model,
  size,
  ...props
}: {
  model: Models.GrouparooModelType;
} & Omit<FontAwesomeIconProps, "icon">) {
  return (
    <FontAwesomeIcon
      {...props}
      icon={model.icon as FontAwesomeIconProps["icon"]}
      size={size ?? "lg"}
    />
  );
}
