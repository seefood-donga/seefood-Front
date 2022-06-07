import { dummyUser } from "dummy";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/layout.module.scss";
import { LayoutHeader } from "types/common";
import gravatar from "gravatar";
const Header = ({ title }: LayoutHeader) => {
  const router = useRouter();
  const isLogin = true;
  const userData = dummyUser;
  return (
    <header className={styles.header}>
      {title ? <h2>{title}</h2> : <div className={styles.t1}>See Food!</div>}
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
