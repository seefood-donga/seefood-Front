import React, { useCallback, useState } from "react";
import styles from "styles/post/post.module.scss";
import { Post } from "types/post";
import PostImage from "./post-image";
import gravatar from "gravatar";
import HeartIcon from "public/icons/heartColored.svg";
import BlankHeartIcon from "public/icons/heart.svg";

interface Props {
  postData: Post;
}

const PostCard = ({ postData }: Props) => {
  const [isLike, setIsLike] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleLike = useCallback((e) => {
    e.stopPropagation();
    setIsLike((prev) => !prev);
    setIsActive(true);
  }, [isLike]);

  return (
    <div className={styles.card}>
      <header>
        <section className={styles["user-info"]}>
          {postData.user.profileURL ? (
            <div>프로필 사진</div>
          ) : (
            <img
              src={gravatar.url(postData.user.email, { s: "40px", d: "mp" })}
              alt="garvatar"
            />
          )}
          <div className={styles.nickname}>{postData.user.nickname}</div>
        </section>
      </header>
      <section>
        <PostImage imageUrl={postData.imageUrl} calories={postData.calories} />
      </section>
      <section className={styles["descript-section"]}>
        <div className={styles["post-info"]}>
          <div className={styles.icons}>
            {isLike ? (
              <div className={styles.heart} onClick={toggleLike}>
                <HeartIcon className={isActive ? styles.active : ""} />
              </div>
            ) : (
              <div className={styles.heart} onClick={toggleLike}>
                <BlankHeartIcon
                  className={isActive ? styles.active : ""}
                  fill="#dadada"
                />
              </div>
            )}
            <span>•</span>
            <span>{postData.createdAt}</span>
          </div>
          <div className={styles.calorie}>
            <span>총</span>
            <h1>1300</h1> <span>Cal</span>
          </div>
        </div>
        <div className={styles.hr} />
        <div className={styles.hashtags}>
          {postData.hashtags.map((v, i) => (
            <span key={i}>#{v}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostCard;

/* 내가 좋아요 한 식단인지 아닌지 판단해야함, 
서버에서 해서 줘도 되고 프론트에서 해도되고 */
