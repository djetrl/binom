
import { Inter } from "next/font/google";
import styles from "../app/style/Home.module.css";
import { NewsPage } from "../views";
import { Pagination } from "antd";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <NewsPage idPage={0}/>
      </main>
    </>
  );
}
