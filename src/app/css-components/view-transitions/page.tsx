'use client'

import { useState } from 'react'
import styles from './view-transitions.module.css'

export default function ViewTransitionsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <div className={styles['demo-container']}>
      <div className={styles.controls}>
        <button onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''}>
          Grid
        </button>
        <button onClick={() => setView('list')} className={view === 'list' ? 'active' : ''}>
          List
        </button>
      </div>
      
      <div className={`items ${view}`}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={styles.item}>
            <div className={styles['item-content']}>Item {i}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


