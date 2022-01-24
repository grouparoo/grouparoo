import { useState, useEffect } from "react";
import Head from "next/head";
import { isBrowser } from "../../utils/isBrowser";
import Toast from "../alerts/Toast";
import Navigation from "../Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HydrationError from "../alerts/HydrationError";
import { errorHandler, successHandler } from "../../eventHandlers";

const fontFamilies = [
  "IBM+Plex+Mono:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700",
  "IBM+Plex+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400",
  "Inter:wght@100;300;400;500;700;900",
];
const fontUrl = `https://fonts.googleapis.com/css2?${fontFamilies
  .map((f) => `family=${f}`)
  .join("&")}&display=swap`;

export default function Main(props) {
  const {
    children,
    hydrationError,
  }: {
    children: React.ReactNode;
    hydrationError?: string;
  } = props;
  const [navExpanded, setNavExpanded] = useState(true);
  const contentAreaLeftPadding = 250;

  useEffect(setWidth, []);

  function setWidth() {
    if (isBrowser()) {
      const small = window.innerWidth < 780;
      if (small) setNavExpanded(false);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo</title>

        <meta name="application-name" content="Grouparoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/public/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/public/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />

        {/* Google Fonts */}
        <link href={fontUrl} rel="stylesheet" />

        {/* Websocket */}
        <script src="/public/client-js/grouparoo-websocket-client.js" />
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

          {/* Toasts */}
          <div
            style={{
              position: "fixed",
              bottom: 0,
              right: 0,
              padding: 20,
              zIndex: 2000,
            }}
          >
            <Toast variant="success" handler={successHandler} />
            <Toast variant="danger" handler={errorHandler} />
          </div>

          {/* Page Content  */}
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
