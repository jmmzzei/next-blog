import Main from '../../components/Main'
import Detail from '../../components/Detail'

export default ({ post }) => {
  return (
    <Main>
      <Detail title={post.title} body={post.body} />
    </Main>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  )
  if (res.ok) {
    const post = await res.json()
    return { props: { post: post } }
  }
  return {}
}
