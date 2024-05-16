
import {FC} from "react";
import { NewsDetail } from "../../entities/News/ui";
type NewsDetailPageProps = {
  id:number
}
const NewsDetailPage:FC<NewsDetailPageProps> = ({id})=>{
  return (
    <div>
      <NewsDetail id={id}/>
    </div>
  )
};


export default NewsDetailPage;