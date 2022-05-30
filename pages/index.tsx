import SearchBar from 'components/custom/search';
import PostList from 'components/post';
import { NextPageWithLayout } from 'types/common'

const MainPage: NextPageWithLayout = () => {
  return (
    <div>
      <SearchBar />
      <PostList />
    </div>
  )
}

MainPage.header = true;
MainPage.back = false;



export default MainPage
