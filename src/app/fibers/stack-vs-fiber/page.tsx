'use client'

import { useState } from 'react'
import DemoStack from './components/DemoStack'
import DemoFiber from './components/DemoFiber'
import PerformanceMetrics from './components/PerformanceMetrics'
import styles from './stackVsFiber.module.css'

export default function StackVsFiberPage() {
  const [activeDemo, setActiveDemo] = useState<'stack' | 'fiber' | 'both'>('both')
  const [itemCount, setItemCount] = useState(5000)
  const [isRendering, setIsRendering] = useState(false)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Stack vs Fiber: Comparação Visual</h1>
        <p className={styles.subtitle}>
          Demonstração da diferença entre renderização síncrona bloqueante (Stack) 
          e renderização incremental (Fiber)
        </p>
      </header>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label>Visualização:</label>
          <div className={styles.buttonGroup}>
            <button
              className={activeDemo === 'stack' ? styles.active : ''}
              onClick={() => setActiveDemo('stack')}
            >
              Stack Only
            </button>
            <button
              className={activeDemo === 'fiber' ? styles.active : ''}
              onClick={() => setActiveDemo('fiber')}
            >
              Fiber Only
            </button>
            <button
              className={activeDemo === 'both' ? styles.active : ''}
              onClick={() => setActiveDemo('both')}
            >
              Lado a Lado
            </button>
          </div>
        </div>

        <div className={styles.controlGroup}>
          <label>Itens a Renderizar: {itemCount.toLocaleString()}</label>
          <input
            type="range"
            min="1000"
            max="10000"
            step="500"
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value))}
            disabled={isRendering}
          />
        </div>

        <button
          className={styles.renderButton}
          onClick={() => setIsRendering(!isRendering)}
        >
          {isRendering ? '⏸️ Pausar' : '▶️ Iniciar Renderização'}
        </button>
      </div>

      <PerformanceMetrics isRendering={isRendering} />

      <div className={styles.demos}>
        {(activeDemo === 'stack' || activeDemo === 'both') && (
          <div className={styles.demoSection}>
            <h2 className={styles.demoTitle}>
              <span className={styles.badge} style={{ background: 'var(--color-error)' }}>
                Stack
              </span>
              Renderização Síncrona (Problemática)
            </h2>
            <DemoStack itemCount={itemCount} isRendering={isRendering} />
          </div>
        )}

        {(activeDemo === 'fiber' || activeDemo === 'both') && (
          <div className={styles.demoSection}>
            <h2 className={styles.demoTitle}>
              <span className={styles.badge} style={{ background: 'var(--color-success)' }}>
                Fiber
              </span>
              Renderização Incremental (Otimizada)
            </h2>
            <DemoFiber itemCount={itemCount} isRendering={isRendering} />
          </div>
        )}
      </div>

      <div className={styles.explanation}>
        <h3>Como Funcionam</h3>
        <div className={styles.explanationGrid}>
          <div className={styles.explanationCard}>
            <h4>🔴 Stack (Antigo)</h4>
            <ul>
              <li>Renderização síncrona e bloqueante</li>
              <li>Processa tudo de uma vez</li>
              <li>Bloqueia a thread principal</li>
              <li>UI fica travada durante processamento</li>
              <li>Frames são perdidos (FPS cai)</li>
              <li>Má experiência do usuário</li>
            </ul>
          </div>

          <div className={styles.explanationCard}>
            <h4>🟢 Fiber (Atual)</h4>
            <ul>
              <li>Renderização incremental e interruptível</li>
              <li>Divide trabalho em pequenas unidades</li>
              <li>Usa requestIdleCallback</li>
              <li>UI permanece responsiva</li>
              <li>Mantém 60 FPS</li>
              <li>Prioriza interações do usuário</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
