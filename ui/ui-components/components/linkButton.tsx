import Link from "next/link";
import { Button, ButtonProps } from "react-bootstrap";
import { grouparooUiEdition, GrouparooUIEdition } from "../utils/uiEdition";

export default function LinkButton(
  props: ButtonProps & {
    href: string;
    as?: string;
    target?: string;
    displayOn?: Array<GrouparooUIEdition>;
    hideOn?: Array<GrouparooUIEdition>;
  }
) {
  const { children, href, as, target, displayOn, hideOn, ...buttonProps } =
    props;

  if (displayOn && !displayOn.includes(grouparooUiEdition)) {
    return null;
  }

  if (hideOn && hideOn.includes(grouparooUiEdition)) {
    return null;
  }

  return (
    <Link href={href} as={as}>
      <a target={target}>
        <Button {...buttonProps}>{children}</Button>
      </a>
    </Link>
  );
}
