

import style from './style.module.css'
import { FC } from 'react';
import { Empty, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


type LoadingComponentProps = {
  isLoading:boolean,
  isError:boolean,
  Data:any
}
const LoadingComponent:FC<LoadingComponentProps> = ({isLoading, isError, Data})=>{
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if(isLoading){
    return(
      <aside className={`${style.status}`}>
      <Spin indicator={antIcon} />;
    </aside>
    )
  }
  if(isError){
    return (
      <aside className={`${style.status}`}>
        <Empty />;
      </aside>
    )
  }
  if(!Data){
    return (
      <aside className={`${style.status}`}>
        <Empty />;
      </aside>
    )
  }

}


export default LoadingComponent;