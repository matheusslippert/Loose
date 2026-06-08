import './Manifesto.scss';

export function Manifesto() {
  return (
    <section className="manifesto">
      <img src="/assets/icons/rabisco-esquerdo.png" alt="Rabisco roxo lado esquerdo" className="decor decor-left" />
      <img src="/assets/icons/rabisco-direito.png" alt="Rabisco roxo lado direito" className="decor decor-right" />
      <img src="/assets/icons/mascote-vinil.png" alt="Mascote com Vinil" className="mascot mascot-vinyl" />
      <img src="/assets/icons/mascote-skate.png" alt="Mascote de Skate" className="mascot mascot-skate" />
      
      <div className="manifesto-content">
        <div className="title-wrapper">
          <img src="/assets/icons/sol.png" alt="sol" className="decor-sun sun-top" />
          <h2 className="title-serif">a gente não é roupa.</h2>
        </div>
        
        <p className="paragraph-small">
          a gente é a desculpa<br />
          que você precisa pra sair de casa.
        </p>

        <img src="/assets/linhas/linha-preta.png" alt="Linha preta" className="divider-line" />

        <p className="paragraph-medium">
          porque rua não é cenário, é território.<br />
          porque domingo de manhã também é hora de ser visto.<br />
          porque ninguém precisa pedir licença pra ocupar espaço.
        </p>

        <h3 className="subtitle-serif">
          a Loose não veste quem quer passar<br />
          despercebido.
        </h3>

        <img src="/assets/linhas/linha-preta.png" alt="Linha preta" className="divider-line" />

        <div className="title-wrapper highlight-wrapper">
          <h3 className="subtitle-serif highlight">
            a Loose veste quem chegou.
          </h3>
          <img src="/assets/icons/sol.png" alt="" className="decor-sun sun-bottom" />
        </div>

        <button className="manifesto-btn">wear it loose. live it loud.</button>
      </div>
    </section>
  );
}