import CompleteButton from 'components/custom/complete-button';
import React from 'react';
import { NextPageWithLayout } from 'types/common';

const ProfileEditPage:NextPageWithLayout = () => {
  return (
    <div>
      <CompleteButton onClickHandler={()=> console.log('submit handler')} isActive={false}/>
      Profile Edit Page
    </div>
  )
};

ProfileEditPage.header={title:"프로필 수정", noProfile: true}


export default ProfileEditPage;