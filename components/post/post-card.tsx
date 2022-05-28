import React from "react";
import styles from "styles/post/post.module.scss";
import { Post } from "types/post";
import PostImage from "./post-image";
import gravatar from "gravatar";

interface Props {
  postData: Post;
}

const PostCard = ({ postData }: Props) => {
  return (
    <div className={styles.card}>
      <section className={styles["user-info"]}>
        {postData.user.profileURL ? (
          <div>프로필 사진</div>
        ) : (
          <img
            src={gravatar.url(postData.user.email, { s: "34px",d:"mp" })}
            alt="garvatar"
          />
        )}
        <div className={styles.nickname}>{postData.user.nickname}</div>
      </section>
      <section>
        <PostImage imageUrl={postData.imageUrl} calories={postData.calories} />
      </section>
      <section>description</section>
    </div>
  );
};

export default PostCard;
