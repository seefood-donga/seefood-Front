import React, { ReactNode, SyntheticEvent } from "react";
import { ModalPotal } from "utils/portal";
import styles from "styles/modal/modal.module.scss";

interface Props {
  children: ReactNode;
  show: boolean;
  close: () => void;
}
const ModalLayout = ({ children, show, close }: Props) => {
  const onClose = (e: SyntheticEvent) => {
    e.stopPropagation();
    if (!((e.target as HTMLElement).id === "inner")) {
      close();
    }
  };
  return show ? (
    <ModalPotal>
      <div onClick={onClose} className={styles["modal-wrapper"]}>
        <div className={styles.background}>
        <div onClick={(e:SyntheticEvent)=> e.stopPropagation()} id="inner" className={styles["modal-inner"]}>
          {children}
        </div>
        </div>
      </div>
    </ModalPotal>
  ) : null;
};

export default ModalLayout;
