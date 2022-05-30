import { postList } from 'dummy';
import React from 'react';
import styles from 'styles/post/post.module.scss';
import PostCard from './post-card';



const PostList = () => {
  /* 벡엔드에서 포스트 리스트 가져와야 함 */
  const postData = postList;
  return (
    <div className={styles.wrapper}>
      {
        postData.map((v, i)=>  <PostCard  key={i} postData={v}/>)
      }
     
    </div>
  )
}

export default PostList;