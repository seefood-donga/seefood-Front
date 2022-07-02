import CompleteButton from "components/custom/complete-button";
import { dummyUser } from "dummy";
import Image from "next/image";
import React, { FormEvent, MouseEvent, useCallback } from "react";
import { useState } from "react";
import styles from "styles/profile/profile-edit.module.scss";
import EditIcon from "public/icons/edit.svg";
import CameraIcon from "public/icons/camera.svg";
const ProfileEditForm = () => {
  const uploadSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    console.log("업로드 버튼 클릭");
  }, []);
  const userData = dummyUser;
  const [profileUrl, setProfileUrl] = useState(userData.profileURL);
  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      className={styles.form}
    >
      <CompleteButton onClickHandler={uploadSubmit} isActive={false} />
      <section className={styles["img-wrapper"]}>
        {profileUrl ? (
          <Image src={profileUrl} alt="profile-image" />
        ) : (
          <Image
            src="/images/default-profile.png"
            width={120}
            height={120}
            alt="profile"
          />
        )}
        <button>
          <CameraIcon width={20} hieght={20} fill="#00ac78" />
        </button>
      </section>
      <hr />
      <h4>기본 정보 수정</h4>
      <span className={styles.edit}>
        <EditIcon width={16} height={16} fill="#00ac78" />
      </span>
      <div style={{ marginTop: 16 }} className={styles.box}>
        <span>연결된 이메일</span>
        <p>{dummyUser.email}</p>
      </div>
      <div className={`${styles.box}`}>
        <div>
          <span>닉네임 수정</span>
          <p>{dummyUser.nickname}</p>
        </div>
      </div>
      <div className={styles["flex-box"]}>
        <div className={styles.box}>
          <span>키</span>
          <p>{dummyUser.height}</p>
        </div>
        <span className={styles.cm}>cm</span>
        <div className={styles.box}>
          <div/>
          <span>몸무게</span>
          <p>{dummyUser.weight}</p>
        </div>
        <span className={styles.kg}>kg</span>
      </div>
    </form>
  );
};

export default ProfileEditForm;
