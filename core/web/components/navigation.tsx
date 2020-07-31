import { Fragment, useState, useEffect } from "react";
import { Image, Accordion, Button, Badge } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRealtimeModelStream } from "../hooks/useRealtimeModelStream";
import { RunAPIData } from "../utils/apiData";
import { useApi } from "../hooks/useApi";

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

export default function Navigation(props) {
  const {
    pathname,
    navigationMode,
    navigation,
    clusterName,
    sessionHandler,
    navExpanded,
    toggleNavExpanded,
    errorHandler,
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const [teamMember, setTeamMember] = useState(props.currentTeamMember);
  const [hasBeenCollapsed, setHasBeenCollapsed] = useState(!navExpanded);
  const [expandPlatformMenu, setExpandPlatformMenu] = useState(false);
  const [expandAccountMenu, setExpandAccountMenu] = useState(false);
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

  useEffect(() => {
    handleRouteChange();
  }, [pathname]);

  function handleRouteChange() {
    let onPlatformPage = false;
    let onAccountPage = false;

    if (pathname && pathname !== "/") {
      const firstPathPart = "/" + pathname.split("/")[1];

      navigation.platformItems
        .filter((i) => i.type === "link")
        .map((i) => i.href)
        .forEach((route) => {
          if (route.indexOf(firstPathPart) === 0) {
            onPlatformPage = true;
          }
        });

      navigation.bottomMenuItems
        .filter((i) => i.type === "link")
        .map((i) => i.href)
        .forEach((route) => {
          if (route.indexOf(firstPathPart) === 0) {
            onAccountPage = true;
          }
        });
    }

    setExpandPlatformMenu(onPlatformPage);
    setExpandAccountMenu(onAccountPage);
  }

  if (!navExpanded && !hasBeenCollapsed) setHasBeenCollapsed(true);

  // resque failure counts
  const resqueSleep = 10 * 1000 + 1;
  let resqueTimer: NodeJS.Timeout;
  const [resqueFailedCount, setResqueFailedCount] = useState(0);

  useEffect(() => {
    load();
    return () => {
      clearTimeout(resqueTimer);
    };
  }, []);

  async function load() {
    const { failedCount } = await execApi("get", `/resque/resqueFailedCount`);
    setResqueFailedCount(failedCount);
    resqueTimer = setTimeout(() => {
      load();
    }, resqueSleep);
  }

  return (
    <div
      id="navigation"
      className={`position-fixed bg-dark ${
        navExpanded ? (hasBeenCollapsed ? "slide-in" : null) : "slide-out"
      }`}
      style={{
        zIndex: 10,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: 250,
        paddingLeft: 20,
        paddingRight: 20,
        overflowY: "auto",
        overflowX: "hidden",
        height: "100%",
      }}
    >
      <div style={{ justifyContent: "normal", alignSelf: "flex-start" }}>
        <button
          type="button"
          className="navbar-toggler"
          style={{
            position: "absolute",
            left: 205,
          }}
          onClick={toggleNavExpanded}
        >
          <span className="navbar-toggler-icon" style={{ color: "lightgray" }}>
            <FontAwesomeIcon icon="caret-square-left" size="xs" />
          </span>
        </button>
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
        <br />
        <Badge variant="secondary">{clusterName}</Badge>

        <ul style={{ padding: 0, margin: 0 }}>
          {navigation.navigationItems.map((nav, idx) => {
            if (nav.type === "link") {
              return (
                <Fragment key={nav.href}>
                  <HighlightingNavLink
                    href={nav.href}
                    text={
                      <>
                        {nav.title}
                        {nav.title === "Runs" ? (
                          <>
                            {" "}
                            <RunningRunsBadge execApi={execApi} />
                          </>
                        ) : null}
                      </>
                    }
                    icon={nav.icon}
                    idx={idx}
                  />
                </Fragment>
              );
            } else if (nav.type === "divider") {
              return <li key={idx} style={navLiStyle} />;
            } else if (nav.type === "subNavMenu") {
              return (
                <li style={navLiStyle} key={idx}>
                  <Accordion activeKey={expandPlatformMenu ? "1" : null}>
                    <Accordion.Toggle
                      as={Button}
                      style={{ padding: 0 }}
                      variant="link"
                      eventKey="0"
                      onClick={() => setExpandPlatformMenu(!expandPlatformMenu)}
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
                        {nav.title}{" "}
                        {!expandPlatformMenu ? (
                          <ResqueFailedCountBadge
                            resqueFailedCount={resqueFailedCount}
                          />
                        ) : null}
                      </span>
                      <div style={{ padding: 6 }} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <div>
                        {navigation.platformItems.map((nav, platformIdx) => {
                          if (nav.type === "link") {
                            return (
                              <p
                                style={{ paddingLeft: 35 }}
                                key={`platform-dropdown-${platformIdx}`}
                              >
                                <Link href={nav.href}>
                                  <a style={{ color: "white" }}>{nav.title}</a>
                                </Link>
                                {expandPlatformMenu &&
                                nav.title === "Resque" ? (
                                  <ResqueFailedCountBadge
                                    resqueFailedCount={resqueFailedCount}
                                  />
                                ) : null}
                              </p>
                            );
                          } else if (nav.type === "divider") {
                            return (
                              <hr key={`platform-dropdown-${platformIdx}`} />
                            );
                          }
                        })}
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
        <Accordion activeKey={expandAccountMenu ? "1" : null}>
          <Accordion.Toggle
            eventKey="0"
            as={Button}
            variant="link"
            onClick={() => setExpandAccountMenu(!expandAccountMenu)}
          >
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
  );
}

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

function RunningRunsBadge({ execApi }) {
  useRealtimeModelStream("run", load);
  const [runs, setRuns] = useState<RunAPIData[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { runs } = await execApi(
      "get",
      `/runs`,
      { state: "running" },
      null,
      null,
      false
    );
    setRuns(runs);
  }

  if (runs.length === 0) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill variant="info">
        {runs.length}
      </Badge>
    </span>
  );
}

function ResqueFailedCountBadge({
  resqueFailedCount,
}: {
  resqueFailedCount: number;
}) {
  if (resqueFailedCount === 0) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill variant="warning">
        {resqueFailedCount}
      </Badge>
    </span>
  );
}
