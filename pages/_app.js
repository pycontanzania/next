//3rd Party packages & libraries
import { ThemeProvider } from "next-themes";

//Components
import Layout from "../components/Layout";

//CSS
import "../styles/globals.css";

function MyApp({ Component, pageProps, ...appProps }) {
  if ([`/404`].includes(appProps.router.pathname))
    return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    );

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
