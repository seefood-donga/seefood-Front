import { NextPageWithLayout } from 'types/common'

const MainPage: NextPageWithLayout = () => {
  return (
    <div>
      메인 페이지
    </div>
  )
}

MainPage.header = true;
MainPage.back = false;



export default MainPage
