import styles from './cascade-layers.module.css'

export default function CascadeLayersPage() {
  return (
    <div className={styles['demo-container']}>
      <div className={styles['layer-demo']}>
        <button className={`${styles.btn base-style}`}>Base Layer</button>
        <button className={`${styles.btn component-style}`}>Component Layer</button>
        <button className={`${styles.btn utility-override}`}>Utility Layer</button>
      </div>
    </div>
  )
}


