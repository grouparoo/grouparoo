import Link from "next/link";
import { Button, ButtonProps } from "react-bootstrap";
import { grouparooUiEdition, GrouparooUIEdition } from "../utils/uiEdition";

export default function LinkButton(
  props: ButtonProps & {
    href: string;
    target?: string;
    displayOn?: Array<GrouparooUIEdition>;
    hideOn?: Array<GrouparooUIEdition>;
  }
) {
  const { children, href, as, target, displayOn, hideOn, ...buttonProps } =
    props;

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
