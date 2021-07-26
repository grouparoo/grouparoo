import { useState, useEffect } from "react";
import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import { isBrowser } from "../../utils/isBrowser";
import SuccessAlert from "../alerts/success";
import ErrorAlert from "../alerts/error";
import Navigation from "../navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HydrationError from "../alerts/hydrationError";
import { SuccessHandler } from "../../utils/successHandler";
import { ErrorHandler } from "../../utils/errorHandler";

export default function Main(props) {
  const {
    children,
    successHandler,
    errorHandler,
    hydrationError,
  }: {
    children: any;
    successHandler: SuccessHandler;
    errorHandler: ErrorHandler;
    hydrationError: string;
  } = props;
  const [navExpanded, setNavExpanded] = useState(true);
  const [alertWidth, setAlertWidth] = useState(500);
  const contentAreaLeftPadding = 250;

  useEffect(setWidth, []);
  useEffect(() => {
    setAlertWidth(
      window.innerWidth - (navExpanded ? contentAreaLeftPadding : 30) - 30
    );
  }, [navExpanded]);

  function setWidth() {
    if (isBrowser()) {
      const small = window.innerWidth < 780;
      if (small) setNavExpanded(false);
      setAlertWidth(
        window.innerWidth - (!small ? contentAreaLeftPadding : 30) - 30
      );
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo</title>

        <meta name="application-name" content="Grouparoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/public/favicon/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/public/favicon/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/public/favicon/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/public/favicon/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/public/favicon/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/public/favicon/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/public/favicon/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/public/favicon/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/public/favicon/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="/public/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/public/favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/public/favicon/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-128.png"
          sizes="128x128"
        />
        <meta name="msapplication-TileColor" content="#242436" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/favicon/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/favicon/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/favicon/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/favicon/mstile-310x310.png"
        />

        <script src="/public/javascript/ActionheroWebsocketClient.min.js" />
      </Head>

      <div id="container">
        <Navigation
          {...props}
          navExpanded={navExpanded}
          toggleNavExpanded={() => setNavExpanded(!navExpanded)}
        />

        <div
          id="navigation-toggle"
          style={{
            display: navExpanded ? "none" : "block",
            paddingLeft: 30,
            paddingTop: 10,
            cursor: "pointer",
            fontSize: 16,
            color: "darkgray",
          }}
        >
          <a type="button" onClick={() => setNavExpanded(!navExpanded)}>
            <FontAwesomeIcon icon="caret-square-right" size="xs" /> Menu
          </a>
        </div>
        <div
          style={{
            paddingLeft: navExpanded ? contentAreaLeftPadding : 30,
            paddingRight: 30,
            paddingTop: 0,
            paddingBottom: 15,
          }}
        >
          <br />
          <div>
            <div
              style={{
                position: "fixed",
                zIndex: 9,
                width: alertWidth,
                bottom: 5,
              }}
            >
              <div>
                <Row>
                  <Col md={12}>
                    <SuccessAlert successHandler={successHandler} />
                    <ErrorAlert errorHandler={errorHandler} />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          {hydrationError ? (
            <HydrationError hydrationError={hydrationError} />
          ) : (
            children
          )}
        </div>
      </div>
    </>
  );
}
