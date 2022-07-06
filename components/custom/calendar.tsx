import DateModal from 'components/modal/date-modal';
import dayjs from "dayjs";
import { dummyCalendarData, dummyUser } from "dummy";
import useModal from 'hooks/use-modal';
import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "styles/custom/calendar.module.scss";

const CustomCalendar = () => {
  const [value, onChange] = useState(new Date());
  // 벡엔드에서 유저 정보 불러옴
  const userData = dummyUser;
  // 벡엔드 에서 날짜별 데이터 불러옴
  const calendarData = dummyCalendarData;
  const [selectedDate, setSelectedDate] = useState({});

  const {isOpen, onClose, setIsOpen} = useModal();
  const customEvent = (value: any) => {
    console.log("월, 년 바뀜", value);
  };
  const customClickDay = (value:any) => {
    const day = dayjs(value); // value를 date 객체로 변환
    setSelectedDate(day);
    setIsOpen(true);
    console.log("click Day!!", day);
  };
  return (
    <div className={styles["calendar-wrapper"]}>
      <Calendar
        formatDay={(_locale, date) => dayjs(date).format("DD")}
        showNeighboringMonth={false}
        minDetail="month"
        maxDetail="month"
        navigationLabel={null!}
        onChange={onChange}
        value={value}
        onActiveStartDateChange={(value) => customEvent(value)}
        onClickDay={(value) => customClickDay(value)}
        tileContent={({ date, view }) => {
          if (
            calendarData.find(
              (v) =>
                v.date === dayjs(date).format("YYYY-MM-DD") &&
                v.cal < userData.recomanded
            )
          ) {
            return <div className={styles["tile-wrapper"]}>😀</div>;
          } else if (
            calendarData.find(
              (v) =>
                v.date === dayjs(date).format("YYYY-MM-DD") &&
                v.cal >= userData.recomanded
            )
          ) {
            return <div className={styles["tile-wrapper"]}>😡</div>;
          } else {
            return <div className={styles["tile-wrapper"]}></div>;
          }
        }}
        tileDisabled={({date,view})=>{
          if(!(calendarData.find((v)=> v.date === dayjs(date).format("YYYY-MM-DD")))){
            return true
          }
          return false
        }}
      />
      <DateModal show={isOpen} close={onClose} date={selectedDate}  />
    </div>
  );
};

export default CustomCalendar;
