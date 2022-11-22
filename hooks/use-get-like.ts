import { getLikeAPI } from 'apis/like';
import React from "react";
import { useInfiniteQuery } from 'react-query';
import { BoardResponse } from 'types/post';

const useGetLike = () => {
  const { data, fetchNextPage, isSuccess, hasNextPage, isLoading } =
    useInfiniteQuery<BoardResponse>(
      ["likeList"],
      ({ pageParam = 0 }) => getLikeAPI(pageParam),
      {
        getNextPageParam: (lastPage, pages) => {
          if (!lastPage.isLast) return lastPage.nowPage + 1;
          return undefined;
        },
      }
    );
  return { data, fetchNextPage, isSuccess, hasNextPage, isLoading };
};
export default useGetLike;
