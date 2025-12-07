'use client'

import { Profiler, useState, useCallback, ProfilerOnRenderCallback } from 'react'
import { Activity, Clock, Zap, AlertTriangle, TrendingDown, BarChart3 } from 'lucide-react'
import HeavyComponent from './components/HeavyComponent'
import PerformanceMetrics from './components/PerformanceMetrics'
import styles from './performanceMeasurement.module.css'

export default function PerformanceMeasurementPage() {
  const [itemCount, setItemCount] = useState(1000)
  const [isRunning, setIsRunning] = useState(false)
  const [renderMetrics, setRenderMetrics] = useState({
    actualDuration: 0,
    baseDuration: 0,
    startTime: 0,
    commitTime: 0
  })

  const handleRender: ProfilerOnRenderCallback = useCallback((
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    // Só atualiza se for uma fase de mount ou update real
    if (phase === 'mount' || phase === 'update') {
      setRenderMetrics(prev => ({
        actualDuration,
        baseDuration,
        startTime,
        commitTime
      }))
    }
  }, [])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <BarChart3 className="inline-block" size={32} />
          {' '}Medição de Performance React
        </h1>
        <p className={styles.subtitle}>
          Demonstração de APIs de Performance: React Profiler, Long Tasks, Layout Shifts e Frame Rate
        </p>
      </header>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label>Quantidade de Itens: {itemCount.toLocaleString()}</label>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value))}
            disabled={isRunning}
          />
        </div>

        <button
          className={styles.startButton}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? (
            <>
              <AlertTriangle size={20} />
              <span>Parar Renderização</span>
            </>
          ) : (
            <>
              <Activity size={20} />
              <span>Iniciar Renderização</span>
            </>
          )}
        </button>
      </div>

      <PerformanceMetrics isRunning={isRunning} />

      <div className={styles.profilerSection}>
        <h2 className={styles.sectionTitle}>
          <Clock className="inline-block" size={24} />
          {' '}React Profiler Metrics
        </h2>
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Actual Duration</span>
            <span className={styles.metricValue}>
              {renderMetrics.actualDuration.toFixed(2)}ms
            </span>
            <span className={styles.metricDescription}>
              Tempo real de renderização
            </span>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Base Duration</span>
            <span className={styles.metricValue}>
              {renderMetrics.baseDuration.toFixed(2)}ms
            </span>
            <span className={styles.metricDescription}>
              Tempo sem otimizações (memo)
            </span>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Commit Time</span>
            <span className={styles.metricValue}>
              {renderMetrics.commitTime.toFixed(2)}ms
            </span>
            <span className={styles.metricDescription}>
              Quando mudanças foram commitadas
            </span>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Performance Score</span>
            <span className={`${styles.metricValue} ${
              renderMetrics.actualDuration < 16 ? styles.good :
              renderMetrics.actualDuration < 50 ? styles.warning :
              styles.bad
            }`}>
              {renderMetrics.actualDuration < 16 ? (
                <>
                  <Zap size={20} className="inline-block" /> Excelente
                </>
              ) : renderMetrics.actualDuration < 50 ? (
                <>
                  <Clock size={20} className="inline-block" /> Bom
                </>
              ) : (
                <>
                  <TrendingDown size={20} className="inline-block" /> Lento
                </>
              )}
            </span>
            <span className={styles.metricDescription}>
              &lt; 16ms = 60fps ideal
            </span>
          </div>
        </div>
      </div>

      <div className={styles.componentSection}>
        <h2 className={styles.sectionTitle}>Componente de Teste</h2>
        <Profiler id="HeavyComponent" onRender={handleRender}>
          <HeavyComponent itemCount={itemCount} isRunning={isRunning} />
        </Profiler>
      </div>

      <div className={styles.explanation}>
        <h3>📚 APIs de Performance Utilizadas</h3>
        <div className={styles.apiList}>
          <div className={styles.apiItem}>
            <strong>React Profiler API</strong>
            <p>Mede tempo real de renderização do React, diferenciando mount vs update e mostrando impacto de otimizações.</p>
          </div>

          <div className={styles.apiItem}>
            <strong>Long Tasks API</strong>
            <p>Detecta tarefas que bloqueiam a thread principal por mais de 50ms, indicando problemas de performance.</p>
          </div>

          <div className={styles.apiItem}>
            <strong>Layout Shift (CLS)</strong>
            <p>Rastreia mudanças inesperadas de layout que prejudicam a experiência do usuário.</p>
          </div>

          <div className={styles.apiItem}>
            <strong>requestAnimationFrame</strong>
            <p>Mede FPS real e detecta frame drops, mostrando quando a aplicação não atinge 60fps.</p>
          </div>

          <div className={styles.apiItem}>
            <strong>Performance Observer</strong>
            <p>API unificada para observar diferentes tipos de eventos de performance sem polling.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
