import AppLayout from "components/layout";
import { AppPropsWithLayout } from "types/common";
import "public/font/style.css";
import "styles/globals.scss";
import "styles/custom/calendar.css";
import "react-circular-progressbar/dist/styles.css";
import { DefaultSeo } from "next-seo";
import { RecoilRoot } from "recoil";

const DEFAULT_SEO = {
  title: "SeeFood",
  description: "동아대학교 Software Project 2022 칼로리 분석 서비스 SeeFood",
  openGraph: {
    type: "websiete",
    title: "SeeFood - Food Photo Analysis Service",
    description: "donga univ SoftWare Project 2022 SeeFood",
    site_name: "SeeFood",
    images: [
      {
        url: "http://localhost:3050/favicon.ico",
        width: 1200,
        height: 630,
        alt: "SeeFood Logo Image",
      },
    ],
  },
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const layoutHeader = Component.header;
  const hasBack = Component.back;
  const noNav = Component.noNav;
  const noPadding = Component.noPadding;

  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <AppLayout {...{ layoutHeader, noNav, noPadding, hasBack }}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </AppLayout>
    </>
  );
}

export default MyApp;
