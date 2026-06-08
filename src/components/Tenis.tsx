import './Tenis.scss';

export function Tenis() {
  return (
    <section className="tenis-section">
      <div className="container">
        <div className="header-tenis">
          <h2 className="title-tenis">tênis.</h2>
          <img src="/assets/icons/selo-loose.png" alt="Selo Loose" className="selo-img" />
        </div>

        <div className="image-wrapper">
          <img src="/assets/fundos/bg-tenis.png" alt="Tênis Loose" className="bg-tenis" />
          <span className="text-small">“é o tênis que você usa</span>
          <span className="text-bold">pra<br />apresentação de<br />TCC.”</span>
          <img src="/assets/icons/smiley.png" alt="Sorriso" className="smiley-icon" />
        </div>

        <div className="footer-tenis">
          <h3 className="subtitle-purple">entre em contato com o que lhe faz bem.</h3>
          <p>Porque todos deveriam conhecer a sensação de ter aquele par perfeito.</p>
          <button className="btn-coral">encontre seu tênis</button>
        </div>
      </div>
    </section>
  );
}