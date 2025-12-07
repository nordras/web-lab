'use client'

import { useEffect, useState } from 'react'
import { HardDrive, Zap, Target, Loader2, Pause } from 'lucide-react'
import styles from './PerformanceMetrics.module.css'
import { getJSMemoryUsage, PERFORMANCE_CONFIG } from '../utils'

interface PerformanceMetricsProps {
  isRendering: boolean
}

export default function PerformanceMetrics({ isRendering }: PerformanceMetricsProps) {
  const [memory, setMemory] = useState<number | null>(null)
  const [responsiveness, setResponsiveness] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      // Memória (se disponível)
      const memoryUsage = getJSMemoryUsage()
      if (memoryUsage !== null) {
        setMemory(memoryUsage)
      }

      // Simula medição de responsividade
      if (isRendering) {
        setResponsiveness(Math.random() * 30 + 70) // 70-100%
      } else {
        setResponsiveness(100)
      }
    }, PERFORMANCE_CONFIG.MEMORY_CHECK_INTERVAL)

    return () => clearInterval(interval)
  }, [isRendering])

  return (
    <div className={styles.metricsPanel}>
      <h3 className={styles.title}>Métricas em Tempo Real</h3>
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricIcon}>
            {isRendering ? (
              <Loader2 size={24} className="animate-spin text-blue-500" />
            ) : (
              <Pause size={24} className="text-gray-400" />
            )}
          </div>
          <div className={styles.metricContent}>
            <span className={styles.metricLabel}>Status</span>
            <span className={styles.metricValue}>
              {isRendering ? 'Renderizando' : 'Pausado'}
            </span>
          </div>
        </div>

        {memory !== null && (
          <div className={styles.metricCard}>
            <div className={styles.metricIcon}>
              <HardDrive size={24} className="text-purple-500" />
            </div>
            <div className={styles.metricContent}>
              <span className={styles.metricLabel}>Memória JS</span>
              <span className={styles.metricValue}>{memory.toFixed(1)} MB</span>
            </div>
          </div>
        )}

        <div className={styles.metricCard}>
          <div className={styles.metricIcon}>
            <Zap size={24} className="text-yellow-500" />
          </div>
          <div className={styles.metricContent}>
            <span className={styles.metricLabel}>Responsividade</span>
            <span className={styles.metricValue}>{responsiveness.toFixed(0)}%</span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricIcon}>
            <Target size={24} className="text-green-500" />
          </div>
          <div className={styles.metricContent}>
            <span className={styles.metricLabel}>Target</span>
            <span className={styles.metricValue}>60 FPS</span>
          </div>
        </div>
      </div>
    </div>
  )
}
