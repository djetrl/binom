
import axios from 'axios';
export default async function fetchManyNews(id:number) {
  const {data} = await axios.get(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
  return data

}