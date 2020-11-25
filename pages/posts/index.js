import { useState, useEffect } from 'react'
import Title from '../../components/Title'
import Card from '../../components/Card'
import Grid from '../../components/Grid'
import Main from '../../components/Main'

export default () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (res.ok) {
        const newPosts = await res.json()
        setPosts(newPosts)
      }
    }
    fetchPosts()
  }, [])

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
