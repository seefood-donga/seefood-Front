import React from 'react';
import { NextPageWithLayout } from 'types/common';

const ProfileEditPage:NextPageWithLayout = () => {
  return (
    <div>Profile Edit Page</div>
  )
};

ProfileEditPage.noNav=true;
ProfileEditPage.header={title:"프로필 수정"}


export default ProfileEditPage;