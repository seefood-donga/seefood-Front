import PostCard from 'components/post/post-card';
import { singlePost } from 'dummy';
import React from 'react';
import { NextPageWithLayout } from 'types/common';

const LikePage :NextPageWithLayout = () =>{
  // 좋아요 게시물 벡엔드에서 받아옴
  const LikeSample = singlePost;
  return (
    <div style={{padding:"16px 0px"}}>
      <PostCard postData={LikeSample} />
    </div>
  )
}

LikePage.header={title:"관심 식단"}

export default LikePage;