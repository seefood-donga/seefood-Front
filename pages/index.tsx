import SearchBar from "components/custom/search";
import PostList from "components/post";
import { NextPageWithLayout } from "types/common";

const MainPage: NextPageWithLayout = () => {
  return (
    <>
      <SearchBar />
      <div style={{ paddingTop: 60 }}>
        <PostList />
      </div>
    </>
  );
};

MainPage.header = true;
MainPage.back = {
  has:false,
  color:"",
};

export default MainPage;
