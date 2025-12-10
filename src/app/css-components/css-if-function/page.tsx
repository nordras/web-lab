import styles from './cssIfFunction.module.css'

export default function CssIfFunctionPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>CSS if() Function</h1>
        <p className={styles.experimental}>⚠️ Feature Experimental - Requer Chrome/Edge com flags habilitadas</p>
        <p className={styles.subtitle}>
          Lógica condicional em CSS usando Style Queries, Media Queries e Feature Queries
        </p>
      </header>

      <section className={styles.section}>
        <h2>Como Habilitar (Chrome/Edge)</h2>
        <div className={styles.instructions}>
          <ol>
            <li>Abra <code>chrome://flags</code> ou <code>edge://flags</code></li>
            <li>Procure por "Experimental Web Platform features"</li>
            <li>Ative a flag e reinicie o navegador</li>
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <h2>1. Style Queries - Testando Custom Properties</h2>
        <div className={styles.demo}>
          <div className={styles.themeBox} data-theme="light">
            <p>Theme: Light</p>
            <p className={styles.explanation}>if(style(--theme: dark): black; else: white;)</p>
          </div>
          <div className={styles.themeBox} data-theme="dark">
            <p>Theme: Dark</p>
            <p className={styles.explanation}>if(style(--theme: dark): black; else: white;)</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>2. Media Queries - Responsividade</h2>
        <div className={styles.demo}>
          <div className={styles.responsiveBox}>
            <p>Redimensione a janela</p>
            <p className={styles.explanation}>
              if(media(width {'<'} 700px): 0 auto; else: 20px auto;)
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>3. Feature Queries - Suporte do Browser</h2>
        <div className={styles.demo}>
          <div className={styles.featureBox}>
            <p>Testando suporte a lch() colors</p>
            <p className={styles.explanation}>
              if(supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;)
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>4. Múltiplas Condições</h2>
        <div className={styles.demo}>
          <div className={styles.multiBox} data-scheme="ice">
            <p>Scheme: Ice ❄️</p>
          </div>
          <div className={styles.multiBox} data-scheme="fire">
            <p>Scheme: Fire 🔥</p>
          </div>
          <div className={styles.multiBox}>
            <p>Scheme: Default</p>
          </div>
        </div>
        <pre className={styles.code}>{`if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
  else: none;
)`}</pre>
      </section>

      <section className={styles.section}>
        <h2>5. Lógica AND/OR/NOT</h2>
        <div className={styles.demo}>
          <div className={styles.logicBox} data-theme="dark" data-contrast="high">
            <p>Dark + High Contrast</p>
            <p className={styles.explanation}>
              if(style((--theme: dark) and (--contrast: high)): black;)
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>6. Nested if() Functions</h2>
        <div className={styles.demo}>
          <div className={styles.nestedBox} data-scheme="ice">
            <p>Ice theme with nested conditions</p>
          </div>
        </div>
        <pre className={styles.code}>{`color: if(
  style(--scheme: ice):
    if(
      media(prefers-color-scheme: dark): #caf0f8;
      else: #03045e;
    );
  else: black
);`}</pre>
      </section>

      <section className={styles.section}>
        <h2>7. Valores Parciais</h2>
        <div className={styles.demo}>
          <div className={styles.partialBox}>
            <p>Border com if() apenas na cor</p>
            <p className={styles.explanation}>
              border: 3px solid if(supports(color: lch(...)): lch(...); else: silver;)
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>8. Fallback para Browsers não suportados</h2>
        <div className={styles.demo}>
          <div className={styles.fallbackBox}>
            <p>Com fallback declarado antes</p>
          </div>
        </div>
        <pre className={styles.code}>{`/* Fallback para browsers sem suporte */
padding: 1em;

/* Browsers com suporte sobrescrevem */
padding: if(
  style(--size: large): 2em;
  else: 0.5em;
);`}</pre>
      </section>

      <section className={styles.comparisonSection}>
        <h2>Comparação: if() vs @media/@container/@supports</h2>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <h3>CSS if()</h3>
            <ul>
              <li>✅ Valores individuais</li>
              <li>✅ Inline no valor da propriedade</li>
              <li>✅ Múltiplas condições em uma linha</li>
              <li>❌ Não pode aplicar múltiplas declarações</li>
            </ul>
          </div>
          <div className={styles.comparisonCard}>
            <h3>@media/@container/@supports</h3>
            <ul>
              <li>✅ Múltiplas declarações</li>
              <li>✅ Aplica regras completas</li>
              <li>✅ Melhor para mudanças complexas</li>
              <li>❌ Mais verboso para valores simples</li>
            </ul>
          </div>
        </div>
        <p className={styles.note}>
          💡 As duas abordagens são <strong>complementares</strong>, não excludentes
        </p>
      </section>
    </div>
  )
}
