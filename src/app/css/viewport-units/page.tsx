import styles from './viewport-units.module.css'

export default function ViewportUnitsPage() {
  return (
    <div className={styles['demo-container']}>
      <div className={styles['viewport-demo']}>
        <div className={`${styles.box} ${styles.vh}`}>
          <span>100vh</span>
          <small>Traditional</small>
        </div>
        <div className={`${styles.box} ${styles.dvh}`}>
          <span>100dvh</span>
          <small>Dynamic</small>
        </div>
        <div className={`${styles.box} ${styles.svh}`}>
          <span>100svh</span>
          <small>Small</small>
        </div>
      </div>
    </div>
  )
}


