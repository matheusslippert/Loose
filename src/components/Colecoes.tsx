import './Colecoes.scss';

export function Colecoes() {
  const colecoes = [
   { id: 1, imgPath: '/assets/produtos/camisa3.png' },
    { id: 2, imgPath: '/assets/produtos/oculos1.1.png' },
    { id: 3, imgPath: '/assets/produtos/camisa1.1.png' },
    { id: 4, imgPath: '/assets/produtos/bolsa2.2.png' },
  ];

  return (
    <section className="colecoes">
      {/* Novas imagens decorativas que faltavam! */}
      <img src="/assets/institucional/rabisco-roxo.png" alt="" className="decor-purple-loop" />
      <img src="/assets/institucional/smiley.png" alt="" className="smiley-icon" />

      <div className="container">
        <h2 className="title">coleções.</h2>
        
        <div className="grid">
          {colecoes.map((item) => (
            <a href="#" key={item.id} className="card">
              <img src={item.imgPath}  className="card-image" />
              <div className="overlay">
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}