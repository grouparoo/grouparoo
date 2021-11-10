import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Image, Accordion, Button, Badge, Form } from "react-bootstrap";
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
import { Actions } from "../utils/apiData";
import { ErrorHandler } from "../utils/errorHandler";
import { SetupStepHandler } from "../utils/setupStepsHandler";
import { SessionHandler } from "../utils/sessionHandler";
import { StatusHandler } from "../utils/statusHandler";
import { truncate } from "../utils/truncate";
import { onChangeModelId } from "../utils/modelHelper";
import LinkButton from "./LinkButton";
import { grouparooUiEdition } from "../utils/uiEdition";

export const navLiStyle = { marginTop: 20, marginBottom: 20 };

export const navIconStyle = {
  fontSize: 18,
  fontWeight: 300,
  paddingLeft: 0,
  marginLeft: 0,
  marginRight: 10,
  color: "white",
  textDecoration: "none",
};

export const iconConstrainedStyle = { width: 20 };

export default function Navigation(props) {
  const {
    navigationModel,
    navigationMode,
    navigation,
    clusterName,
    navExpanded,
    toggleNavExpanded,
    errorHandler,
    setupStepHandler,
    sessionHandler,
    statusHandler,
  }: {
    navigationMode: Actions.NavigationList["navigationMode"];
    navigation: Actions.NavigationList["navigation"];
    clusterName: { value: string; default: boolean };
    navigationModel: Actions.NavigationList["navigationModel"];
    navExpanded: boolean;
    toggleNavExpanded: () => {};
    errorHandler: ErrorHandler;
    setupStepHandler: SetupStepHandler;
    sessionHandler: SessionHandler;
    statusHandler: StatusHandler;
  } = props;
  const { execApi } = UseApi(props, errorHandler);
  const router = useRouter();
  const [teamMember, setTeamMember] = useState(props.currentTeamMember);
  const [hasBeenCollapsed, setHasBeenCollapsed] = useState(!navExpanded);
  const [expandPlatformMenu, setExpandPlatformMenu] = useState(false);
  const [expandAccountMenu, setExpandAccountMenu] = useState(false);
  const subMenuGreeting = `Hello ${teamMember ? teamMember.firstName : ""} »`;
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

  const uiPlugin = `@grouparoo/ui-${grouparooUiEdition()}`;
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
                    maxHeight: 50,
                    marginTop: 30,
                    marginBottom: 20,
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
          <SetupStepsNavProgressBar
            execApi={execApi}
            setupStepHandler={setupStepHandler}
          />
        )}

        <div
          id="navBottomSection"
          style={{ paddingLeft: 20, paddingRight: 20 }}
        >
          <ul style={{ padding: 0, margin: 0 }}>
            {navigation?.navigationItems.map((nav, idx) => {
              if (nav.type === "link") {
                return (
                  <Fragment key={nav.href}>
                    <HighlightingNavLink
                      href={nav.href}
                      mainPathSectionIdx={nav.mainPathSectionIdx ?? 1}
                      text={
                        <>
                          {nav.title}
                          {nav.title === "Runs" ? (
                            <>
                              {" "}
                              <RunningRunsBadge statusHandler={statusHandler} />
                            </>
                          ) : null}
                        </>
                      }
                      icon={nav.icon}
                      idx={idx}
                    />
                  </Fragment>
                );
              } else if (nav.type === "modelMenu") {
                return (
                  <Fragment key={idx}>
                    <Form.Control
                      name="selectedModel"
                      as="select"
                      value={navigationModel.value ?? "_none"}
                      style={{ marginTop: 20 }}
                      disabled={navigationModel.options.length === 0}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        onChangeModelId(event.target.value);
                      }}
                    >
                      {navigationModel.options.length === 0 ? (
                        <option value="_none" disabled>
                          (no models)
                        </option>
                      ) : null}
                      {navigationModel.options.map((m) => (
                        <option value={m.id} key={`model-${m.id}`}>
                          {m.name}
                        </option>
                      ))}
                    </Form.Control>
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
                              icon={nav.icon as FontAwesomeIconProps["icon"]}
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
                              statusHandler={statusHandler}
                            />
                          ) : null}
                          {!expandPlatformMenu ? (
                            <UnreadNotificationsBadge
                              navigationMode={navigationMode}
                              statusHandler={statusHandler}
                            />
                          ) : null}{" "}
                          »
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
                                  nav.title === "Notifications" ? (
                                    <UnreadNotificationsBadge
                                      navigationMode={navigationMode}
                                      statusHandler={statusHandler}
                                    />
                                  ) : null}
                                  {expandPlatformMenu &&
                                  nav.title === "Resque" ? (
                                    <ResqueFailedCountBadge
                                      navigationMode={navigationMode}
                                      statusHandler={statusHandler}
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
      <div className={grouparooUiEdition() === "config" ? "mb-5" : null}>
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
                  {subMenuGreeting}
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <div
                  style={{
                    marginLeft: 10,
                  }}
                >
                  {navigation?.bottomMenuItems.map((nav, idx) => {
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
        ) : null}
      </div>
    </div>
  );
}
