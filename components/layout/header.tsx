import { dummyUser } from "dummy";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/layout.module.scss";
import { LayoutHeader } from "types/common";
import gravatar from "gravatar";
import Image from 'next/image';
const Header = ({ title }: LayoutHeader) => {
  const router = useRouter();
  const isLogin = false;
  const userData = dummyUser;
  return (
    <header className={styles.header}>
      {title ? <h2>{title}</h2> : <div className={styles.t1}>
        <Image src='/logo/seefood-logo-color.png' alt='logo' width={120} height={25} />
        </div>}
      <div className={styles.profile}>
        {isLogin ? (
          userData.profileURL ? (
            <div>프로필 사진</div>
          ) : (
            <img
              src={gravatar.url(userData.email, { s: "36px", d: "mp" })}
              alt="garvatar"
            />
          )
        ) : (
          <button onClick={() => router.replace("/login")}>LogIn</button>
        )}
      </div>
    </header>
  );
};

export default Header;
