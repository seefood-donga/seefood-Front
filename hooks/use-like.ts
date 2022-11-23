import React, { SetStateAction, Dispatch } from "react";
import { deleteLikeAPI, postLikeAPI } from "apis/like";
import { useMutation, useQueryClient } from "react-query";

interface Props {
  setIsLike: Dispatch<SetStateAction<boolean>>;
}

const useLike = ({ setIsLike }: Props) => {
  const queryClient = useQueryClient();
  const likeMutation = useMutation(postLikeAPI, {
    onMutate: () => {
      setIsLike(true);
    },
    onError: () => {
      setIsLike(false);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["likeList"]);
      queryClient.invalidateQueries({
        queryKey: ["boardList"],
        refetchActive: false,
      });
    },
  });

  const unLikeMutation = useMutation(deleteLikeAPI, {
    onMutate: () => {
      setIsLike(false);
    },
    onError: () => {
      setIsLike(true);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["likeList"]);
      queryClient.invalidateQueries({
        queryKey: ["boardList"],
        refetchActive: false,
      });
    },
  });

  return { likeMutation, unLikeMutation };
};

export default useLike;
