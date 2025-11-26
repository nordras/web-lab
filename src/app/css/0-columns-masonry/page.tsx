import './columns-masonry.scss'

export default function ColumnsMasonryPage() {  
  const images = [
    { id: 1, width: 400, height: 300, keyword: 'nature' },
    { id: 2, width: 400, height: 500, keyword: 'architecture' },
    { id: 3, width: 400, height: 400, keyword: 'technology' },
    { id: 4, width: 400, height: 350, keyword: 'food' },
    { id: 5, width: 400, height: 450, keyword: 'travel' },
    { id: 6, width: 400, height: 380, keyword: 'animals' },
    { id: 7, width: 400, height: 420, keyword: 'city' },
    { id: 8, width: 400, height: 360, keyword: 'art' },
    { id: 9, width: 400, height: 480, keyword: 'mountains' },
    { id: 10, width: 400, height: 340, keyword: 'ocean' },
    { id: 11, width: 400, height: 390, keyword: 'forest' },
    { id: 12, width: 400, height: 460, keyword: 'sunset' },
  ]

  return (
    <div className="masonry-demo">
      <div className="masonry-container">
        {images.map((img) => (
          <div key={img.id} className="masonry-item">
            <img
              src={`https://picsum.photos/seed/${img.keyword}-${img.id}/${img.width}/${img.height}`}
              alt={`${img.keyword} ${img.id}`}
              loading="lazy"
            />
            <div className="item-overlay">
              <h3>{img.keyword}</h3>
              <p>{img.width} × {img.height}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
