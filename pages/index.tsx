import SearchBar from "components/custom/search";
import UploadButton from 'components/custom/upload-button';
import PostList from "components/post";
import { NextPageWithLayout } from "types/common";

const MainPage: NextPageWithLayout = () => {
  return (
    <>
      <SearchBar />
      <div style={{ paddingTop: 60 }}>
        <PostList />
        <div>배포 테스트</div>
        <div>배포 테스트2</div>
        <UploadButton />
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
