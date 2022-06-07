import Image from "next/image";
import React, { useCallback, useState } from "react";
import styles from "styles/post/post.module.scss";
import { Calorie } from "types/post";

interface Props {
  imageUrl: string;
  calories: Calorie[];
}

const PostImage = ({ imageUrl, calories }: Props) => {
  const [showCalorie, setShowCalorie] = useState(false);
  const toggleShow = useCallback(() => {
    setShowCalorie((prev) => !prev);
  }, []);

  return (
    <div className={styles["image-wrapper"]} onClick={toggleShow}>
      <Image src={imageUrl} alt="food" layout="fill" />
      {showCalorie && (
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
      )}
    </div>
  );
};

export default PostImage;
