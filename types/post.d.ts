import { User } from "./user";

export type Post = {
  postId?: number;
  imageUrl: string;
  createdAt?: number | string;
  calories: Calorie[];
  user: User;
  likers: Partial<User>[];
  hashtags: Array<string>;
  category: "아침" | "점심" | "저녁";
};

type Calorie = {
  position: {
    x: number;
    y: number;
  };
  cal: number;
};

// 칼로리 주는 부분
type PostResponse = {
  createdAt: string;
  foodImageUrl: string;
  hashTag: Array<string>;
  calories: Array<Calorie>;
  userName: string;
  isLike: boolean;
  category: "아침" | "점심" | "저녁";
};
type BoardResponse = {
  boardList: Array<PostResponse>;
  nowPage: number;
  isLast: boolean;
};

// 업로드 어떻게
// user
// 포스트 pagePram 0 부터 1씩 증가
