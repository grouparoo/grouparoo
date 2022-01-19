import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { navIconStyle, iconConstrainedStyle } from "../Navigation";

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

    // Potential conflict for `/app/new` and `/model/new`
    if (active && mainPathSectionIdx === 2) {
      let objectPathSection = (pathParts[1] || "").split("?")[0];
      let objectHrefSection = hrefParts[1];

      active =
        active &&
        (objectPathSection === objectHrefSection ||
          `${objectPathSection}s` === objectHrefSection);
    }

    return active;
  }, [globalThis?.location?.href, router, href]);

  return (
    <div>
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
    </div>
  );
}
