import styles from './scssMixins.module.scss'

export default function ScssMinxinsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>SCSS Mixins & Functions</h1>
        <p>Demonstração de recursos avançados do SCSS: mixins, functions, loops e maps</p>
      </header>

      <section className={styles.section}>
        <h2>1. Responsive Mixins</h2>
        <div className={styles.responsiveBox}>
          <p>Redimensione a janela para ver as mudanças</p>
          <span className={styles.deviceIndicator}>Device Size</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2>2. Elevation System (Box Shadows)</h2>
        <div className={styles.elevationGrid}>
          {[1, 2, 3, 4, 5, 6].map((level) => (
            <div key={level} className={`${styles.elevationCard} ${styles[`elevation${level}`]}`}>
              <span>Level {level}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>3. Color Palette Generator</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard} data-color="primary">
            <div className={styles.colorSwatch}></div>
            <span>Primary</span>
          </div>
          <div className={styles.colorCard} data-color="secondary">
            <div className={styles.colorSwatch}></div>
            <span>Secondary</span>
          </div>
          <div className={styles.colorCard} data-color="accent">
            <div className={styles.colorSwatch}></div>
            <span>Accent</span>
          </div>
          <div className={styles.colorCard} data-color="warning">
            <div className={styles.colorSwatch}></div>
            <span>Warning</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>4. Typography Scale</h2>
        <div className={styles.typographyScale}>
          <p className={styles.textXs}>Extra Small (xs)</p>
          <p className={styles.textSm}>Small (sm)</p>
          <p className={styles.textBase}>Base (base)</p>
          <p className={styles.textLg}>Large (lg)</p>
          <p className={styles.textXl}>Extra Large (xl)</p>
          <p className={styles.text2xl}>2X Large (2xl)</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>5. Spacing System</h2>
        <div className={styles.spacingDemo}>
          <div className={styles.spacingBox} data-spacing="1">1</div>
          <div className={styles.spacingBox} data-spacing="2">2</div>
          <div className={styles.spacingBox} data-spacing="3">3</div>
          <div className={styles.spacingBox} data-spacing="4">4</div>
          <div className={styles.spacingBox} data-spacing="5">5</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>6. Button Variants (Mixin)</h2>
        <div className={styles.buttonGrid}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>Primary</button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>Secondary</button>
          <button className={`${styles.btn} ${styles.btnSuccess}`}>Success</button>
          <button className={`${styles.btn} ${styles.btnDanger}`}>Danger</button>
          <button className={`${styles.btn} ${styles.btnOutline}`}>Outline</button>
          <button className={`${styles.btn} ${styles.btnGhost}`}>Ghost</button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>7. Flexbox Utilities</h2>
        <div className={styles.flexDemo}>
          <div className={styles.flexCenter}>
            <span>Flex Center</span>
          </div>
          <div className={styles.flexBetween}>
            <span>Flex</span>
            <span>Between</span>
          </div>
          <div className={styles.flexColumn}>
            <span>Flex</span>
            <span>Column</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>8. Aspect Ratio Boxes</h2>
        <div className={styles.aspectGrid}>
          <div className={styles.aspectSquare}>1:1</div>
          <div className={styles.aspectVideo}>16:9</div>
          <div className={styles.aspectWide}>21:9</div>
        </div>
      </section>
    </div>
  )
}
