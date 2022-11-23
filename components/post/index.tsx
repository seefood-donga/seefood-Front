import { postList } from "dummy";
import React from "react";
import styles from "styles/post/post.module.scss";
import { PostResponse } from "types/post";
import PostCard from "./post-card";

interface Props {
  data: Array<PostResponse>;
}

const PostList = ({ data }: Props) => {
  /* 벡엔드에서 포스트 리스트 가져와야 함 */
  const postData = postList;
  return (
    <div className={styles.wrapper}>
      {data.map((v, i) => (
        <PostCard key={i} postData={v} />
      ))}
    </div>
  );
};

export default PostList;
