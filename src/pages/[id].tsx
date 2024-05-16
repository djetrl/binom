
import { Inter } from "next/font/google";
import styles from "../app/style/Home.module.css";
import '../app/style/globals.css'
import { NewsPage } from "../views";


export const getServerSideProps =  async (context) =>{
  const {id} = context.params;
  return { props:{ idPage:id}}

 }

const inter = Inter({ subsets: ["latin"] });

export default function Home({idPage}) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <NewsPage idPage={idPage}/>
      </main>
    </>
  );
}
