import ChallengeOfWeek from 'components/challenge/week';
import React from 'react';
import { NextPageWithLayout } from 'types/common';
import styles from 'styles/challenge/challenge.module.scss';
import RankList from 'components/challenge/rank-list';
import RankPost from 'components/challenge/rank-post';

const ChallengePage : NextPageWithLayout = () =>{
 
  return (
    <div className={styles.layout}>
      <h4>주간 챌린지</h4>
      <ChallengeOfWeek />
      <h4>실시간 랭킹</h4>
      <RankList/>
      <RankPost />
    </div>
  )
}

ChallengePage.header = {title: "챌린지"}

export default ChallengePage;