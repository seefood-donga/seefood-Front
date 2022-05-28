import { Post } from 'types/post';
import { User } from 'types/user';

export const dummyUser :User = {
  email:"test@naver.com",
  nickname: "testUser",
  profileURL:null
}

export const postList: Post[] = [
  {
    imageUrl:"/food.png",
    user:dummyUser,
    calories:[
      {
        cal:300,
        position:{
          x:0, y:0
        }
      },
      {
        cal:800,
        position:{
          x:0, y:0
        }
      },
    ],
    likers: []
  },  
]