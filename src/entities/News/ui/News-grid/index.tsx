

import style from './style.module.css'
import { FC } from 'react';
import { useQuery } from 'react-query'
import LoadingComponent from '../../../../shared/loadingComponentn';
import { fetchManyNews } from '../../api';
import { NewsCardType } from '../../../../app/config/types';

type NewsGridProps = {
  Component:FC<NewsCardType>,
  idPage:number,
}
const NewsGrid:FC<NewsGridProps> = ({Component, idPage})=>{
  const {data, isLoading, isError} = useQuery('news', ()=>fetchManyNews(idPage) );
  if(isLoading || isError || !data.blogs ){
    return <LoadingComponent Data = {data && data.blogs} isError ={isError} isLoading={isLoading}/>
  }
  return(
    <aside className={`${style.NewsGrid}`}>
      {data.blogs.map((blog:any)=>{
      
        return(
          <Component key={blog.id} idNews={blog.id} title={blog.title} photo={blog.photo_url} date={blog.created_at} className={`${style.gridCard} `} />
        )
      })}
    </aside>
  )
}


export default NewsGrid;