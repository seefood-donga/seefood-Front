import React, { useState } from "react";
import NoImage from "public/icons/no-image.svg";
import UploadIcon from 'public/icons/upload.svg';
import DeleteIcon from 'public/icons/delete.svg';
import CheckedIcon from 'public/icons/checked.svg';
import styles from "styles/upload/upload.module.scss";


const DefaultImage = () => {
  return (
    <div className={styles.img}>
      <NoImage />
      <pre>이미지를 업로드 해주세요</pre>
    </div>
  );
};

const ImageUploadModule = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles["img-wrapper"]}>
        {isUpload ? <img src={imageUrl} alt="upload-meal" /> : <DefaultImage />}
      </div>
      <ul>
        <li>
          <input type='file' hidden/>
          <UploadIcon />
        </li>
        <li>
          <DeleteIcon />
        </li>
        <li>
          <CheckedIcon />
        </li>
      </ul>
    </div>
  );
};

export default ImageUploadModule;
