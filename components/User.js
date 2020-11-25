import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default ({ name, email, phone, id }) => (
  <div className={styles.card}>

  <Link href="/users/[id]" as={`/users/${id}`}>

  <a>
    <p>{name}</p>
    <p>{email}</p>
    <p>{phone}</p>
  </a>
  </Link>
  </div>
)
