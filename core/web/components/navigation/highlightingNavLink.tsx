import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { navIconStyle, navLiStyle, iconConstrainedStyle } from "../navigation";

export default function HighlightingNavLink({ href, text, icon, idx }) {
  const router = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mainPathSection = router?.asPath.split("/")[1] || "";
    const mainHrefSection = href.split("/")[1];
    const active =
      mainPathSection === mainHrefSection ||
      `${mainPathSection}s` === mainHrefSection;
    setActive(active);
  }, [globalThis?.location?.href]);

  return (
    <li style={navLiStyle} key={idx}>
      <Link href={href}>
        <a role="tab" aria-selected={active} style={navIconStyle}>
          {icon ? (
            <FontAwesomeIcon
              style={iconConstrainedStyle}
              icon={icon}
              size="xs"
            />
          ) : null}{" "}
        </a>
      </Link>{" "}
      <Link href={href}>
        <a
          role="tab"
          aria-selected={active}
          style={{
            fontSize: 18,
            paddingLeft: 0,
            color: "white",
          }}
        >
          <span style={{ fontWeight: active ? "bold" : undefined }}>
            {text}
          </span>
        </a>
      </Link>
    </li>
  );
}
