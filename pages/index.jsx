import Head from 'next/head'
import Image from 'next/image'
import TopSection from '../components/TopSection/TopSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Walcart</title>
        <meta name="description" content="Landing page of Walcart" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
      </Head>

      <TopSection />
     <p className={styles.title}>This is home </p>
    </div>
  )
}
