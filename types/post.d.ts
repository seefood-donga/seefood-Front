import { User } from './user';

export type Post = {
  postId?: number;
  imageUrl: string;
  createdAt?: number | string;
  calories : Calorie[];
  user: User;
  likers: Partial<User>[];
  hashtags:Array<string>;
};

type Calorie = {
  position: {
    x: number;
    y: number;
  };
  cal : number;
};
