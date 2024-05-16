
import {FC} from "react";

import {NewsGrid, NewsCard} from "../../entities/News/ui";

import {CustomPaginate} from '../../shared/'
type NewsPageProps = {
  idPage:number
}
const NewsPage:FC<NewsPageProps> = ({idPage})=>{
  return (
    <div>
      <NewsGrid Component={NewsCard} idPage={idPage}/>
      <CustomPaginate idPage={idPage} />
    </div>
  )
};


export default NewsPage;