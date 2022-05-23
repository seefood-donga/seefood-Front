import CustomInput from "components/custom/input";
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import styles from "styles/auth.module.scss";

const LoginForm = () => {
  return (
    <>
      <form>
        <CustomInput inputType="text" placeHolderMessage="이메일 입력" />
        <CustomInput inputType="password" placeHolderMessage="비밀 번호 입력" />
        <button type="submit" className={styles["login-button"]}>
          로그인
        </button>
      </form>
      <section className={styles.Outh}>
        <div className={styles.title}>
          <span>sns로 로그인 하기</span>
        </div>
        <section className={styles["logo-section"]}>
          <div className={styles["Outh-login"]}>
            <div className={styles.img}>
              <Image src="/icons/google.svg" width={20} height={20} />
            </div>
            <div>구글로 로그인 하기</div>
          </div>
          <div className={styles["Outh-login"]}>
            <div className={styles.img}>
              <Image src="/icons/naver.svg" width={22} height={22} />
            </div>
            <div>네이버로 로그인 하기</div>
          </div>
          <div className={styles["Outh-login"]}>
            <div className={styles.img}>
              <Image src="/icons/kakao.svg" width={22} height={22} />
            </div>
            <div>카카오로 로그인 하기</div>
          </div>
        </section>
        <section className={styles.signup_section}>
          <span>회원이 아니신가요? </span>
          <Link href="/sign-up">
            <a className={styles.signup}>회원가입</a>
          </Link>
        </section>
      </section>
    </>
  );
};

export default LoginForm;
