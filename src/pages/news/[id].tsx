
import { NewsDetailPage } from "../../views";

 

 export const getServerSideProps =  async (context) =>{
  const {id} = context.params;

  return { props:{ id:id}}

 }
 
 
 const News =  ({id})=>{

  return(
    <NewsDetailPage id={id}/>
  )
}

export default News;