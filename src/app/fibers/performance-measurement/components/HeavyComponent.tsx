'use client'

import { memo } from 'react'
import styles from './HeavyComponent.module.css'

interface HeavyComponentProps {
  itemCount: number
  isRunning: boolean
}

function heavyComputation(index: number): number {
  let result = 0
  for (let i = 0; i < 50000; i++) {
    result += Math.sqrt(index * i) * Math.cos(i)
  }
  return result
}

function HeavyComponent({ itemCount, isRunning }: HeavyComponentProps) {
  if (!isRunning) {
    return (
      <div className={styles.empty}>
        <p>Clique em "Iniciar Renderização" para começar</p>
      </div>
    )
  }

  const items = Array.from({ length: itemCount }, (_, i) => ({
    id: i,
    value: heavyComputation(i)
  }))

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <span className={styles.itemId}>{item.id}</span>
            <span className={styles.itemValue}>{item.value.toFixed(0)}</span>
          </div>
        ))}
      </div>
      <div className={styles.summary}>
        Total de itens renderizados: {itemCount.toLocaleString()}
      </div>
    </div>
  )
}

// Versão memoizada para comparação
export default memo(HeavyComponent)
