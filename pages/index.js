import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Blog</h1>

        <p className={styles.description}>
          Below you have some of my posts... Enjoy!
        </p>

        <div className={styles.grid}>
          
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Post 1 &rarr;</h3>
            <p>Lorem ipsum...</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        Coded_by_<a href="jmmzzei.com"> me </a>
      </footer>
    </div>
  )
}
