import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import NoImage from "public/icons/no-image.svg";
import UploadIcon from "public/icons/upload.svg";
import DeleteIcon from "public/icons/delete.svg";
import CheckedIcon from "public/icons/checked.svg";
import styles from "styles/upload/upload.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "reducer";

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
  const { imageUrl } = useSelector((state: RootState) => state.upload);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIsUpload(true);
    const Image = e.target.files;
    console.log(e.target);
  },
  []);

  const imageUploadHandler = useCallback(() => {
    inputRef.current!.click();
  }, [inputRef.current]);

  return (
    <div className={styles.container}>
      <div className={styles["img-wrapper"]}>
        {isUpload ? <img src={imageUrl} alt="upload-meal" /> : <DefaultImage />}
      </div>
      <ul>
        <li>
          <UploadIcon onClick={imageUploadHandler} />
        </li>
        <li>
          <DeleteIcon />
        </li>
        <li>
          <CheckedIcon width={20} height={20}/>
        </li>
      </ul>
      <input
        type="file"
        name="file"
        ref={inputRef}
        onChange={onChangeImage}
        hidden
      />
    </div>
  );
};

export default ImageUploadModule;
