import { Calendar } from "types/calendar";
import { Post } from "types/post";
import { RankUser, User } from "types/user";

export const dummyUser: User = {
  id: 1,
  email: "test@naver.com",
  nickname: "testUser",
  profileURL: null,
  recomanded: 1000,
  likePost: [{ id: 1 }, { id: 2 }, { id: 3 }],
  myUpload: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
  height: 170,
  weight: 50,
};

export const todayMyCalorie: number = 700;

export const singlePost: Post = {
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
  category: "아침",
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
    category: "아침",
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
    category: "점심",
  },
];

export const dummyCalendarData: Calendar[] = [
  {
    date: "2022-07-08",
    cal: 1200,
  },
  {
    date: "2022-07-09",
    cal: 900,
  },
  {
    date: "2022-07-11",
    cal: 800,
  },
  {
    date: "2022-07-13",
    cal: 800,
  },
  {
    date: "2022-07-21",
    cal: 800,
  },
  {
    date: "2022-07-25",
    cal: 1200,
  },
];

export const dummyUserPost: Post[] = [
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
    category: "아침",
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
    category: "점심",
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
    category: "아침",
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
    category: "점심",
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
    category: "아침",
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
    category: "저녁",
  },
];

export const rankList: RankUser[] = [
  {
    id: 1,
    profileURL: null,
    nickname: "사용자1",
    total: 300,
  },
  {
    id: 2,
    profileURL: null,
    nickname: "사용자2",
    total: 1300,
  },
  {
    id: 3,
    profileURL: null,
    nickname: "사용자3",
    total: 300,
  },
  {
    id: 4,
    profileURL: null,
    nickname: "사용자4",
    total: 300,
  },
  {
    id: 5,
    profileURL: null,
    nickname: "사용자5",
    total: 300,
  },
];
