import React from "react";
import { NextPageWithLayout } from "types/common";
import styles from "styles/profile/profile.module.scss";
import { dummyUser } from "dummy";
import gravatar from "gravatar";
import CustomCalendar from "components/custom/calendar";
import EditIcon from "public/icons/edit.svg";
import Link from "next/link";
const ProfilePage: NextPageWithLayout = () => {
  // 벡엔드에서 유저정보 가져옴
  const userData = dummyUser;

  return (
    <div className={styles.wrapper}>
      <section className={styles["profile-section"]}>
        <div className={styles.user}>
          <div className={styles["user-wrapper"]}>
            {userData.profileURL ? (
              <div>프로필 사진</div>
            ) : (
              <img
                src={gravatar.url(userData.email, { s: "50px", d: "mp" })}
                alt="garvatar"
              />
            )}
            <span className={styles.nickname}>{userData.nickname}</span>
          </div>
          <div>
            <EditIcon fill="#ffffff" />
          </div>
        </div>
      </section>
      <div className={styles["post-info"]}>
        <Link href={`/profile/${userData.id}`}>
          <a>
            <span>나의 전체 식단 : {userData.myUpload.length}</span>
          </a>
        </Link>
        <Link href="/like">
          <a>
            <span>나의 관심 식단 : {userData.likePost.length}</span>
          </a>
        </Link>
      </div>
      <section className={styles["calendar-section"]}>
        <header>식단 일기</header>
        <hr />
        <CustomCalendar />
        <Link href={`/profile/${userData.id}`}>
          <a>
            <button className={styles["my-feed"]}>전체 식단 보기</button>
          </a>
        </Link>
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
