import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ToastProvider } from "react-toast-notifications";

import { theme } from "_helpers";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Next Starting Point...</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastProvider placement="bottom-center" autoDismiss autoDismissTimeout={3000}>
          <Component {...pageProps} />
        </ToastProvider>
      </ThemeProvider>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
export default MyApp;
