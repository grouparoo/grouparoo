import { useState, useEffect } from "react";
import Head from "next/head";
import { isBrowser } from "../../utils/isBrowser";
import Loader from "../loader";
import SuccessAlert from "../alerts/success";
import ErrorAlert from "../alerts/error";
import Navigation from "../navigation";

export default function ({
  display,
  children,
  successHandler,
  errorHandler,
  sessionHandler,
  currentTeamMember,
  navigation,
  navigationMode,
}) {
  const [contentAreaLeftPadding, setContentAreaLeftPadding] = useState(265);
  const [alertWidth, setAlertWidth] = useState(500);

  useEffect(setWidth, []);

  function setWidth() {
    if (isBrowser()) {
      let _contentAreaLeftPadding = contentAreaLeftPadding;
      let _alertWidth = contentAreaLeftPadding;

      if (window.innerWidth < 780) {
        _contentAreaLeftPadding = 15;
        _alertWidth = window.innerWidth - 30;
      } else {
        _alertWidth = window.innerWidth - _contentAreaLeftPadding - 15;
      }

      setContentAreaLeftPadding(_contentAreaLeftPadding);
      setAlertWidth(_alertWidth);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo</title>

        <meta name="application-name" content="Grouparoo" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/favicon/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/favicon/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/favicon/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/favicon/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/favicon/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/favicon/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/favicon/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/favicon/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-16x16.png"
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
          currentTeamMember={currentTeamMember}
          navigation={navigation}
          navigationMode={navigationMode}
          sessionHandler={sessionHandler}
        />
        <div
          style={{
            paddingLeft: contentAreaLeftPadding,
            paddingRight: 15,
            paddingTop: 0,
            paddingBottom: 15,
          }}
        >
          <br />
          <div>
            <div
              style={{
                position: "fixed",
                zIndex: 999,
                width: alertWidth,
                left: contentAreaLeftPadding,
                bottom: 0,
              }}
            >
              <SuccessAlert successHandler={successHandler} />
              <ErrorAlert errorHandler={errorHandler} />
            </div>
          </div>
          {display ? children : <Loader />}
        </div>
      </div>
    </>
  );
}
