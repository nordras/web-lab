'use client'

import { useState } from 'react'
import styles from './has-selector.module.css'

export default function HasSelectorPage() {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={styles['demo-container']}>
      <form className={`demo-form ${hasError ? 'has-error' : ''}`}>
        <div className={styles['form-group']}>
          <label>Email</label>
          <input 
            type="email" 
            onChange={(e) => setHasError(!e.target.validity.valid && e.target.value.length > 0)}
          />
          {hasError && <span className={styles.error}>Invalid email</span>}
        </div>
        
        <div className={styles['form-group']}>
          <label>Password</label>
          <input type="password" />
        </div>
      </form>
    </div>
  )
}


