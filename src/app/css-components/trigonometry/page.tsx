'use client'

import { useState } from 'react'
import styles from './trigonometry.module.css'

export default function TrigonometryPage() {
  const [count] = useState(8)

  return (
    <div className={styles['demo-container']}>
      <div className={styles['circle-container']}>
        {Array.from({ length: count }).map((_, i) => (
          <div 
            key={i} 
            className={styles['circle-item']}
            style={{ 
              '--index': i,
              '--total': count 
            } as React.CSSProperties}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}


