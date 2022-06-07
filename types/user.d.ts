
export type User = {
  id?:number;
  email:string;
  nickname:string;
  profileURL:string | null;
  recomanded:number;
  likePost:Array<{id:number}>;
  myUpload:Array<{id:number}>;
}