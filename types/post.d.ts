import { User } from './user';

export type Post = {
  postId?: number;
  imageUrl: string;
  createdAt?: number | string;
  calories : Calorie[];
  user: User;
  likers: Partial<User>[];
  hashtags:Array<string>;
  category:"아침" | "점심" | "저녁";
};

type Calorie = {
  position: {
    x: number;
    y: number;
  };
  cal : number;
};
