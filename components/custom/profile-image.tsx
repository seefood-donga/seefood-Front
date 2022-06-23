import { dummyUser } from "dummy";
import Image from "next/image";
import React from "react";

const ProfileImage = ({size} :{size:number}) => {
  const userData = dummyUser;

  return (
    <>
      {userData.profileURL ? (
        <div>프로필 사진</div>
      ) : (
        <Image
          src="/images/default-profile.png"
          width={size}
          height={size}
          alt="profile"
        />
      )}
    </>
  );
};

export default ProfileImage;
