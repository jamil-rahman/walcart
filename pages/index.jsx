import Head from "next/head";
import BodySection from "../components/Body Section/BodySection";
import TopSection from "../components/Top Section/TopSection";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomSection from "../components/Bottom Section/BottomSection";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Walcart: Online Global Marketplace</title>
        <meta name="description" content="Landing page of Walcart" />
      </Head>

      <TopSection />
      <BodySection />
      <BottomSection />
    </>
  );
}
