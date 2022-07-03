import { rankList } from "dummy";
import React from "react";
import RankItem from "./rank-item";
import styles from "styles/challenge/rank.module.scss";

const RankList = () => {
  // 랭크 리스트 벡엔드에서 받아옴
  const RankList = rankList;

  return (
    <div style={{position:'relative'}}>
      <article className={styles.wrapper}>
        {RankList.map((v, i) => (
          <RankItem key={i} userData={v} />
        ))}
      </article>
    </div>
  );
};

export default RankList;
