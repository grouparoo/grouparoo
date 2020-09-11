import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navIconStyle, navLiStyle, iconConstrainedStyle } from "../navigation";

export default function HighlightingNavLink({ href, text, icon, idx }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const active = globalThis?.location?.pathname === href;
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
          {text}
        </a>
      </Link>
    </li>
  );
}
