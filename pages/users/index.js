import User from '../../components/User'
import Grid from '../../components/Grid'
import Main from '../../components/Main'

export default ({ users }) =>(
  <Main>
  <Grid>
    {
  users.map(e => (
    <User key={e.id} name={e.name} id={e.id} phone={e.phone} email={e.email} />
  ))
    }
  </Grid>
  </Main>
  )

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  if (res.ok) {
    const users = await res.json()
    return { props: { users } }
  }
  return {}
}
