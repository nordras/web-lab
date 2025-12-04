import styles from './container-queries.module.css'

export default function ContainerQueriesPage() {
  return (
    <div className={styles['demo-container']}>
      <div className={styles['card-grid']}>
        <div className={styles.card}>
          <img src="https://picsum.photos/400/300" alt="Sample" />
          <h3>Responsive Card</h3>
          <p>This card adapts based on container width, not viewport</p>
        </div>
      </div>
    </div>
  )
}


