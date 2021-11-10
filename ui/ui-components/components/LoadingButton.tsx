import { Button, ButtonProps } from "react-bootstrap";
import { GrouparooUIEdition, grouparooUiEdition } from "../utils/uiEdition";
import Loader from "./Loader";

export default function LoadingButton(
  props: ButtonProps & {
    displayOn?: GrouparooUIEdition[];
    hideOn?: GrouparooUIEdition[];
  }
) {
  const { children, displayOn, hideOn, ...buttonProps } = props;

  if (displayOn && !displayOn.includes(grouparooUiEdition())) {
    return null;
  }

  if (hideOn && hideOn.includes(grouparooUiEdition())) {
    return null;
  }

  const message = props.disabled ? <Loader size="sm" /> : children || "Submit";
  return <Button {...buttonProps}>{message}</Button>;
}
