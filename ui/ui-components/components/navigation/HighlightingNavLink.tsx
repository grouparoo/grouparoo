import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { navIconStyle, navLiStyle, iconConstrainedStyle } from "../Navigation";

export default function HighlightingNavLink({
  href,
  text,
  icon,
  mainPathSectionIdx,
  small,
}) {
  const router = useRouter();
  const active = useMemo(() => {
    const pathParts = router?.asPath.split("/");
    const hrefParts = href.split("/");
    const mainPathSection = (pathParts[mainPathSectionIdx] || "").split("?")[0];
    const mainHrefSection = hrefParts[mainPathSectionIdx];
    let active =
      mainPathSection === mainHrefSection ||
      `${mainPathSection}s` === mainHrefSection;

    return active;
  }, [globalThis?.location?.href, router, href]);

  return (
    <li style={navLiStyle}>
      <Link href={href}>
        <a role="tab" aria-selected={active} style={navIconStyle}>
          {icon && (
            <FontAwesomeIcon
              style={iconConstrainedStyle}
              icon={icon}
              size="xs"
            />
          )}{" "}
        </a>
      </Link>{" "}
      <Link href={href}>
        <a
          role="tab"
          aria-selected={active}
          style={{
            fontSize: 18,
            paddingLeft: 0,
            marginLeft: small ? 0 : 4,
            color: "white",
          }}
        >
          <span
            style={{ fontWeight: active ? "bold" : undefined }}
            className={small ? "small" : undefined}
          >
            {text}
          </span>
        </a>
      </Link>
    </li>
  );
}
