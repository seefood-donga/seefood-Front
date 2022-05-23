import React, { useMemo } from "react";
import styles from "styles/layout.module.scss";
import HomeIcon from "public/icons/home.svg";
import ProfileIcon from "public/icons/profile.svg";
import LikeIcon from "public/icons/heart.svg";
import FlagIcon from "public/icons/flag.svg";
import Link from "next/link";

const NavBar = () => {
  const NavItem = useMemo(
    () => [
      {
        path: "/",
        icon: <HomeIcon />,
        title: "HOME",
      },
      {
        path: "/challenge",
        icon: <FlagIcon />,
        title: "MAIN",
      },
      {
        path: "like",
        icon: <LikeIcon />,
        title: "LIKE",
      },
      {
        path: "/profile",
        icon: <ProfileIcon />,
        title: "MY",
      },
    ],
    []
  );

  return (
    <nav className={styles.nav}>
      <ul>
        {NavItem.map((v, i) => (
          <Link key={i} href={v.path}>
            <div className={styles["nav-item"]}>
              <li>{v.icon}</li>
              <span>{v.title}</span>
            </div>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
