import styles from './fluidTypography.module.css'

export default function FluidTypographyPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Fluid Typography & Spacing</h1>
        <p className={styles.subtitle}>
          Usando min(), max() e clamp() para criar layouts fluidos sem media queries
        </p>
      </header>

      <section className={styles.section}>
        <h2>Por que usar min(), max() e clamp()?</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitIcon}>🚀</span>
            <h3>Menos Código</h3>
            <p>Substitui múltiplas media queries por uma única linha</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitIcon}>📱</span>
            <h3>Totalmente Fluido</h3>
            <p>Escala suavemente entre valores mínimos e máximos</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitIcon}>🎯</span>
            <h3>Mais Preciso</h3>
            <p>Controle exato sobre limites e comportamento</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitIcon}>✨</span>
            <h3>Sem Quebras</h3>
            <p>Transições suaves sem pontos de quebra abruptos</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>1. clamp() - Tipografia Fluida</h2>
        <p className={styles.description}>
          O texto abaixo escala automaticamente entre 1rem e 3rem baseado no viewport
        </p>
        <div className={styles.fluidTextDemo}>
          <h3 className={styles.fluidHeading}>
            Heading Fluido com clamp()
          </h3>
          <p className={styles.fluidParagraph}>
            Este parágrafo também usa clamp() para escalar entre 0.875rem e 1.25rem
          </p>
        </div>
        <pre className={styles.code}>{`/* Substitui múltiplas media queries */
font-size: clamp(1rem, 2.5vw, 3rem);

/* Equivalente a: */
font-size: 1rem;
@media (min-width: 768px) { font-size: 1.5rem; }
@media (min-width: 1024px) { font-size: 2rem; }
@media (min-width: 1440px) { font-size: 3rem; }`}</pre>
      </section>

      <section className={styles.section}>
        <h2>2. clamp() - Larguras Responsivas</h2>
        <p className={styles.description}>
          Containers que se adaptam automaticamente sem breakpoints
        </p>
        <div className={styles.fluidWidthDemo}>
          <div className={styles.fluidBox}>
            <p>width: clamp(300px, 50vw, 800px)</p>
          </div>
        </div>
        <pre className={styles.code}>{`/* Container fluido entre 300px e 800px */
width: clamp(300px, 50vw, 800px);`}</pre>
      </section>

      <section className={styles.section}>
        <h2>3. clamp() - Espaçamento Fluido</h2>
        <p className={styles.description}>
          Padding e margin que escalam proporcionalmente
        </p>
        <div className={styles.fluidSpacingDemo}>
          <div className={styles.fluidSpacingBox}>
            <p>Padding fluido com clamp()</p>
            <span>padding: clamp(1rem, 3vw, 4rem)</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>4. min() - Escolhe o Menor Valor</h2>
        <p className={styles.description}>
          Útil para definir larguras máximas responsivas
        </p>
        <div className={styles.minDemo}>
          <div className={styles.minBox}>
            <p>width: min(600px, 100%)</p>
            <span>Nunca excede 600px, mas se adapta em telas menores</span>
          </div>
        </div>
        <pre className={styles.code}>{`/* Largura máxima de 600px, mas 100% em telas menores */
width: min(600px, 100%);

/* Substitui: */
width: 100%;
max-width: 600px;`}</pre>
      </section>

      <section className={styles.section}>
        <h2>5. max() - Escolhe o Maior Valor</h2>
        <p className={styles.description}>
          Garante tamanhos mínimos que escalam com viewport
        </p>
        <div className={styles.maxDemo}>
          <div className={styles.maxBox}>
            <p>min-height: max(200px, 30vh)</p>
            <span>Nunca menor que 200px, mas cresce em telas maiores</span>
          </div>
        </div>
        <pre className={styles.code}>{`/* Altura mínima de 200px ou 30vh (o que for maior) */
min-height: max(200px, 30vh);`}</pre>
      </section>

      <section className={styles.section}>
        <h2>6. Grid Fluido com clamp()</h2>
        <p className={styles.description}>
          Gap que se adapta ao tamanho da tela
        </p>
        <div className={styles.fluidGrid}>
          <div className={styles.gridItem}>Item 1</div>
          <div className={styles.gridItem}>Item 2</div>
          <div className={styles.gridItem}>Item 3</div>
          <div className={styles.gridItem}>Item 4</div>
        </div>
        <pre className={styles.code}>{`/* Gap fluido entre 1rem e 3rem */
gap: clamp(1rem, 2vw, 3rem);`}</pre>
      </section>

      <section className={styles.section}>
        <h2>7. Border Radius Fluido</h2>
        <div className={styles.radiusDemo}>
          <div className={styles.radiusBox}>
            <p>Border radius que escala</p>
            <span>border-radius: clamp(8px, 2vw, 32px)</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>8. Combinação de Funções</h2>
        <p className={styles.description}>
          min(), max() e clamp() podem ser combinados para controle total
        </p>
        <div className={styles.combinedDemo}>
          <div className={styles.combinedBox}>
            <h3>Card Complexo</h3>
            <p>
              Este card usa clamp() para width, padding e font-size simultaneamente,
              criando uma experiência totalmente fluida.
            </p>
          </div>
        </div>
        <pre className={styles.code}>{`/* Múltiplas propriedades fluidas */
width: clamp(300px, 60vw, 800px);
padding: clamp(1.5rem, 4vw, 3rem);
font-size: clamp(0.875rem, 1.2vw, 1.125rem);
border-radius: clamp(12px, 2vw, 24px);`}</pre>
      </section>

      <section className={styles.comparisonSection}>
        <h2>Comparação: clamp() vs Media Queries</h2>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <h3>❌ Com Media Queries (Antigo)</h3>
            <pre>{`.heading {
  font-size: 1rem;
}

@media (min-width: 480px) {
  .heading { font-size: 1.5rem; }
}

@media (min-width: 768px) {
  .heading { font-size: 2rem; }
}

@media (min-width: 1024px) {
  .heading { font-size: 2.5rem; }
}

@media (min-width: 1440px) {
  .heading { font-size: 3rem; }
}

/* 15 linhas, 5 breakpoints */`}</pre>
          </div>
          <div className={styles.comparisonCard}>
            <h3>✅ Com clamp() (Moderno)</h3>
            <pre>{`.heading {
  font-size: clamp(1rem, 2.5vw, 3rem);
}




/* 1 linha, transição suave */`}</pre>
          </div>
        </div>
      </section>

      <section className={styles.formulaSection}>
        <h2>🧮 Fórmula para Calcular clamp()</h2>
        <div className={styles.formula}>
          <h3>clamp(MIN, PREFERRED, MAX)</h3>
          <div className={styles.formulaSteps}>
            <div className={styles.step}>
              <strong>MIN:</strong> Tamanho mínimo (valor fixo)
            </div>
            <div className={styles.step}>
              <strong>PREFERRED:</strong> Valor fluido (geralmente em vw, vh, ou %)
            </div>
            <div className={styles.step}>
              <strong>MAX:</strong> Tamanho máximo (valor fixo)
            </div>
          </div>
          <div className={styles.formulaExample}>
            <p><strong>Exemplo:</strong></p>
            <code>font-size: clamp(16px, 4vw, 48px);</code>
            <ul>
              <li>Viewport 320px → 16px (mínimo)</li>
              <li>Viewport 600px → 24px (4% de 600)</li>
              <li>Viewport 1200px → 48px (máximo)</li>
              <li>Viewport 2000px → 48px (limitado ao máximo)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.tipsSection}>
        <h2>💡 Dicas de Uso</h2>
        <div className={styles.tipsGrid}>
          <div className={styles.tip}>
            <h3>1. Acessibilidade</h3>
            <p>Use <code>rem</code> ou <code>em</code> como base, não <code>px</code>, para respeitar preferências de zoom</p>
          </div>
          <div className={styles.tip}>
            <h3>2. Performance</h3>
            <p>clamp() é calculado uma vez, media queries são reavaliadas constantemente</p>
          </div>
          <div className={styles.tip}>
            <h3>3. Manutenção</h3>
            <p>Centralize valores fluidos em CSS variables para fácil ajuste</p>
          </div>
          <div className={styles.tip}>
            <h3>4. Teste</h3>
            <p>Sempre teste em diferentes viewports para garantir legibilidade</p>
          </div>
        </div>
      </section>
    </div>
  )
}
