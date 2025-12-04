// Utility para converter className strings para CSS Modules
// Uso: className={cx('class1', 'class2', condition && 'class3')}

export function cx(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Helper para classes do CSS Module
export function getStyles(styles: Record<string, string>) {
  return (className: string) => {
    const classes = className.split(' ')
    return classes.map(c => styles[c] || c).join(' ')
  }
}
