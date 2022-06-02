import AppLayout from "components/layout";
import { AppPropsWithLayout } from "types/common";
import "public/font/style.css";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const layoutHeader = Component.header;
  const hasBack = Component.back;
  const noNav = Component.noNav;

  return (
    <AppLayout {...{layoutHeader, noNav, hasBack}}>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
