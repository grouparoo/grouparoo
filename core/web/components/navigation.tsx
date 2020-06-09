import { useState, useEffect } from "react";
import { Image, Accordion, Button } from "react-bootstrap";
import Link from "next/link";
import { isBrowser } from "../utils/isBrowser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navLiStyle = { marginTop: 20, marginBottom: 20 };

const navIconStyle = {
  fontSize: 18,
  fontWeight: 300,
  paddingLeft: 0,
  marginLeft: 0,
  marginRight: 10,
  color: "white",
  textDecoration: "none",
};

const iconConstrainedStyle = { width: 20 };

function HighlightingNavLink({ href, text, icon, idx }) {
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

export default function Navigation(props) {
  const { navigationMode, navigation, sessionHandler } = props;
  const [teamMember, setTeamMember] = useState(props.currentTeamMember);
  const [height, setHeight] = useState(500);
  const subMenuGreeting = `Hello ${teamMember.firstName} »`;
  const logoLink = teamMember.guid ? "/dashboard" : "/";

  useEffect(() => {
    sessionHandler.subscribe("navigation", (_teamMember) =>
      setTeamMember(_teamMember)
    );

    return () => {
      sessionHandler.unsubscribe("navigation");
    };
  }, []);

  return (
    <div>
      {/* Full Screen Navigation */}
      <div className="d-none d-md-block">
        <div
          id="navigation"
          className="position-fixed bg-dark"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            width: 250,
            minHeight: height,
            paddingLeft: 20,
            paddingRight: 20,
            overflowY: "auto",
            height: "100%",
          }}
        >
          <div style={{ justifyContent: "normal", alignSelf: "flex-start" }}>
            <Link href={logoLink}>
              <a>
                <Image
                  style={{
                    maxHeight: 50,
                    marginTop: 30,
                    marginBottom: 20,
                  }}
                  src="/images/logo/logo.svg"
                />
              </a>
            </Link>

            <ul style={{ padding: 0, margin: 0 }}>
              {navigation.navigationItems.map((nav, idx) => {
                if (nav.type === "link") {
                  return (
                    <HighlightingNavLink
                      key={nav.href}
                      href={nav.href}
                      text={nav.title}
                      icon={nav.icon}
                      idx={idx}
                    />
                  );
                } else if (nav.type === "divider") {
                  return <li key={idx} style={navLiStyle} />;
                } else if (nav.type === "subNavMenu") {
                  return (
                    <li style={navLiStyle} key={idx}>
                      <Accordion>
                        <Accordion.Toggle
                          as={Button}
                          style={{ padding: 0 }}
                          variant="link"
                          eventKey="0"
                        >
                          <span style={navIconStyle}>
                            {nav.icon ? (
                              <FontAwesomeIcon
                                style={iconConstrainedStyle}
                                icon={nav.icon}
                                size="xs"
                              />
                            ) : null}{" "}
                          </span>
                          <span
                            style={{
                              fontSize: 18,
                              fontWeight: 300,
                              paddingLeft: 0,
                              color: "white",
                            }}
                          >
                            {nav.title}
                          </span>
                          <div style={{ padding: 6 }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <div>
                            {navigation.platformItems.map(
                              (nav, platformIdx) => {
                                if (nav.type === "link") {
                                  return (
                                    <p
                                      style={{ paddingLeft: 35 }}
                                      key={`platform-dropdown-${platformIdx}`}
                                    >
                                      <Link href={nav.href}>
                                        <a style={{ color: "white" }}>
                                          {nav.title}
                                        </a>
                                      </Link>
                                    </p>
                                  );
                                } else if (nav.type === "divider") {
                                  return (
                                    <hr
                                      key={`platform-dropdown-${platformIdx}`}
                                    />
                                  );
                                }
                              }
                            )}
                          </div>
                        </Accordion.Collapse>
                      </Accordion>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div
            id="bottomNavigationMenu"
            style={{
              alignSelf: "flex-end",
              justifyContent: "normal",
              width: "100%",
              margin: 20,
              paddingLeft: 20,
            }}
          >
            <Accordion>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <span
                  id="navigation-greeting"
                  style={{
                    marginLeft: -13,
                    color: "white",
                    fontSize: 16,
                    width: "100%",
                    textAlign: "left",
                    textTransform: "none",
                    fontWeight: 300,
                  }}
                >
                  {subMenuGreeting}
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <div
                  style={{
                    marginLeft: 10,
                  }}
                >
                  {navigation.bottomMenuItems.map((nav, idx) => {
                    if (nav.type === "link") {
                      return (
                        <p key={`bottom-dropdown-${idx}`}>
                          <Link href={nav.href}>
                            <a style={{ color: "white" }}>{nav.title}</a>
                          </Link>
                        </p>
                      );
                    } else if (nav.type === "divider") {
                      return <hr key={`bottom-dropdown-${idx}`} />;
                    }
                  })}
                </div>
              </Accordion.Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Small Screen Navigation */}
      <div
        className="d-md-none"
        style={{ textAlign: "center", paddingTop: 15 }}
      >
        <p>
          {navigation.navigationItems.map((nav) => {
            if (nav.type === "link") {
              return (
                <Link key={`small-nav-${nav.title}`} href={nav.href}>
                  <a style={{ paddingRight: 10 }}>{nav.title}</a>
                </Link>
              );
            }
          })}
        </p>
        <p>
          {navigation.platformItems.map((nav, idx) => {
            if (nav.type === "link") {
              return (
                <Link href={nav.href} key={`link-platform-${idx}`}>
                  <a style={{ paddingRight: 10, color: "gray" }}>{nav.title}</a>
                </Link>
              );
            }
          })}
        </p>
        <p>
          {navigation.bottomMenuItems.map((nav, idx) => {
            if (nav.type === "link") {
              return (
                <Link href={nav.href} key={`link-bottom-${idx}`}>
                  <a style={{ paddingRight: 10, color: "gray" }}>{nav.title}</a>
                </Link>
              );
            }
          })}
        </p>
        <hr />
      </div>
    </div>
  );
}
