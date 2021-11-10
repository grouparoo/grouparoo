import { Models } from "../utils/apiData";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function AppIcon({
  model,
  size,
}: {
  model: Models.GrouparooModelType;
  size?: FontAwesomeIconProps["size"];
}) {
  return (
    <FontAwesomeIcon
      icon={model.icon as FontAwesomeIconProps["icon"]}
      size={size ?? "lg"}
    />
  );
}
