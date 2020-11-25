import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Grid from '../components/Grid'
import Card from '../components/Card'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Container from '../components/Container'

export default function Home() {
  return (
    <Container>

      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Welcome to my Blog</Title>

        <p className={styles.description}>
          Below you have some of my posts... Enjoy!
        </p>

        <Grid>
          <Card title="Post 1" desc="Lorem ipsum" id="/posts/1" />
        </Grid>
      </Main>
      <Footer />
    </Container>
  )
}
