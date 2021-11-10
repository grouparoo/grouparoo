import * as React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader({ size }: { size?: "sm" }) {
  return <Spinner animation="grow" role="status" size={size} />;
}
