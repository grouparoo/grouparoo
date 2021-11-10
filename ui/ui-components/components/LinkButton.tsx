import Link from "next/link";
import { Button, ButtonProps } from "react-bootstrap";
import { grouparooUiEdition, GrouparooUIEdition } from "../utils/uiEdition";

export default function LinkButton({
  children,
  href,
  as,
  target,
  displayOn,
  hideOn,
  ...buttonProps
}: ButtonProps & {
  href: string;
  target?: string;
  displayOn?: GrouparooUIEdition[];
  hideOn?: GrouparooUIEdition[];
}) {
  if (displayOn && !displayOn.includes(grouparooUiEdition())) {
    return null;
  }

  if (hideOn && hideOn.includes(grouparooUiEdition())) {
    return null;
  }

  if (!href) return <>{children}</>;

  return (
    <Link href={href}>
      <a target={target}>
        <Button {...buttonProps}>{children}</Button>
      </a>
    </Link>
  );
}
