import { BoardResponse, PostResponse } from "types/post";
import { requestDefault } from "./client";

type getBoardType = (pageParam: number) => Promise<BoardResponse>;

export const getBoardAPI: getBoardType = (pageParam) => {
  return requestDefault({
    method: "get",
    url: "/board",
    params: { page: pageParam },
  }).then((res) => {
    const { data } = res;
    return {
      boardList: data.boardList,
      nowPage: pageParam,
      isLast: !data.hasNextPage,
    };
  });
};
