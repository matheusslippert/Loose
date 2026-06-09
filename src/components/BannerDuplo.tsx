import './BannerDuplo.scss';

export function BannerDuplo() {
  const rolarParaSobre = () => {
    const secaoSobre = document.getElementById('sobre');
    if (secaoSobre) {
      secaoSobre.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="banner-duplo">
      <div className="yellow-side">
        <img src="/assets/icons/rabisco-opaco.png" alt="Rabisco roxo" className="rabisco-bg" />
        <img src="/assets/icons/selo-loose.png" alt="Selo Loose" className="selo selo-yellow" />
        <img src="/assets/icons/mascote-skate2.png" alt="Skatista Branco" className="skatista skatista-branco" />
        <img src="/assets/icons/mascote-barbudo.png" alt="Skatista Barbudo" className="skatista skatista-barbudo" />

        <div className="content">
          <img src="/assets/linhas/linha-preta-fina.png" alt="Linha" className="linha linha-bottom" />

          <h2>
            <span className="bold-text">a roupa<br />veste você.</span><br />
            <span className="light-text">não o<br />contário.</span>
          </h2>

          <img src="/assets/linhas/linha-preta.png" alt="Linha" className="linha linha-top" />

          <button className="btn-saber-mais" onClick={rolarParaSobre}>
            saber mais.
          </button>        </div>
      </div>

      <div className="photo-side">
        <img src="/assets/icons/selo-loose.png" alt="Selo Loose" className="selo selo-photo" />
        <img src="/assets/icons/mascote-roxo.png" alt="Skatista Roxo" className="skatista skatista-roxo" />

        <p className="text-purple">wear it loose.<br />live it loud.</p>

        <span className="vertical-text">pertencimento</span>
      </div>
    </section>
  );
}