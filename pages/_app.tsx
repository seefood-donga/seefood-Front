import AppLayout from "components/layout";
import "styles/globals.scss";
import { AppPropsWithLayout } from "types/common";

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
