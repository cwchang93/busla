import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
// import Button from "../Components/Button/Button";
import { Button } from "antd";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BusLa - 巴士啦！</title>
        <meta name="description" content="搜尋台灣公車" />
        <link rel="icon" href="/icon_bus.png" />
      </Head>
      <div className={styles.main}>
        <div className={styles.title}>BUSLA 巴士啦</div>
        <div className={styles.logoWrap}>
          <img src="/icon_bus.png" />
        </div>
        <div className={styles.funcWrap}>
          <Button size="large" shape="round">
            路線查詢
          </Button>
          <Button size="large" shape="round">
            路線規劃
          </Button>
          <Button size="large" shape="round">
            客運時刻
          </Button>
        </div>

        <div className={styles.footer}>Designed by VK / Developed by JW</div>
      </div>
      <div className={styles.horizontal}></div>
      <div className={styles.vertical}></div>
    </div>
  );
};

export default Home;
