import { CalendarResponse } from "types/calendar";
import { request } from "./client";

export const getFoodAPI = () => {};

type getCalendarType = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => Promise<CalendarResponse>;
export const getCalendarAPI: getCalendarType = ({ year, month }) => {
  return request({
    method: "get",
    url: "/food/calendar",
    params: {
      year,
      month,
    },
  }).then((res) => res.data);
};
