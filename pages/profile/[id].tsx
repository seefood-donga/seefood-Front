import { useRouter } from 'next/router';
import React from 'react';
import { NextPageWithLayout } from 'types/common';

const ProfileDetail : NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <div>{router.query.id} profile</div>
  )
}

export default ProfileDetail;