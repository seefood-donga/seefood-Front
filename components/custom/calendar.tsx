import dayjs from "dayjs";
import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "styles/custom/calendar.module.scss";

const CustomCalendar = () => {
  const [value, onChange] = useState(new Date());
  const customEvent = (value:any) =>{
    console.log('월, 년 바뀜', value);
  };
  const customClickDay = (value:any) => {
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
        onActiveStartDateChange={(value)=>customEvent(value)}
        onClickDay={(value)=>customClickDay(value)}
        tileContent={({ date, view }) => (
          <div className={styles["tile-wrapper"]}>
            <div>😀</div>
          </div>
        )}
      />
    </div>
  );
};

export default CustomCalendar;
