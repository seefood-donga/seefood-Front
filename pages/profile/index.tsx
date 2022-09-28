import React from "react";
import { NextPageWithLayout } from "types/common";
import styles from "styles/profile/profile.module.scss";
import { dummyUser } from "dummy";
import gravatar from "gravatar";
import CustomCalendar from "components/custom/calendar";
import EditIcon from "public/icons/edit.svg";
import Link from "next/link";
import ProfileImage from "components/custom/profile-image";
import CustomLink from "components/custom/link";
const ProfilePage: NextPageWithLayout = () => {
  // 벡엔드에서 유저정보 가져옴
  const userData = dummyUser;

  return (
    <div className={styles.wrapper}>
      <section className={styles["profile-section"]}>
        <div className={styles.user}>
          <div className={styles["user-wrapper"]}>
            <ProfileImage size={50} />
            <span className={styles.nickname}>{userData.nickname}</span>
          </div>
          <CustomLink path="/profile/edit">
            <EditIcon width={16} height={16} fill="#ffffff" />
          </CustomLink>
        </div>
      </section>
      <div className={styles["post-info"]}>
        <CustomLink path={`/profile/${userData.id}`}>
          <span>나의 전체 식단 : {userData.myUpload.length}</span>
        </CustomLink>
        <CustomLink path="/like">
          <span>나의 관심 식단 : {userData.likePost.length}</span>
        </CustomLink>
      </div>
      <section className={styles["calendar-section"]}>
        <header>식단 일기</header>
        <hr />
        <CustomCalendar />
        <CustomLink path={`/profile/${userData.id}`}>
          <button className={styles["my-feed"]}>전체 식단 보기</button>
        </CustomLink>
      </section>
    </div>
  );
};
ProfilePage.noPadding = true;
ProfilePage.back = {
  has: true,
  color: "white",
};

export default ProfilePage;
