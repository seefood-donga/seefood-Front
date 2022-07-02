import ProfileEditForm from "components/profile-edit";
import React from "react";
import { NextPageWithLayout } from "types/common";
import styles from "styles/upload/upload.module.scss";


const ProfileEditPage: NextPageWithLayout = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileEditForm />
    </div>
  );
};

ProfileEditPage.header = { title: "프로필 수정", noProfile: true };
ProfileEditPage.noPadding = true;


export default ProfileEditPage;
