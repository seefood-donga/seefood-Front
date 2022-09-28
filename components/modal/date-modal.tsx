import React from "react";
import ModalLayout from "./modal-layout";

const DateModal = ({
  show,
  close,
  date,
}: {
  show: boolean;
  close: () => void;
  date: any;
}) => {
  if(!show) return null;
  return (
    <ModalLayout show={show} close={close}>
      <div>{date.get('month')+1}월 {date?.date()}일 식단정보 벡엔드에 요청</div>
    </ModalLayout>
  );
};

export default DateModal;
