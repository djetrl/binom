
import axios from 'axios';
export default async function fetchManyNews(idPage:number) {

  
  let response;
  if(idPage <= 0){
    const {data} = await axios.get('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=1&limit=10')
    response = data    
  }else{
    const {data} = await axios.get(`https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${idPage * 10}&limit=10`)
    response = data
  }
  return response;
}