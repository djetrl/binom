'use Client';
import { Pagination } from 'antd';
import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router'
import axios from 'axios';
import style from './style.module.css'
type CustomPaginateProps = {
  idPage:number
}
const fetchTotalData = async () =>{
  const {data} = await axios.get('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=1&limit=0')
  return data.total_blogs
}


const CustomPaginate:FC<CustomPaginateProps> = ({idPage}) => {
  const {data} = useQuery('news', fetchTotalData );
  return (
    <div className={`${style.ContainerPaginate}`}>
         <Pagination defaultCurrent={idPage ? idPage : 1} total={data && data.total_blogs} onChange={(e)=>{window.location.href = (`/${e}`)}} />
    </div>
  );
};

export default CustomPaginate;


 

