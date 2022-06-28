import { dummyUser } from "dummy";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/layout.module.scss";
import { LayoutHeader } from "types/common";
import Image from "next/image";
import ProfileImage from "components/custom/profile-image";
const Header = ({ title, noProfile }: LayoutHeader) => {
  const router = useRouter();
  const isLogin = true;
  return (
    <header className={styles.header}>
      {title ? (
        <h2>{title}</h2>
      ) : (
        <div className={styles.t1}>
          <Image
            src="/logo/seefood-logo-color.png"
            alt="logo"
            width={120}
            height={25}
          />
        </div>
      )}
      {!noProfile && (
        <div className={styles.profile}>
          {isLogin ? (
            <ProfileImage size={36} />
          ) : (
            <button onClick={() => router.replace("/login")}>LogIn</button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
