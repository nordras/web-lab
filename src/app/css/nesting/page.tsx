import styles from './nesting.module.css'

export default function NestingPage() {
  return (
    <div className={styles['demo-container']}>
      <div className={styles.card}>
        <div className={styles['card-header']}>
          <h3>CSS Nesting</h3>
        </div>
        <div className={styles['card-body']}>
          <p>Native CSS nesting without preprocessors</p>
          <button className={styles.btn}>Primary</button>
          <button className={`${styles.btn secondary}`}>Secondary</button>
        </div>
      </div>
    </div>
  )
}


