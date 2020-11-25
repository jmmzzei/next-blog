import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default ({ title, desc, id }) => (
  <Link href="/posts/[id]" as={`/posts/${id}`}>
    <a className={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </a>
  </Link>
)
