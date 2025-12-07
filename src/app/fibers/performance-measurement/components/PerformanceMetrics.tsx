'use client'

import { useEffect, useState } from 'react'
import { Activity, Clock, Layers, TrendingUp, AlertTriangle } from 'lucide-react'
import styles from './PerformanceMetrics.module.css'

interface PerformanceMetricsProps {
  isRunning: boolean
}

interface Metrics {
  fps: number
  longTasks: number
  layoutShifts: number
  frameDrops: number
  avgFrameTime: number
}

export default function PerformanceMetrics({ isRunning }: PerformanceMetricsProps) {
  const [metrics, setMetrics] = useState<Metrics>({
    fps: 60,
    longTasks: 0,
    layoutShifts: 0,
    frameDrops: 0,
    avgFrameTime: 16.67
  })

  useEffect(() => {
    let longTaskCount = 0
    let layoutShiftCount = 0
    let frameDropCount = 0
    let frameTimes: number[] = []
    let lastTime = performance.now()
    let animationId: number

    // Long Tasks Observer
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          longTaskCount += list.getEntries().length
          setMetrics(m => ({ ...m, longTasks: longTaskCount }))
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })
      } catch (e) {
        console.log('Long Tasks API não suportada')
      }

      // Layout Shift Observer
      try {
        const clsObserver = new PerformanceObserver((list) => {
          layoutShiftCount += list.getEntries().length
          setMetrics(m => ({ ...m, layoutShifts: layoutShiftCount }))
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (e) {
        console.log('Layout Shift API não suportada')
      }
    }

    // Frame Rate Measurement
    function measureFrame() {
      const now = performance.now()
      const delta = now - lastTime
      
      frameTimes.push(delta)
      
      // Frame drop: > 50ms (< 20fps)
      if (delta > 50) {
        frameDropCount++
        setMetrics(m => ({ ...m, frameDrops: frameDropCount }))
      }
      
      // Calcula FPS a cada 60 frames
      if (frameTimes.length >= 60) {
        const avgDelta = frameTimes.reduce((a, b) => a + b) / frameTimes.length
        const fps = Math.round(1000 / avgDelta)
        
        setMetrics(m => ({
          ...m,
          fps: fps,
          avgFrameTime: avgDelta
        }))
        
        frameTimes = []
      }
      
      lastTime = now
      animationId = requestAnimationFrame(measureFrame)
    }

    if (isRunning) {
      measureFrame()
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isRunning])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <Activity size={24} className="inline-block" />
        {' '}Métricas em Tempo Real
      </h2>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <TrendingUp size={28} className={
              metrics.fps >= 50 ? 'text-green-500' :
              metrics.fps >= 30 ? 'text-yellow-500' :
              'text-red-500'
            } />
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>FPS</span>
            <span className={`${styles.cardValue} ${
              metrics.fps >= 50 ? styles.good :
              metrics.fps >= 30 ? styles.warning :
              styles.bad
            }`}>
              {metrics.fps}
            </span>
            <span className={styles.cardDescription}>
              {metrics.avgFrameTime.toFixed(1)}ms por frame
            </span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <AlertTriangle size={28} className={
              metrics.longTasks === 0 ? 'text-green-500' :
              metrics.longTasks < 5 ? 'text-yellow-500' :
              'text-red-500'
            } />
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>Long Tasks</span>
            <span className={styles.cardValue}>{metrics.longTasks}</span>
            <span className={styles.cardDescription}>
              Tarefas &gt; 50ms
            </span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Layers size={28} className={
              metrics.layoutShifts === 0 ? 'text-green-500' :
              metrics.layoutShifts < 3 ? 'text-yellow-500' :
              'text-red-500'
            } />
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>Layout Shifts</span>
            <span className={styles.cardValue}>{metrics.layoutShifts}</span>
            <span className={styles.cardDescription}>
              Mudanças de layout
            </span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Clock size={28} className={
              metrics.frameDrops === 0 ? 'text-green-500' :
              metrics.frameDrops < 10 ? 'text-yellow-500' :
              'text-red-500'
            } />
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>Frame Drops</span>
            <span className={styles.cardValue}>{metrics.frameDrops}</span>
            <span className={styles.cardDescription}>
              Frames perdidos
            </span>
          </div>
        </div>
      </div>

      <div className={styles.status}>
        {metrics.fps >= 50 && metrics.longTasks === 0 && metrics.frameDrops < 5 && (
          <div className={styles.statusGood}>
            ✓ Performance excelente! Aplicação rodando suavemente.
          </div>
        )}
        {(metrics.fps < 50 || metrics.longTasks > 0) && (
          <div className={styles.statusWarning}>
            ⚠️ Performance degradada. Otimizações recomendadas.
          </div>
        )}
        {(metrics.fps < 30 || metrics.longTasks > 5 || metrics.frameDrops > 20) && (
          <div className={styles.statusBad}>
            ⛔ Performance crítica! Thread principal bloqueada.
          </div>
        )}
      </div>
    </div>
  )
}
