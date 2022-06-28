import React, { useState } from 'react';
import styles from 'styles/upload/upload-category.module.scss';

const UploadCategory = () => {
  
  const [selected, setSelected] = useState(false);
  return (
    <ul className={styles.list}>
      <li className={selected ? styles.active:''}>아침</li>
      <li className={selected ? styles.active:''}>점심</li>
      <li className={selected ? styles.active:''}>저녁</li>
    </ul>
  )
}

export default UploadCategory;