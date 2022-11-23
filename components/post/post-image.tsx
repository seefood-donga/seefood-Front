import Image from "next/image";
import React, { MouseEvent, useCallback, useState } from "react";
import styles from "styles/post/post.module.scss";
import { Calorie } from "types/post";

interface Props {
  imageUrl: string;
}

const PostImage = ({ imageUrl }: Props) => {
  const [showCalorie, setShowCalorie] = useState(false);
  const toggleShow = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowCalorie((prev) => !prev);
  }, []);
  return (
    <div className={styles["image-wrapper"]}>
      <Image src={imageUrl} alt="food" layout="fill" />
      {/* {showCalorie && (
        <div className={styles.background}>
          {calories.map((v, i) => (
            <span
              key={i}
              style={{ top: `${v.position.y}px`, left: `${v.position.x}px` }}
            >
              {v.cal}
              <div>cal</div>
            </span>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default PostImage;
