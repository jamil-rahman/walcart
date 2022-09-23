import Head from "next/head";
import BodySection from "../components/Body Section/BodySection";
import TopSection from "../components/Top Section/TopSection";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Walcart</title>
        <meta name="description" content="Landing page of Walcart" />
      </Head>

      <TopSection />
      <BodySection />
    </div>
  );
}
