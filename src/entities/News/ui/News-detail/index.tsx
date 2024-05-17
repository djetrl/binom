import { dateConversion } from '../../../../shared';
import { FC } from 'react';
import { useQuery } from 'react-query';
import style from './style.module.css';
import Link from 'next/link';
import { fetchOneNews } from '../../api';
import LoadingComponent from '../../../../shared/loadingComponentn';
type NewsDetailProps = {
  
  id:number,
}

const NewsDetail:FC<NewsDetailProps> = ({id})=>{
  const {data, isLoading, isError} = useQuery('news', ()=>fetchOneNews(id) );

  if(isLoading || isError || !data.blog ){
    return <LoadingComponent Data = {data && data.blog} isError ={isError} isLoading={isLoading}/>
  }

  return (
    <div className={`${style.NewsDetailsContainer}`}>
      <div className={`${style.NewsDetails_inner}`}>
      <div className={`${style.NewsDetails_container__btn_Tomain}`}>
        <Link href={`/`} className={`${style.NewsDetails_btn_Tomain}`}>На главную</Link>
      </div>
        <div className={`${style.NewsDetails_header}`}>
          <div className={`${style.NewsDetails_header_inner}`}>
            <img src={data.blog.photo_url} alt={`${data.blog.title}_img`} className={`${style.NewsDetails_img}`} />
              <div className={`${style.NewsDetails_header_content}`}>
              <div className={`${style.NewsDetails_header_content_group}`}>
                <h1 className={`${style.NewsDetails_title}`}>{data.blog.title}</h1>
                <p  className={`${style.NewsDetails_date}`}>{dateConversion(new Date())}</p>
              </div>
                <div className={`${style.category_container}`}>
                  <p className={`${style.category_text}`}>category:</p>
                  <span className={`${style.category_tag}`}>{data.blog.category}</span>
                </div>
              </div>
          </div>
        </div>
        <div className={`${style.NewsDetails_content}`} >
          { data.blog.content_html ?(
            <div className={`${style.NewsDetails_content_inner}`}  dangerouslySetInnerHTML={{__html:data.blog.content_html}}/>
          ):(
            data.blog.content_text
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsDetail;