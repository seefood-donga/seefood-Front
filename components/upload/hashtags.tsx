import useInput from "hooks/use-input";
import React, { KeyboardEvent, MouseEvent, useRef, useState } from "react";
import Xmark from "public/icons/Xmark.svg";
import styles from "styles/upload/hashtag.module.scss";
import { RootState } from "reducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import uploadSlice from "reducer/upload";

const Hashtags = () => {
  const [tagInput, onChangeTagInput, setTagInput] = useInput("");
  const { tags } = useSelector((state: RootState) => state.upload);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if(tags.includes(tagInput)) {
        setTagInput("");
        return;
      } // 같은 값은 추가 안되게
      dispatch(uploadSlice.actions.addTag(tagInput));
      setTagInput("");
      setTimeout(() => {
        inputRef.current!.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
  const DeleteTag = (e: MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget === e.target) return; // x 아이콘 눌렀을 때만 이벤트 적용
    const targetTag = e.currentTarget.innerText.substring(2);
    dispatch(uploadSlice.actions.deleteTag(targetTag));
  };

  return (
    <ul className={styles["tag-wrapper"]}>
      {tags?.map((tag, i) => (
        <li key={i} className={styles.tag}>
          <span onClick={DeleteTag}>
            # {tag}
            <Xmark width={8} fill="#44474B" />
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
          maxLength={8}
        />
      </li>
    </ul>
  );
};

export default Hashtags;
