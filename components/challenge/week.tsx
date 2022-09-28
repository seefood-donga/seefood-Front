import React, { useMemo } from "react";
import getCurrentWeek from "utils/getCurrentWeek";
import styles from "styles/challenge/challenge.module.scss";
import Checked from 'public/icons/checked.svg';

const ChallengeOfWeek = () => {
  const dateOfWeek = getCurrentWeek();
  console.log(dateOfWeek);
  return (
    <article className={styles.wrapper}>
      {dateOfWeek.map((v, i) => (
        <div className={styles.item} key={i}>
          <span>{v.day}</span>
          <span>{v.date}</span>
          <Checked width={36} height={36} />
        </div>
      ))}
    </article>
  );
};

export default ChallengeOfWeek;
