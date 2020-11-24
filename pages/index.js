import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Grid from '../components/Grid'
import Card from '../components/Card'

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
        <Grid>
          <Link href="/posts/1">
            <Card title="Post 1" desc="Lorem ipsum" />
          </Link>
        </Grid>
      </main>

      <footer className={styles.footer}>
        Coded_by_<a href="jmmzzei.com"> me </a>
      </footer>
    </div>
  )
}
