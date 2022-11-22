import React, { useCallback, useState } from "react";
import styles from "styles/post/post.module.scss";
import { Post } from "types/post";
import PostImage from "./post-image";
import HeartIcon from "public/icons/heartColored.svg";
import BlankHeartIcon from "public/icons/heart.svg";
import ProfileImage from "components/custom/profile-image";
import { getCookie } from "cookies-next";
import LikeButton from "components/custom/like-button";
import { useRouter } from "next/router";

interface Props {
  postData: Post;
}

const PostCard = ({ postData }: Props) => {
  const router = useRouter();
  const isLogin = getCookie("accessToken");
  const [isLike, setIsLike] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleLike = useCallback(
    (e) => {
      e.stopPropagation();
      setIsLike((prev) => !prev);
      if (!isActive) setIsActive(true);
    },
    [isLike]
  );

  return (
    <div className={styles.card}>
      <header>
        <section className={styles["user-info"]}>
          <ProfileImage size={40} />
          <div className={styles.nickname}>{postData.user.nickname}</div>
        </section>
      </header>
      <section>
        <PostImage imageUrl={postData.imageUrl} calories={postData.calories} />
      </section>
      <section className={styles["descript-section"]}>
        <div className={styles["post-info"]}>
          <div className={styles.icons}>
            {isLogin && (
              <LikeButton
                isLike={isLike}
                isActive={isActive}
                toggleLike={toggleLike}
              />
            )}
            {isLogin && <span>•</span>}
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
            <span key={i} onClick={() => router.push(`/search/${v}`)}>
              #{v}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostCard;

/* 내가 좋아요 한 식단인지 아닌지 판단해야함, 
서버에서 해서 줘도 되고 프론트에서 해도되고 */
