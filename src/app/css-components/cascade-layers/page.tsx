import styles from './cascade-layers.module.css'

export default function CascadeLayersPage() {
  return (
    <div className={styles['demo-container']}>
      <div className={styles['layer-demo']}>
        <button className={`${styles.btn} ${styles['base-style']}`}>Base Layer</button>
        <button className={`${styles.btn} ${styles['component-style']}`}>Component Layer</button>
        <button className={`${styles.btn} ${styles['utility-override']}`}>Utility Layer</button>
      </div>
    </div>
  )
}


