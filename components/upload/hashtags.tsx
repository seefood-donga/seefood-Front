import useInput from "hooks/use-input";
import React, { KeyboardEvent, MouseEvent, useRef, useState } from "react";
import Xmark from 'public/icons/Xmark.svg';
import styles from "styles/upload/hashtag.module.scss";

const Hashtags = () => {
  const [tagInput, onChangeTagInput, settagInput] = useInput("");
  const [tags, setTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTags([...tags, tagInput]);
      settagInput("");
      setTimeout(() => {
        inputRef.current!.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
  const DeleteTag = (e: MouseEvent<HTMLSpanElement>)=>{
    const tagetTag = e.currentTarget.innerText.substring(2);
    setTags(tags => tags.filter(tag => tag !== tagetTag));
  };

  return (
    <ul className={styles["tag-wrapper"]}>
      {tags?.map((tag, i) => (
        <li key={i} className={styles.tag}>
          <span onClick={DeleteTag}>
            # {tag}
            <Xmark width={8}  fill="#44474B" />
          </span>
        </li>
      ))}
      <li>
        <span># </span>
        <input
          className={styles.input}
          type="text"
          value={tagInput}
          ref={inputRef}
          onChange={onChangeTagInput}
          onKeyUp={onKeyUp}
          placeholder="태그 추가"
          maxLength={5}
        />
      </li>
    </ul>
  );
};

export default Hashtags;
