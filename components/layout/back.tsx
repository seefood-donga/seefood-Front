import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styles from "styles/layout.module.scss";
import BackIcon from "public/icons/back.svg";
const BackButton = ({ color }: { color: string }) => {
  const router = useRouter();
  const onBack = useCallback(() => router.back(), [router]);

  return (
    <div onClick={onBack} className={styles.back}>
      {color === "grey" ? (
        <BackIcon fill="#A0A1A5" />
      ) : (
        <BackIcon fill="#ffffff" />
      )}
    </div>
  );
};

export default BackButton;
