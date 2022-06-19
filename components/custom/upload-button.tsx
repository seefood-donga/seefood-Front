import React from "react";
import PlusIcon from "public/icons/plus.svg";
import styles from "styles/custom/upload.module.scss";
import Link from "next/link";

const UploadButton = () => {
  return (
    <div className={styles.icon}>
      <Link href={"/upload"}>
        <a>
          <PlusIcon width={32} height={32} fill="white" />
        </a>
      </Link>
    </div>
  );
};

export default UploadButton;
