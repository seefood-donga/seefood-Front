import React from "react";
import { RankUser } from "types/user";
import styles from "styles/challenge/rank.module.scss";
import Image from "next/image";
interface Props {
  userData: RankUser;
}
const RankItem = ({ userData }: Props) => {
  console.log(userData);
  return (
    <div className={styles.box}>
      {userData.profileURL ? (
        <div>프로필 사진</div>
      ) : (
        <Image
          src="/images/default-profile.png"
          width={40}
          height={40}
          alt="profile"
        />
      )}
      <h4>{userData.nickname}</h4>
      <span className={styles.cal}>
        <span>총</span>
        <span> {userData.total} Kcal</span>
      </span>
    </div>
  );
};

export default RankItem;
