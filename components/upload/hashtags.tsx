import useInput from "hooks/use-input";
import React, { KeyboardEvent, useState } from "react";
import styles from "styles/upload/hashtag.module.scss";

const Hashtags = () => {
  const [tagInput, onChangeTagInput] = useInput("");
  const [tags, setTags] = useState([]);

  const onKeyDown = (e:KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === 'Enter'){
      console.log('enter Event')
    }
  }

  return (
      <ul className={styles["tag-wrapper"]}>
        {tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
        <input
          className={styles.input}
          type="text"
          value={tagInput}
          onChange={onChangeTagInput}
          onKeyUp={onKeyDown}
        />
      </ul>
  );
};

export default Hashtags;
