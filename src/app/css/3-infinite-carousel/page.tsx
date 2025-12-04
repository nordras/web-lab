import styles from './infinite-carousel.module.css'

export default function InfiniteCarouselPage() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles['carousel-container']}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
        Infinite Carousel - Pure CSS
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
        Hover to pause • Smooth infinite loop animation
      </p>
      
      <div className={styles.carousel}>
        <div className={styles['carousel-track']}>
          <div className={styles['carousel-group']}>
            {cards.map((num) => (
              <div key={`first-${num}`} className={styles['carousel-card']}>
                {num}
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className={styles['carousel-group']} aria-hidden="true">
            {cards.map((num) => (
              <div key={`second-${num}`} className={styles['carousel-card']}>
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '2rem', background: 'white', borderRadius: '12px', maxWidth: '800px', margin: '3rem auto' }}>
        <h2 style={{ marginBottom: '1rem' }}>🎯 Como funciona</h2>
        <ul style={{ lineHeight: '1.8', color: '#555' }}>
          <li><strong>Duplicação:</strong> Os cards são duplicados para criar um loop contínuo</li>
          <li><strong>Animação:</strong> A track se move continuamente da direita para a esquerda</li>
          <li><strong>Reset invisível:</strong> Quando o primeiro grupo sai, o segundo está na posição exata</li>
          <li><strong>Hover:</strong> Pausa a animação para melhor visualização</li>
          <li><strong>Gradiente:</strong> Fade nas bordas para efeito mais suave</li>
        </ul>
      </div>
    </div>
  )
}

