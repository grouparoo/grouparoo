import { Button } from "react-bootstrap";
import Loader from "./loader";

export default function LoadingButton(props) {
  const message = props.disabled ? (
    <Loader size="sm" />
  ) : (
    props.children || "Submit"
  );

  return <Button {...props}>{message}</Button>;
}
