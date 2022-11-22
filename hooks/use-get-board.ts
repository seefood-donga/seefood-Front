import { useEffect } from "react";
import { getBoardAPI } from "apis/board";
import { useInfiniteQuery } from "react-query";
import { BoardResponse } from "types/post";

interface Props {
  inView: boolean;
}

const useGetBoard = ({ inView }: Props) => {
  const { data, fetchNextPage, isLoading } =
    useInfiniteQuery<BoardResponse>(
      ["boardList"],
      ({ pageParam = 0 }) => getBoardAPI(pageParam),
      {
        getNextPageParam: (lastPage, pages) => {
          if (!lastPage.isLast) return lastPage.nowPage + 1;
          return undefined;
        },
      }
    );
  const boardList = data?.pages
    .flat()
    .map((v) => v.boardList)
    .flat();
  const isEmpty = data?.pages[0]?.boardList.length === 0;
  const isReachingEnd =
    isEmpty || (data && data.pages[data.pages.length - 1]?.isLast === true);
  const hasMorePosts = !isEmpty && !isReachingEnd;
  const readToLoad = hasMorePosts && !isLoading;

  useEffect(() => {
    if (inView && readToLoad) {
      fetchNextPage();
    }
  }, [inView, readToLoad, fetchNextPage]);
  return { boardList, isLoading, readToLoad };
};

export default useGetBoard;
