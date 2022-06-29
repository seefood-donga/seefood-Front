import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "reducer";
import uploadSlice from "reducer/upload";
import styles from "styles/upload/upload-category.module.scss";

const UploadCategory = () => {
  const category = useMemo(() => ["아침", "점심", "저녁"], []);
  const { nowCategory } = useSelector((state: RootState) => state.upload);
  const dispatch = useDispatch();
  return (
    <ul className={styles.list}>
      {category.map((v, i) => (
        <li
          key={i}
          className={nowCategory === v ? styles.active : ""}
          onClick={() => dispatch(uploadSlice.actions.setCategory(v))}
        >
          {v}
        </li>
      ))}
    </ul>
  );
};

export default UploadCategory;
