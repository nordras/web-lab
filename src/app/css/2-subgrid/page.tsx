import styles from './subgrid.module.css'

export default function SubgridPage() {
  return (
    <div className={`${styles['subgrid-demo']} w-full`}>
      <h1>CSS Subgrid</h1>
      <p>Alinhe itens de grid aninhados com o grid pai</p>

      <section className={styles.example}>
        <h2>Sem Subgrid (Desalinhado)</h2>
        <div className={styles['grid-container']}>
          <div className={styles['subgrid-card']}>
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Saiba Mais</button>
          </div>
          <div className={styles['subgrid-card']}>
            <h3>Consectetur Adipiscing Elit Sed Do</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <button>Saiba Mais</button>
          </div>
          <div className={styles['subgrid-card']}>
            <h3>Sed Do Eiusmod</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <button>Saiba Mais</button>
          </div>
        </div>
      </section>

      <section className={styles.example}>
        <h2>Com Subgrid (Alinhado)</h2>
        <div className={`${styles['grid-container']} ${styles['with-subgrid']}`}>
          <div className={styles['subgrid-card']}>
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Saiba Mais</button>
          </div>
          <div className={styles['subgrid-card']}>
            <h3>Consectetur Adipiscing Elit Sed Do</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <button>Saiba Mais</button>
          </div>
          <div className={styles['subgrid-card']}>
            <h3>Sed Do Eiusmod</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <button>Saiba Mais</button>
          </div>
        </div>
      </section>

      <section className={styles.info}>
        <h2>Como funciona?</h2>
        <div className={styles['info-grid']}>
          <div className={styles['info-card']}>
            <h3>Sem Subgrid</h3>
            <code>display: grid;</code>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cada card tem seu próprio grid independente e não se alinha com os demais.</p>
          </div>
          <div className={styles['info-card']}>
            <h3>Com Subgrid</h3>
            <code>grid-template-rows: subgrid;</code>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cards herdam as linhas do grid pai e ficam perfeitamente alinhados entre si.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

