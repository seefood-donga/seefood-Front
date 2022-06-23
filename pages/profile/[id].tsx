import { dummyUser, dummyUserPost, todayMyCalorie } from "dummy";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NextPageWithLayout } from "types/common";
import styles from "styles/profile/profile-detail.module.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import CustomProgress from "components/custom/progress";
import CustomUserPost from "components/custom/user-post";
import ProfileImage from 'components/custom/profile-image';
import CategorySection from 'components/custom/category-section';

const ProfileDetail: NextPageWithLayout = () => {
  const router = useRouter();
  // user id로 user의 업로드 리스트 벡엔드에서 받아옴
  const userPost = dummyUserPost;
  // 유저정보
  const userData = dummyUser;
  // today cal
  const todayCal = todayMyCalorie;

  const [caution, setCaution] = useState(false);
  

  useEffect(() => {
    if (userData.recomanded < todayCal) {
      setCaution(true);
    }
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{userData.nickname} 님의 식단</div>
      <section className={styles["profile-section"]}>
        <div className={styles["profile-wrapper"]}>
          <div>
            <ProfileImage size={50} />
            <div className={styles.nickname}>{userData.nickname}</div>
          </div>
          <div className={styles["user-info"]}>
            <div>내 식단</div>
            <div>관심 식단</div>
            <div>챌린지</div>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </div>
        </div>
        <div className={styles["chart-section"]}>
          <div>today</div>
          <div className={styles.chart}>
            <CustomProgress valueStart={10} valueEnd={todayCal}>
              {(value) => (
                <CircularProgressbar
                  value={value}
                  maxValue={userData.recomanded}
                  text={`${todayCal} Cal`}
                  styles={buildStyles({
                    textColor: caution ? "#E95733" : "var(--primary)",
                    pathColor: caution ? "#E95733" : "var(--primary)",
                  })}
                />
              )}
            </CustomProgress>
          </div>
          <div>{`${todayCal} / ${userData.recomanded} Cal`}</div>
        </div>
      </section>
      <CategorySection />
      <section className={styles["post-section"]}>
        <div className={styles["post-wrapper"]}>
          <CustomUserPost userPost={userPost} />
        </div>
      </section>
    </div>
  );
};

ProfileDetail.noPadding = true;

export default ProfileDetail;
