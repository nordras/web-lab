import styles from './border-image.module.css'

export default function BorderImagePage() {
  return (
    <section className={styles['border-image-demo']}>
      <div className={styles['demo-header']}>
        <h1>CSS Border Image as Gradient</h1>
      </div>

      <div className={styles['examples-grid']}>

        <section className={styles['example-card']}>
          <div className={`${styles['gradient-border-box']} ${styles.vertical}`}>
            <div className={styles.content}>
              <h3>Vertical Gradient</h3>
              <p>Top to Bottom</p>
            </div>
          </div>
          <div className={styles['code-display']}>
            <code>border-image: linear-gradient(to bottom, #f093fb, #f5576c) 1;</code>
          </div>
        </section>

        <section className={styles['example-card']}>
          <div className={`${styles['gradient-border-box']} ${styles.diagonal}`}>
            <div className={styles.content}>
              <h3>Diagonal Gradient</h3>
              <p>45deg angle</p>
            </div>
          </div>
          <div className={styles['code-display']}>
            <code>border-image: linear-gradient(45deg, #fa709a, #fee140) 1;</code>
          </div>
        </section>

        <section className={styles['example-card']}>
          <div className={`${styles['gradient-border-box']} ${styles.radial}`}>
            <div className={styles.content}>
              <h3>Radial Gradient</h3>
              <p>Center to edges</p>
            </div>
          </div>
          <div className={styles['code-display']}>
            <code>border-image: radial-gradient(circle, #667eea, #764ba2) 1;</code>
          </div>
        </section>

        <section className={styles['example-card']}>
          <div className={`${styles['gradient-border-box']} ${styles.rainbow}`}>
            <div className={styles.content}>
              <h3>Rainbow Gradient</h3>
              <p>Multiple colors</p>
            </div>
          </div>
          <div className={styles['code-display']}>
            <code>border-image: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082) 1;</code>
          </div>
        </section>

        {/* Exemplo 6 - Gradiente Animado */}
        <section className={styles['example-card']}>
          <div className={`${styles['gradient-border-box']} ${styles.animated}`}>
            <div className={styles.content}>
              <h3>Animated Border</h3>
              <p>Hover me!</p>
            </div>
          </div>
          <div className={styles['code-display']}>
            <code>With pseudo-element animation</code>
          </div>
        </section>

        {/* Exemplo 7 - Border Width Variável */}
        <section className={styles['example-card']}>
          <div className={`${styles['gradient-border-box']} ${styles.thick}`}>
            <div className={styles.content}>
              <h3>Thick Border</h3>
              <p>8px width</p>
            </div>
          </div>
          <div className={styles['code-display']}>
            <code>border: 8px solid; border-image: linear-gradient(135deg, #667eea, #764ba2) 1;</code>
          </div>
        </section>

        {/* Exemplo 8 - Gradiente com Transparência */}
        <section className={styles['example-card']}>
          <div className={`${styles['gradient-border-box']} ${styles.transparent}`}>
            <div className={styles.content}>
              <h3>Transparent Fade</h3>
              <p>Alpha channel</p>
            </div>
          </div>
          <div className={styles['code-display']}>
            <code>border-image: linear-gradient(to right, #00f260, transparent, #0575e6) 1;</code>
          </div>
        </section>
      </div>
    </section>
  )
}
