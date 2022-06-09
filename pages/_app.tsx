import AppLayout from "components/layout";
import { AppPropsWithLayout } from "types/common";
import "public/font/style.css";
import "styles/globals.scss";
import "styles/custom/calendar.css";
import "react-circular-progressbar/dist/styles.css";
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const layoutHeader = Component.header;
  const hasBack = Component.back;
  const noNav = Component.noNav;
  const noPadding = Component.noPadding;
  

  return (
    <AppLayout {...{ layoutHeader, noNav, noPadding, hasBack }}>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
