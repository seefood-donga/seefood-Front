import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import styles from "styles/layout.module.scss";
import BackIcon from 'public/icons/back.svg';
const BackButton = () =>{
  const router = useRouter();
  const onBack = useCallback(() => router.back(),[router]);

  return (
    <div onClick={onBack} className={styles.back}>
      <BackIcon />
    </div>

  )
}

export default BackButton;