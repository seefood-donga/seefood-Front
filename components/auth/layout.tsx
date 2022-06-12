import Image from 'next/image';
import { ReactNode } from 'react';
import styles from 'styles/auth.module.scss';

const AuthLayout = ({children}:{children: ReactNode}) =>{
  return (
    <main className={styles.wrapper}>
      <section className={styles["img-section"]}>
        <div className={styles.logo}>
          <Image src='/logo/seefood-logo.png'  alt='logo' layout='fill' />
        </div>
      </section>
      <section className={styles["form-section"]}>{children}</section>
    </main>
  )
};

export default AuthLayout;