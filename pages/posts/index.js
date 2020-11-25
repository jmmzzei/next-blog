import Title from '../../components/Title'
import Card from '../../components/Card'
import Grid from '../../components/Grid'
import Main from '../../components/Main'

export default ({ posts }) => {
  return (
    <Main>
      <Title>Posts</Title>
      <Grid>
        {posts.map(e => (
          <Card title={e.title} desc={e.body} id={e.id} key={e.id} />
        ))}
      </Grid>
    </Main>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (res.ok) {
    const posts = await res.json()
    return { props: { posts: posts } }
  }
  return {}
}
