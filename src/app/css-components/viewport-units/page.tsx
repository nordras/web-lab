import styles from './viewport-units.module.css'

export default function ViewportUnitsPage() {
  return (
    <div className={styles.demoContainer}>
      <h2 className={styles.title}>Unidades CSS: Guia Completo</h2>
      
      {/* Novas Unidades de Viewport */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Novas Unidades de Viewport (Dynamic)</h3>
        <div className={styles.grid4}>
          <div className={`${styles.box} ${styles.vh}`}>
            <span className={styles.unit}>100vh</span>
            <small className={styles.label}>Viewport Height</small>
            <p className={styles.description}>Tradicional - 1% da altura</p>
          </div>
          
          <div className={`${styles.box} ${styles.dvh}`}>
            <span className={styles.unit}>100dvh</span>
            <small className={styles.label}>Dynamic Viewport</small>
            <p className={styles.description}>Ajusta com barras UI</p>
          </div>
          
          <div className={`${styles.box} ${styles.svh}`}>
            <span className={styles.unit}>100svh</span>
            <small className={styles.label}>Small Viewport</small>
            <p className={styles.description}>Barras visíveis</p>
          </div>
          
          <div className={`${styles.box} ${styles.lvh}`}>
            <span className={styles.unit}>100lvh</span>
            <small className={styles.label}>Large Viewport</small>
            <p className={styles.description}>Barras ocultas</p>
          </div>
        </div>
      </section>

      {/* Unidades de Viewport Tradicionais */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Unidades de Viewport Tradicionais</h3>
        <div className={styles.grid3}>
          <div className={`${styles.box} ${styles.vw}`}>
            <span className={styles.unit}>100vw</span>
            <small className={styles.label}>Viewport Width</small>
            <p className={styles.description}>1% da largura da viewport</p>
          </div>
          
          <div className={`${styles.box} ${styles.vmin}`}>
            <span className={styles.unit}>100vmin</span>
            <small className={styles.label}>Viewport Min</small>
            <p className={styles.description}>1% da menor dimensão</p>
          </div>
          
          <div className={`${styles.box} ${styles.vmax}`}>
            <span className={styles.unit}>100vmax</span>
            <small className={styles.label}>Viewport Max</small>
            <p className={styles.description}>1% da maior dimensão</p>
          </div>
        </div>
      </section>

      {/* Unidades Relativas */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Unidades Relativas</h3>
        <div className={styles.grid3}>
          <div className={`${styles.box} ${styles.rem}`}>
            <span className={styles.unit}>1rem</span>
            <small className={styles.label}>Root EM</small>
            <p className={styles.description}>Relativo ao font-size raiz (html)</p>
          </div>
          
          <div className={`${styles.box} ${styles.em}`}>
            <span className={styles.unit}>1em</span>
            <small className={styles.label}>EM</small>
            <p className={styles.description}>Relativo ao font-size do pai</p>
          </div>
          
          <div className={`${styles.box} ${styles.percent}`}>
            <span className={styles.unit}>100%</span>
            <small className={styles.label}>Porcentagem</small>
            <p className={styles.description}>Relativo ao elemento pai</p>
          </div>
        </div>
      </section>

      {/* Unidade Absoluta */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Unidade Absoluta</h3>
        <div className={styles.grid1}>
          <div className={`${styles.box} ${styles.px}`}>
            <span className={styles.unit}>1px</span>
            <small className={styles.label}>Pixel</small>
            <p className={styles.description}>Tamanho fixo - não escala com zoom ou preferências</p>
          </div>
        </div>
      </section>

      <div className={styles.legend}>
        <h3>Quando Usar Cada Unidade</h3>
        <div className={styles.legendGrid}>
          <div className={styles.legendItem}>
            <div className={`${styles.legendIndicator} ${styles.indicatorVh}`}></div>
            <div>
              <strong>vh/vw - Viewport Tradicional</strong>
              <p>Use para layouts que devem ocupar percentual fixo da tela. Não adapta a barras UI móveis.</p>
            </div>
          </div>
          
          <div className={styles.legendItem}>
            <div className={`${styles.legendIndicator} ${styles.indicatorDvh}`}></div>
            <div>
              <strong>dvh/svh/lvh - Dynamic Viewport</strong>
              <p>Ideais para mobile com barras dinâmicas. dvh adapta ao scroll, svh garante visibilidade total, lvh maximiza espaço.</p>
            </div>
          </div>
          
          <div className={styles.legendItem}>
            <div className={`${styles.legendIndicator} ${styles.indicatorRem}`}></div>
            <div>
              <strong>rem - Root EM (Recomendado)</strong>
              <p>Melhor para tipografia e espaçamentos. Respeita preferências de acessibilidade do usuário. 1rem = 16px por padrão.</p>
            </div>
          </div>
          
          <div className={styles.legendItem}>
            <div className={`${styles.legendIndicator} ${styles.indicatorEm}`}></div>
            <div>
              <strong>em - Element EM</strong>
              <p>Para componentes que devem escalar com o font-size do pai. Útil em sistemas de design escaláveis.</p>
            </div>
          </div>
          
          <div className={styles.legendItem}>
            <div className={`${styles.legendIndicator} ${styles.indicatorPercent}`}></div>
            <div>
              <strong>% - Porcentagem</strong>
              <p>Para layouts fluidos e responsivos. Depende da propriedade: width/height usa dimensões do pai, font-size herda do pai.</p>
            </div>
          </div>
          
          <div className={styles.legendItem}>
            <div className={`${styles.legendIndicator} ${styles.indicatorPx}`}></div>
            <div>
              <strong>px - Pixels (Use com Cautela)</strong>
              <p>Para precisão de 1 pixel (borders, shadows). Evite em tipografia e layouts - não respeita preferências do usuário.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


