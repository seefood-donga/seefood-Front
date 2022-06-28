import CompleteButton from "components/custom/complete-button";
import React, { FormEvent, MouseEvent, useCallback } from "react";
import styles from "styles/upload/upload.module.scss";
import Hashtags from './hashtags';
import ImageUploadModule from "./image-upload";
import UploadCategory from './upload-category';

const UploadForm = () => {
  const uploadSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("업로드 버튼 클릭");
  }, []);

  

  return (
    <form onSubmit={(e:FormEvent<HTMLFormElement>)=> e.preventDefault()} className={styles.form}>
      <CompleteButton onClickHandler={uploadSubmit} isActive={false} />
      <h4>식단 사진</h4>
      <ImageUploadModule />
      <hr />
      <h4>식사 시간</h4>
      <UploadCategory />
      <hr />
      <h4>해쉬태그 등록</h4>
      <Hashtags />
    </form>
  );
};

export default UploadForm;
