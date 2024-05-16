import { NewsDetail } from "../../entities/News/ui";


 

 export const getServerSideProps =  async (context) =>{
  const {id} = context.params;

  return { props:{ id:id}}

 }
 
 
 const News =  ({id})=>{

  return(
    <NewsDetail id={id}/>
  )
}

export default News;