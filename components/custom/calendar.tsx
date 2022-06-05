import dayjs from "dayjs";
import { dummyCalendarData, dummyUser } from "dummy";
import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "styles/custom/calendar.module.scss";

const CustomCalendar = () => {
  const [value, onChange] = useState(new Date());
  // 벡엔드에서 유저 정보 불러옴
  const userData = dummyUser;
  // 벡엔드 에서 날짜별 데이터 불러옴
  const calendarData = dummyCalendarData;

  const customEvent = (value: any) => {
    console.log("월, 년 바뀜", value);
  };
  const customClickDay = (value: any) => {
    console.log("click Day!!", value);
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
      />
    </div>
  );
};

export default CustomCalendar;
