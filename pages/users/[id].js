import {useRouter} from 'next/router'
import Main from '../../components/Main'
import Detail from '../../components/Detail'

export default ({user}) => {
  
  const router = useRouter({user})
  return (
    <Main>
      {router.isFallback 
        ?<Detail />
        :<Detail title={user.name} body={user.email} />
      } 
    </Main>
  )
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  if (res.ok) {
    const user = await res.json()
    return { props: { user } }
  }
  return {}
}

export async function getStaticPaths(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  if (res.ok) {
    const users = await res.json()
    const paths = users.map(e => ({params: {id: e.id.toString() }}))   
    return {
      paths , 
      fallback: true
    } 
  }
  return {}
}
