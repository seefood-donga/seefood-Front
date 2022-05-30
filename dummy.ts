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
          x:90, y:50
        }
      },
      {
        cal:500,
        position:{
          x:150, y:150
        }
      },
      {
        cal:500,
        position:{
          x:220, y:60
        }
      },
    ],
    likers: [],
    hashtags: ["건강식단", "아침식사", "비건"],
    createdAt:"3일전"
  }, 
  {
    imageUrl:"/food.png",
    user:dummyUser,
    calories:[
      {
        cal:300,
        position:{
          x:90, y:50
        }
      },
      {
        cal:500,
        position:{
          x:150, y:150
        }
      },
      {
        cal:500,
        position:{
          x:220, y:60
        }
      },
    ],
    likers: [],
    hashtags: ["건강식단", "아침식사", "비건"],
    createdAt:"3일전"
  }, 
]