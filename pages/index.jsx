import Head from 'next/head'
import TopSection from '../components/Top Section/TopSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Walcart</title>
        <meta name="description" content="Landing page of Walcart" />
      </Head>

      <TopSection />
     <p className={styles.title}>This is home </p>
    </div>
  )
}
