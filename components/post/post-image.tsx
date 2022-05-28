import Image from 'next/image';
import React from 'react';
import styles from 'styles/post/post.module.scss';
import { Calorie } from 'types/post';

interface Props {
  imageUrl:string;
  calories: Calorie[];
}

const PostImage = ({imageUrl, calories}:Props) =>{
  return (
    <div className={styles["image-wrapper"]}>
      <Image src={imageUrl}  alt='food' layout='fill'/>
    </div>
    
  )
}

export default PostImage;