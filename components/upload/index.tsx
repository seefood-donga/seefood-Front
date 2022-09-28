import CompleteButton from "components/custom/complete-button";
import React, { FormEvent, MouseEvent, useCallback, useEffect } from "react";
import { useResetRecoilState } from "recoil";
import { nowCategoryAtom, tagsAtom, uploadImageAtom } from "recoils/upload";
import styles from "styles/upload/upload.module.scss";
import Hashtags from "./hashtags";
import ImageUploadModule from "./image-upload";
import UploadCategory from "./upload-category";

const UploadForm = () => {

  const imageInit = useResetRecoilState(uploadImageAtom);
  const nowCategoryInit = useResetRecoilState(nowCategoryAtom);
  const tagsInit = useResetRecoilState(tagsAtom);

  const uploadSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("업로드 버튼 클릭");
  }, []);

  useEffect(() => {
    return () => {
      imageInit();
      nowCategoryInit();
      tagsInit();
    };
  }, []);

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      className={styles.form}
    >
      <CompleteButton onClickHandler={uploadSubmit} isActive={false} />
      <h4>식단 사진</h4>
      <ImageUploadModule />
      <hr />
      <h4>식사 시간</h4>
      <UploadCategory />
      <hr />
      <h4>
        해쉬태그 등록 <span className={styles.caution}>(최대 8글자)</span>
      </h4>
      <Hashtags />
    </form>
  );
};

export default UploadForm;
