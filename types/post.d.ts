import { User } from './user';

export type Post = {
  postId?: number;
  imageUrl: string;
  createdAt?: number;
  calories : Calorie[];
  user: User;
  likers: Partial<User>[];
};

type Calorie = {
  position: {
    x: number;
    y: number;
  };
  cal : number;
};
