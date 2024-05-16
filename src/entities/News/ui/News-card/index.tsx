import { dateConversion } from '../../../../shared';
import { FC } from 'react';
import Link from 'next/link';

import style from './style.module.css';
import { NewsCardType } from '../../../../app/config/types';


const NewsCard:FC<NewsCardType> = ({className, title, photo, date, idNews})=>{

  return (

      <Link href={`/news/${idNews}`} className={`${style.card} ${className}`}>
        <img src={photo} alt={`${title} photo`} className={`${style.card_img}`}/>
        <div  className={`${style.card_content}`}>
          <h3 className={`${style.card_title}`}>{title}</h3>
          <p  className={`${style.card_date}`}>{dateConversion(date)}</p>
        </div>
      </Link>
  )
}

export default NewsCard;