import { dummyUser, dummyUserPost, todayMyCalorie } from "dummy";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NextPageWithLayout } from "types/common";
import gravatar from "gravatar";
import styles from "styles/profile/profile-detail.module.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import CustomProgress from "components/custom/progress";
import CustomUserPost from "components/custom/user-post";

const ProfileDetail: NextPageWithLayout = () => {
  const router = useRouter();
  // user id로 user의 업로드 리스트 벡엔드에서 받아옴
  const userPost = dummyUserPost;
  // 유저정보
  const userData = dummyUser;
  // today cal
  const todayCal = todayMyCalorie;

  const [caution, setCaution] = useState(false);
  const [nowCategory, setNowCategory] = useState("전체");

  const category = useMemo(() => ["전체", "아침", "점심", "저녁"], []);

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
          <div className={styles.profile}>
            {userData.profileURL ? (
              <div>프로필 사진</div>
            ) : (
              <img
                src={gravatar.url(userData.email, { s: "50px", d: "mp" })}
                alt="garvatar"
              />
            )}
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
      <ul className={styles.category}>
        {category.map((v, i) => (
          <span>
            <li
              key={i}
              className={nowCategory === v ? styles.active : ""}
              onClick={() => setNowCategory(v)}
            >
              {v}
            </li>
          </span>
        ))}
      </ul>
      <div className={styles.hr}>
        {category.map((v, i) => (
          <div className={nowCategory === v ? styles.act : styles.non}>
            &nbsp;
          </div>
        ))}
      </div>
      <div className={styles["active-category"]}>
        <div></div>
      </div>
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
