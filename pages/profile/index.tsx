import React from "react";
import { NextPageWithLayout } from "types/common";
import styles from "styles/profile.module.scss";
import { dummyUser } from "dummy";
import gravatar from "gravatar";
import CustomCalendar from "components/custom/calendar";
const ProfilePage: NextPageWithLayout = () => {
  // 벡엔드에서 유저정보 가져옴
  const userData = dummyUser;

  return (
    <div className={styles.wrapper}>
      <section className={styles["profile-section"]}>
        <div className={styles.user}>
          {userData.profileURL ? (
            <div>프로필 사진</div>
          ) : (
            <img
              src={gravatar.url(userData.email, { s: "60px", d: "mp" })}
              alt="garvatar"
            />
          )}
          <div className={styles.nickname}>{userData.nickname}</div>
          <button className={styles["edit-button"]}>프로필수정</button>
        </div>
      </section>
      <section className={styles["calendar-section"]}>
        <CustomCalendar />
        <button className={styles["my-feed"]}>전체 식단 보기</button>
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
