import styles from '../styles/Home.module.css'
export default ({ title, desc }) => (
  <a className={styles.card}>
    <h3>{title}</h3>
    <p>{desc}</p>
  </a>
)
