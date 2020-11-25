import styles from '../styles/Home.module.css'
import Title from '../components/Title'

export default ({ title, body }) => {
  return (
    <>
      <Title>{title}</Title>
      <p className={styles.detail}>{body}</p>
    </>
  )
}
