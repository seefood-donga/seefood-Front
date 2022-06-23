import React, { useMemo, useState } from "react";
import styles from "styles/profile/profile-detail.module.scss";


const CategorySection = () => {
  const category = useMemo(() => ["전체", "아침", "점심", "저녁"], []);
  const [nowCategory, setNowCategory] = useState("전체");

  return (
    <>
      <ul className={styles.category}>
        {category.map((v, i) => (
          <span>
            <li
              key={i}
              className={nowCategory === v ? styles.active : ""}
              onClick={() => setNowCategory(v)}
            >
              {v}
            </li>
          </span>
        ))}
      </ul>
      <div className={styles.hr}>
        {category.map((v, i) => (
          <div className={nowCategory === v ? styles.act : styles.non}>
            &nbsp;
          </div>
        ))}
      </div>
    </>
  );
};
export default CategorySection;
