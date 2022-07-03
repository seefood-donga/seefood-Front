import PostImage from "components/post/post-image";
import { singlePost } from "dummy";
import React from "react";
import styles from "styles/challenge/rank.module.scss";


const RankPost = () => {
  // 벡엔드에서 해당 아이디의 게시물 하나를 가져옴
  // 리덕스로 id 값 관리해서 id로 벡엔드 요청하면 될 듯?
  const SinglePost = singlePost;
  return (
    <article className={styles.post}>
      <h4>{SinglePost.user.nickname} 님의 식단</h4>
      <section className={styles.card}>
        <PostImage
          imageUrl={SinglePost.imageUrl}
          calories={SinglePost.calories}
        />
        <div className={styles.calorie}>
            <span>총</span>
            <h1>1300</h1> <span>Cal</span>
          </div>
      </section>
    </article>
  );
};

export default RankPost;
