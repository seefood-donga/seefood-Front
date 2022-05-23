import { useRouter } from 'next/router';
import React from 'react';
import styles from 'styles/layout.module.scss';
import { LayoutHeader } from 'types/common';
const Header = ({title} : LayoutHeader) => {
  const router = useRouter();
  const isLogin = false;
  return (
    <header className={styles.header}>
      {
        title ? (
          <h2>{title}</h2>
        ):(
          <div>로고</div>
        )
      }
      <div className={styles.profile}>
        {
          isLogin ? (
            <div>프로필 로고</div>
          ):(
            <button onClick={() => router.replace("/login")}>LogIn</button>
          )
        }
      </div>
    </header>
  )
}

export default Header;