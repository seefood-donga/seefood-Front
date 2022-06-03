import { AppProps, typeAppProps } from 'next/app';
import { NextPage } from 'next';

type LayoutHeader ={
  title?: string;
}

type NextPageWithLayout = NextPage & {
  header?: LayoutHeader | boolean;
  back?: {has:boolean, color: string};
  noNav?: boolean;
  noPadding?:boolean;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}