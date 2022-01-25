import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Image, Accordion, Button, Badge } from "react-bootstrap";
import Link from "next/link";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { UseApi } from "../hooks/useApi";
import SetupStepsNavProgressBar from "./navigation/SetupStepsNavProgressBar";
import RunningRunsBadge from "./navigation/RunningRunsBadge";
import ResqueFailedCountBadge from "./navigation/ResqueFailedBadgeCount";
import UnreadNotificationsBadge from "./navigation/UnreadNotificationsBadge";
import HighlightingNavLink from "./navigation/HighlightingNavLink";
import { truncate } from "../utils/truncate";
import LinkButton from "./LinkButton";
import { grouparooUiEdition } from "../utils/uiEdition";
import { useWebAppContext } from "../contexts/webApp";
import { errorHandler, sessionHandler } from "../eventHandlers";

export const navLiStyle: React.CSSProperties = {
  marginTop: 16,
  marginBottom: 16,
};

export const navIconStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 300,
  paddingLeft: 0,
  marginLeft: 0,
  color: "white",
  textDecoration: "none",
};

export const iconConstrainedStyle: React.CSSProperties = { width: 20 };

export default function Navigation(props) {
  const {
    navExpanded,
    toggleNavExpanded,
  }: {
    navExpanded: boolean;
    toggleNavExpanded: () => {};
  } = props;
  const { navigationMode, navigation, clusterName, currentTeamMember } =
    useWebAppContext();
  const uiEdition = grouparooUiEdition();
  const { execApi } = UseApi(undefined, errorHandler);
  const router = useRouter();
  const [teamMember, setTeamMember] = useState(currentTeamMember);
  const [hasBeenCollapsed, setHasBeenCollapsed] = useState(!navExpanded);
  const [expandPlatformMenu, setExpandPlatformMenu] = useState(false);
  const [expandAccountMenu, setExpandAccountMenu] = useState(false);
  const logoLink = teamMember?.id ? "/dashboard" : "/";

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
  }, [router.pathname]);

  function handleRouteChange() {
    let onPlatformPage = false;
    let onAccountPage = false;

    if (router.pathname && router.pathname !== "/") {
      const pathParts = router.pathname.split("/");
      const firstPathPart = "/" + pathParts[1];

      navigation?.platformItems
        .filter((i) => i.type === "link")
        .map((i) => i.href)
        .forEach((route) => {
          if (route.indexOf(firstPathPart) === 0) {
            const verb = pathParts[3];
            if (route === "/models" && verb && verb !== "edit") {
              // special case: don't open Platform menu for model-scoped pages
              onPlatformPage = false;
            } else {
              onPlatformPage = true;
            }
          }
        });

      navigation?.bottomMenuItems
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

  const uiPlugin = `@grouparoo/ui-${uiEdition}`;
  return (
    <div
      id="navigation"
      data-testid="navigation"
      className={`position-fixed bg-dark ${
        navExpanded ? (hasBeenCollapsed ? "slide-in" : null) : "slide-out"
      }`}
      style={{
        zIndex: 10,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: 235,
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
                left: 190,
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
                    maxHeight: 32,
                    marginTop: 16,
                    marginBottom: 16,
                  }}
                  src="/public/images/logo/logo.svg"
                />
              </a>
            </Link>
            <br />
            {navigationMode.includes("config") ? (
              <Badge variant="secondary">
                {truncate(clusterName.value, 30)}
              </Badge>
            ) : (
              <Link href="/settings/core">
                <a>
                  <Badge variant="secondary">
                    {clusterName
                      ? truncate(clusterName.value, 30)
                      : "Name not set"}
                  </Badge>
                </a>
              </Link>
            )}
          </div>
          <span style={{ color: "lightgray", paddingLeft: 3, fontSize: 10 }}>
            {uiPlugin}
          </span>
        </div>

        {!navigationMode.includes("unauthenticated") && (
          <SetupStepsNavProgressBar execApi={execApi} />
        )}

        <div
          id="navBottomSection"
          style={{ paddingLeft: 20, paddingRight: 20 }}
        >
          {navigation?.navigationItems && (
            <ul style={{ padding: 0, margin: 0, listStyleType: "none" }}>
              {navigation?.navigationItems.map((nav, idx) => {
                if (nav.type === "link") {
                  return (
                    <li key={nav.href} style={navLiStyle}>
                      <HighlightingNavLink
                        href={nav.href}
                        mainPathSectionIdx={nav.mainPathSectionIdx ?? 1}
                        text={
                          <>
                            {nav.title}
                            {nav.title === "Runs" ? (
                              <>
                                {" "}
                                <RunningRunsBadge />
                              </>
                            ) : null}
                          </>
                        }
                        icon={nav.icon}
                        small={nav.small}
                      />
                    </li>
                  );
                } else if (nav.type === "divider") {
                  return (
                    <li key={idx}>
                      <hr className="dark" key={`separator-${idx}`} />
                    </li>
                  );
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
                                icon={nav.icon as FontAwesomeIconProps["icon"]}
                                size="xs"
                              />
                            ) : null}{" "}
                          </span>
                          <span
                            style={{
                              marginLeft: 4,
                              fontSize: 18,
                              fontWeight: 300,
                              paddingLeft: 0,
                              color: "white",
                            }}
                          >
                            {nav.title}{" "}
                            <FontAwesomeIcon
                              icon={`caret-${
                                expandPlatformMenu ? "up" : "down"
                              }`}
                            />{" "}
                            {!expandPlatformMenu ? (
                              <ResqueFailedCountBadge
                                navigationMode={navigationMode}
                              />
                            ) : null}
                            {!expandPlatformMenu ? (
                              <UnreadNotificationsBadge
                                navigationMode={navigationMode}
                              />
                            ) : null}
                          </span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <ul className="pl-4">
                            {navigation.platformItems.map(
                              (nav, platformIdx) => {
                                if (nav.type === "link") {
                                  return (
                                    <li
                                      key={`platform-dropdown-${platformIdx}`}
                                      className="py-2 pl-2"
                                    >
                                      <HighlightingNavLink
                                        key={nav.href}
                                        href={nav.href}
                                        mainPathSectionIdx={
                                          nav.mainPathSectionIdx ?? 1
                                        }
                                        text={nav.title}
                                        icon={nav.icon}
                                        small={true}
                                      />
                                      {expandPlatformMenu &&
                                      nav.title === "Notifications" ? (
                                        <UnreadNotificationsBadge
                                          navigationMode={navigationMode}
                                        />
                                      ) : null}
                                      {expandPlatformMenu &&
                                      nav.title === "Resque" ? (
                                        <ResqueFailedCountBadge
                                          navigationMode={navigationMode}
                                        />
                                      ) : null}
                                    </li>
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
                          </ul>
                        </Accordion.Collapse>
                      </Accordion>
                    </li>
                  );
                }
              })}
            </ul>
          )}
        </div>
      </div>
      <div className={uiEdition === "config" ? "mb-5" : null}>
        <div
          id="bottomNavigationMenuCTA"
          style={{
            alignSelf: "flex-end",
            justifyContent: "normal",
            width: "100%",
          }}
          className="mx-auto px-3"
        >
          <LinkButton
            style={{ color: "white" }}
            variant="outline-light"
            href="https://www.grouparoo.com/chat"
            target="_blank"
            className="col-12 mx-auto font-weight-light"
            size="sm"
          >
            <FontAwesomeIcon
              style={iconConstrainedStyle}
              icon={["fab", "slack"]}
              size="1x"
            />{" "}
            Join us on Slack
          </LinkButton>
        </div>

        {navigation?.bottomMenuItems?.length > 0 ? (
          <div
            id="bottomNavigationMenu"
            style={{
              alignSelf: "flex-end",
              justifyContent: "normal",
              width: "100%",
              margin: 20,
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
                  Hello {teamMember ? teamMember.firstName : ""}{" "}
                  <FontAwesomeIcon
                    icon={`caret-${expandAccountMenu ? "up" : "down"}`}
                  />
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <div
                  style={{
                    marginLeft: 15,
                  }}
                >
                  <ul className="pl-0">
                    {navigation?.bottomMenuItems.map((nav, idx) => {
                      if (nav.type === "link") {
                        return (
                          <li key={`bottom-dropdown-${idx}`}>
                            <HighlightingNavLink
                              href={nav.href}
                              mainPathSectionIdx={nav.mainPathSectionIdx ?? 1}
                              text={nav.title}
                              icon={nav.icon}
                              small={true}
                            />
                          </li>
                        );
                      } else if (nav.type === "divider") {
                        return (
                          <hr
                            key={`bottom-dropdown-${idx}`}
                            className="dark"
                            style={{ marginRight: 35 }}
                          />
                        );
                      }
                    })}
                  </ul>
                </div>
              </Accordion.Collapse>
            </Accordion>
          </div>
        ) : null}
      </div>
    </div>
  );
}
