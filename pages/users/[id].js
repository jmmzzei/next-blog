import { useRouter } from 'next/router'
export default () => {
  const router = useRouter()
  return <div>UserID is: {router.query.id}</div>
}
