import { Calendar } from "types/calendar";
import { Post } from "types/post";
import { User } from "types/user";

export const dummyUser: User = {
  email: "test@naver.com",
  nickname: "testUser",
  profileURL: null,
  recomanded: 1000,
};

export const postList: Post[] = [
  {
    imageUrl: "/food.png",
    user: dummyUser,
    calories: [
      {
        cal: 300,
        position: {
          x: 90,
          y: 50,
        },
      },
      {
        cal: 500,
        position: {
          x: 150,
          y: 150,
        },
      },
      {
        cal: 500,
        position: {
          x: 220,
          y: 60,
        },
      },
    ],
    likers: [],
    hashtags: ["건강식단", "아침식사", "비건"],
    createdAt: "3일전",
  },
  {
    imageUrl: "/food.png",
    user: dummyUser,
    calories: [
      {
        cal: 300,
        position: {
          x: 90,
          y: 50,
        },
      },
      {
        cal: 500,
        position: {
          x: 150,
          y: 150,
        },
      },
      {
        cal: 500,
        position: {
          x: 220,
          y: 60,
        },
      },
    ],
    likers: [],
    hashtags: ["건강식단", "아침식사", "비건"],
    createdAt: "3일전",
  },
];

export const dummyCalendarData: Calendar[] = [
  {
    date: "2022-06-08",
    cal: 1200,
  },
  {
    date: "2022-06-09",
    cal: 900,
  },
  {
    date:"2022-06-11",
    cal:800
  },
  {
    date:"2022-06-13",
    cal:800
  },
  {
    date:"2022-06-21",
    cal:800
  },
  {
    date:"2022-06-25",
    cal:1200
  },
];
