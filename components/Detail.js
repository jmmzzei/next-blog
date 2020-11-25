import Title from '../components/Title'
import Loading from '../components/Loading'
import styles from '../styles/Home.module.css'

export default ({ title, body }) => {
  return (
    <>
      <Title> {title ? title : <Loading />}</Title>
      <p className={styles.detail}>{body ? body : <Loading  /> }</p>
    </>
  )
}
