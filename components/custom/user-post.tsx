import Image from 'next/image';
import React from 'react';
import { Post } from 'types/post';
interface Props{
  userPost:Post[]
}
const CustomUserPost = ({userPost}:Props) => {
  return (
    <>
      {
        userPost.map((v, i)=>  <Image key={i} src={v.imageUrl} width={130} height={100} alt="post" />)
      }
    </>
  )
}

export default CustomUserPost;