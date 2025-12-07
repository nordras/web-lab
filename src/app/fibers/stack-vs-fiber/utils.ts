/**
 * heavyComputation() - Cálculo complexo
 * scheduleWork() - Agenda trabalho com requestIdleCallback
 * cancelScheduledWork() - Cancela trabalho agendado
 * getJSMemoryUsage() - Obtém uso de memória
 * PERFORMANCE_CONFIG - Constantes centralizadas
 */

export function heavyComputation(index: number): number {
  let result = 0
  for (let i = 0; i < 100000; i++) {
    result += Math.sqrt(index * i)
  }
  return result
}

export function useFPSMonitor() {
  const frameCountRef = { current: 0 }
  const lastTimeRef = { current: Date.now() }
  
  return {
    frameCountRef,
    lastTimeRef,
    measureFPS: (setFps: (fps: number) => void) => {
      let animationId: number

      const measure = () => {
        frameCountRef.current++
        const now = Date.now()
        const elapsed = now - lastTimeRef.current

        if (elapsed >= 1000) {
          setFps(Math.round((frameCountRef.current * 1000) / elapsed))
          frameCountRef.current = 0
          lastTimeRef.current = now
        }

        animationId = requestAnimationFrame(measure)
      }

      measure()
      return () => cancelAnimationFrame(animationId)
    }
  }
}

export function getJSMemoryUsage(): number | null {
  if ('memory' in performance && (performance as any).memory) {
    const mem = (performance as any).memory
    return mem.usedJSHeapSize / 1048576 // in order to convert to MB
  }
  return null
}

/**
 * Agenda trabalho usando requestIdleCallback ou fallback para setTimeout
 */
export function scheduleWork(callback: () => void, timeout = 16): number {
  if ('requestIdleCallback' in window) {
    return requestIdleCallback(callback, { timeout })
  }
  return setTimeout(callback, 0) as unknown as number
}

export function cancelScheduledWork(workId: number): void {
  if ('requestIdleCallback' in window) {
    cancelIdleCallback(workId)
  } else {
    clearTimeout(workId)
  }
}

/**
 * Constants for performance measurement and chunk sizes
 */
export const PERFORMANCE_CONFIG = {
  CHUNK_SIZE: 50,
  FPS_MEASUREMENT_INTERVAL: 1000, // ms
  MEMORY_CHECK_INTERVAL: 500,     // ms
  IDLE_CALLBACK_TIMEOUT: 16,      // ms (~60fps)
} as const
