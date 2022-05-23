import { ReactNode } from 'react';
import styles from 'styles/layout.module.scss';
import { LayoutHeader } from 'types/common';
import BackButton from './back';
import Header from './header';
import NavBar from './navbar';

interface Props {
  children:ReactNode;
  layoutHeader?: LayoutHeader;
  noNav?:boolean;
  hasback?:boolean
}

const AppLayout = ({children, layoutHeader, noNav, hasback}: Props) =>{
  return (
    <div className={styles.wrapper}>
      {layoutHeader && <Header />}
      {!hasback && <BackButton />}
    <main  style={{
            paddingTop: layoutHeader && "68px",
            paddingBottom: !noNav ? "68px" : "0",
            height: "100%"
          }}>
      {children}
    </main>
      {!noNav && <NavBar />}
    </div>
  );
}

export default AppLayout;