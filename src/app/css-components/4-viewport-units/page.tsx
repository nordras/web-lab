import styles from './viewport-units.module.css'

export default function ViewportUnitsPage() {
  return (
    <div className={styles['demo-container']}>
      <h2 className={styles.title}>Unidades de Viewport</h2>
      
      <div className={styles['viewport-demo']}>
        <div className={`${styles.box} ${styles.vh}`}>
          <span className={styles.unit}>100vh</span>
          <small className={styles.label}>Viewport Height</small>
          <p className={styles.description}>Tradicional - Tamanho fixo 1% da altura</p>
        </div>
        
        <div className={`${styles.box} ${styles.dvh}`}>
          <span className={styles.unit}>100dvh</span>
          <small className={styles.label}>Dynamic Viewport</small>
          <p className={styles.description}>Ajusta quando barras aparecem/somem</p>
        </div>
        
        <div className={`${styles.box} ${styles.svh}`}>
          <span className={styles.unit}>100svh</span>
          <small className={styles.label}>Small Viewport</small>
          <p className={styles.description}>Menor altura (todas barras visíveis)</p>
        </div>
        
        <div className={`${styles.box} ${styles.lvh}`}>
          <span className={styles.unit}>100lvh</span>
          <small className={styles.label}>Large Viewport</small>
          <p className={styles.description}>Maior altura (barras ocultas)</p>
        </div>
      </div>

      <div className={styles.legend}>
        <h3>Como Funcionam</h3>
        <div className={styles['legend-grid']}>
          <div className={styles['legend-item']}>
            <div className={`${styles['legend-indicator']} ${styles['indicator-vh']}`}></div>
            <div>
              <strong>vh (Viewport Height)</strong>
              <p>Unidade tradicional: 1vh = 1% da altura da viewport. Não considera mudanças nas barras de UI do navegador em dispositivos móveis.</p>
            </div>
          </div>
          
          <div className={styles['legend-item']}>
            <div className={`${styles['legend-indicator']} ${styles['indicator-dvh']}`}></div>
            <div>
              <strong>dvh (Dynamic Viewport Height)</strong>
              <p>Ajusta dinamicamente conforme o usuário interage com a página. Ideal para layouts full-screen responsivos que se adaptam ao scroll.</p>
            </div>
          </div>
          
          <div className={styles['legend-item']}>
            <div className={`${styles['legend-indicator']} ${styles['indicator-svh']}`}></div>
            <div>
              <strong>svh (Small Viewport Height)</strong>
              <p>Usa a menor altura possível da viewport (com todas as barras de UI visíveis). Garante que nenhum conteúdo seja cortado.</p>
            </div>
          </div>
          
          <div className={styles['legend-item']}>
            <div className={`${styles['legend-indicator']} ${styles['indicator-lvh']}`}></div>
            <div>
              <strong>lvh (Large Viewport Height)</strong>
              <p>Usa a maior altura possível da viewport (com barras de UI ocultas). Perfeito para hero sections e splash screens imersivos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


