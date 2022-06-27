import CompleteButton from 'components/custom/complete-button';
import React from "react";
import { NextPageWithLayout } from "types/common";

const UploadPage: NextPageWithLayout = () => {
  return (
    <div>
      <CompleteButton />
      <div>업로드 페이지</div>
    </div>
  );
};
UploadPage.header = { title: "식단 업로드", noProfile: true };
UploadPage.noNav = true;

export default UploadPage;
