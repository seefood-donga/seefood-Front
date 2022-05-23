import CustomInput from 'components/custom/input';
import useInput from 'hooks/use-input';
import React, { ChangeEvent, useCallback, useState } from 'react';
import styles from "styles/auth.module.scss";

const SignUpForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [isLoading, setIsLoading] = useState(false);

  const [passwordChk, setPasswordChk] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangePasswordChk = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPasswordChk(e.target.value);
      setPasswordError(e.target.value !== password);
      if (e.target.value === "") {
        setPasswordError(false);
      }
    },
    [passwordChk]
  );

  const onSubmit = useCallback((e)=>{
    e.preventDefault();
  },[]);
  return (
    <>
      <form>
        <CustomInput
          inputType="text"
          value={email}
          onChange={onChangeEmail}
          placeHolderMessage="이메일 입력"
          error={{
            isError: emailError,
            message: errorMessage,
          }}
        />
        <CustomInput
          inputType="password"
          value={password}
          onChange={onChangePassword}
          placeHolderMessage="비밀 번호 입력"
        />
        <CustomInput
          inputType="password"
          value={passwordChk}
          onChange={onChangePasswordChk}
          error={{
            isError: passwordError,
            message: "비밀번호가 일치하지 않습니다.",
          }}
          placeHolderMessage="비밀 번호 확인"
          isSuccess={!passwordError && passwordChk !== ""}
        />
        <CustomInput
          inputType="text"
          value={nickname}
          onChange={onChangeNickname}
          placeHolderMessage="닉네임 입력"
          error={{
            isError: nicknameError,
            message: errorMessage,
          }}
        />
        <button
          className={`${styles.button} ${
            !passwordError &&
            nickname !== "" &&
            email !== "" &&
            passwordChk !== ""
              ? styles.color
              : styles.grey
          } `}
          type="submit"
          onClick={onSubmit}
          disabled={
            passwordError || nickname == "" || email == "" || passwordChk == ""
          }
        >
          회원가입 하기
        </button>
      </form>
    </>
  )
};
      
  

export default SignUpForm;