import './subgrid.scss'

export default function SubgridPage() {
  return (
    <div className="subgrid-demo w-full">
      <h1>CSS Subgrid</h1>
      <p>Alinhe itens de grid aninhados com o grid pai</p>

      <section className="example">
        <h2>Sem Subgrid (Desalinhado)</h2>
        <div className="grid-container">
          <div className="card">
            <h3>Card 1</h3>
            <p>Texto curto</p>
            <button>Ação</button>
          </div>
          <div className="card">
            <h3>Card 2 com título maior</h3>
            <p>Este card tem um texto muito mais longo que vai ocupar mais espaço</p>
            <button>Ação</button>
          </div>
          <div className="card">
            <h3>Card 3</h3>
            <p>Texto médio aqui</p>
            <button>Ação</button>
          </div>
        </div>
      </section>

      <section className="example">
        <h2>Com Subgrid (Alinhado)</h2>
        <div className="grid-container with-subgrid">
          <div className="card">
            <h3>Card 1</h3>
            <p>Texto curto</p>
            <button>Ação</button>
          </div>
          <div className="card">
            <h3>Card 2 com título maior</h3>
            <p>Este card tem um texto muito mais longo que vai ocupar mais espaço</p>
            <button>Ação</button>
          </div>
          <div className="card">
            <h3>Card 3</h3>
            <p>Texto médio aqui</p>
            <button>Ação</button>
          </div>
        </div>
      </section>

      <section className="info">
        <h2>Como funciona?</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Sem Subgrid</h3>
            <code>display: grid;</code>
            <p>Cada card tem seu próprio grid independente</p>
          </div>
          <div className="info-card">
            <h3>Com Subgrid</h3>
            <code>grid-template-rows: subgrid;</code>
            <p>Cards herdam as linhas do grid pai e ficam alinhados</p>
          </div>
        </div>
      </section>
    </div>
  )
}
