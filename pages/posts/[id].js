import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  return <div>Posts ID is: {router.query.id}</div>
}
