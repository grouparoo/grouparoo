import { Fragment, useState, useEffect } from "react";
import { Image, Accordion, Button, Badge, ProgressBar } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRealtimeModelStream } from "../hooks/useRealtimeModelStream";
import { RunAPIData, SetupStepAPIData } from "../utils/apiData";
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
  }, [navigationMode]);

  async function load() {
    if (navigationMode === "unauthenticated") return;

    try {
      const { failedCount } = await execApi("get", `/resque/resqueFailedCount`);
      setResqueFailedCount(failedCount);
      resqueTimer = setTimeout(() => {
        load();
      }, resqueSleep);
    } catch (error) {
      console.error(error);
    }
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
        overflowY: "auto",
        overflowX: "hidden",
        height: "100%",
      }}
    >
      <div>
        <div id="navTopSection" style={{ paddingLeft: 20, paddingRight: 20 }}>
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
              <span
                className="navbar-toggler-icon"
                style={{ color: "lightgray" }}
              >
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
          </div>
        </div>

        {navigationMode !== "unauthenticated" && (
          <SetupStepsNavProgressBar execApi={execApi} />
        )}

        <div
          id="navBottomSection"
          style={{ paddingLeft: 20, paddingRight: 20 }}
        >
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
                        onClick={() =>
                          setExpandPlatformMenu(!expandPlatformMenu)
                        }
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
                              navigationMode={navigationMode}
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
                                    <a style={{ color: "white" }}>
                                      {nav.title}
                                    </a>
                                  </Link>
                                  {expandPlatformMenu &&
                                  nav.title === "Resque" ? (
                                    <ResqueFailedCountBadge
                                      navigationMode={navigationMode}
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
      </div>

      <div
        id="bottomNavigationMenu"
        style={{
          alignSelf: "flex-end",
          justifyContent: "normal",
          width: "100%",
          margin: 20,
          paddingLeft: 40,
          paddingRight: 20,
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
  useRealtimeModelStream("run", "navigation-runs-badge", load);
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
  navigationMode,
}: {
  resqueFailedCount: number;
  navigationMode: string;
}) {
  if (navigationMode === "unauthenticated") return null;
  if (resqueFailedCount === 0) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill variant="warning">
        {resqueFailedCount}
      </Badge>
    </span>
  );
}

function SetupStepsNavProgressBar({ execApi }) {
  const [steps, setSteps] = useState<SetupStepAPIData[]>([]);
  const [shouldDisplay, setShouldDisplay] = useState(false);

  let timer: NodeJS.Timeout;
  const timeout = 1000 * 15;

  async function getSetupSteps() {
    clearTimeout(timer);
    const { setupSteps, toDisplay } = await execApi("get", `/setupSteps`);
    setShouldDisplay(toDisplay);
    setSteps(setupSteps);
    if (toDisplay) timer = setTimeout(getSetupSteps, timeout);
  }

  useEffect(() => {
    getSetupSteps();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const activeStep = steps.find((step) => !step.complete);
  const isOnBoardingComplete = steps.every((step) => step.complete);
  const totalStepsCount = steps.length;
  const completeStepsCount = steps.filter((step) => step.complete).length;
  const percentComplete = Math.round(
    (100 * completeStepsCount) / totalStepsCount
  );

  if (!shouldDisplay) return null;

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        padding: 20,
        marginTop: 10,
      }}
    >
      <div
        style={{
          fontSize: 18,
          paddingLeft: 0,
          color: "var(--secondary)",
        }}
      >
        <Link href="/setup">
          <a>{isOnBoardingComplete ? "Setup Complete 🎉" : "Get Started:"}</a>
        </Link>
      </div>
      <div
        style={{
          paddingLeft: 0,
          paddingBottom: 10,
          color: "var(--secondary)",
        }}
      >
        {activeStep?.title}
      </div>
      <ProgressBar now={percentComplete} />
    </div>
  );
}
