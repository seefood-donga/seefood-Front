import React, { useEffect, useState } from "react";
import SearchBar from "components/custom/search";
import UploadButton from "components/custom/upload-button";
import PostList from "components/post";
import { getCookie } from "cookies-next";
import useGetBoard from "hooks/use-get-board";
import { useInView } from "react-intersection-observer";
import { NextPageWithLayout } from "types/common";
import { dehydrate, QueryClient } from "react-query";
import { getBoardAPI } from "apis/board";
import useUserDetail from "hooks/use-user-detail";
import useUserId from "hooks/use-user-id";

const MainPage: NextPageWithLayout = () => {
  const isLogin = getCookie("accessToken");
  const [ref, inView] = useInView();

  const { userId } = useUserId();
  const { data: userData } = useUserDetail({ id: userId });
  const { boardList, isLoading, readToLoad } = useGetBoard({
    inView,
  });
  return (
    <>
      <SearchBar />
      <div style={{ paddingTop: 60 }}>
        <PostList />
        <div
          ref={readToLoad ? ref : undefined}
          style={{ height: 10, backgroundColor: "yellow" }}
        />
        {isLogin && <UploadButton />}
      </div>
    </>
  );
};

MainPage.header = true;
MainPage.back = {
  has: false,
  color: "",
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery("boardList", () => getBoardAPI(0));
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default MainPage;
