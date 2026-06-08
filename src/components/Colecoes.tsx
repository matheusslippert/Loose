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
      <img src="/assets/icons/rabisco-lateral.png" alt="Rabisco roxo lateral" className="decor-purple-loop" />
      <img src="/assets/icons/smiley.png" alt="Smiley icon" className="smiley-icon" />

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