import { lightFormat } from "date-fns";

const dateConversion = (date:Date) =>{
  const newDate:Date = new Date(date);
  return lightFormat(newDate, 'yyyy.MM.dd')
}


export default dateConversion