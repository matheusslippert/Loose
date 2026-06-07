import './Manifesto.scss';

export function Manifesto() {
  return (
    <section className="manifesto">
      {/* Imagens Flutuantes (Decoração) */}
      <img src="/assets/institucional/rabisco-esquerdo.png" alt="" className="decor decor-left" />
      <img src="/assets/institucional/rabisco-direito.png" alt="" className="decor decor-right" />
      <img src="/assets/institucional/mascote-vinil.png" alt="" className="mascot mascot-vinyl" />
      <img src="/assets/institucional/mascote-skate.png" alt="" className="mascot mascot-skate" />
      
      {/* Removemos os sóis laranjas daqui, eles agora ficam perto do texto */}

      <div className="manifesto-content">
        {/* Envelope para o solzinho acompanhar o título principal */}
        <div className="title-wrapper">
          <img src="/assets/institucional/sol.png" alt="" className="decor-sun sun-top" />
          <h2 className="title-serif">a gente não é roupa.</h2>
        </div>
        
        <p className="paragraph-small">
          a gente é a desculpa<br />
          que você precisa pra sair de casa.
        </p>

        {/* Linha Divisória */}
        <img src="/assets/institucional/linha-preta.png" alt="" className="divider-line" />

        <p className="paragraph-medium">
          porque rua não é cenário, é território.<br />
          porque domingo de manhã também é hora de ser visto.<br />
          porque ninguém precisa pedir licença pra ocupar espaço.
        </p>

        <h3 className="subtitle-serif">
          a Loose não veste quem quer passar<br />
          despercebido.
        </h3>

        {/* Linha Divisória */}
        <img src="/assets/institucional/linha-preta.png" alt="" className="divider-line" />

        {/* Envelope para o solzinho acompanhar o último título */}
        <div className="title-wrapper highlight-wrapper">
          <h3 className="subtitle-serif highlight">
            a Loose veste quem chegou.
          </h3>
          <img src="/assets/institucional/sol.png" alt="" className="decor-sun sun-bottom" />
        </div>

        <button className="manifesto-btn">wear it loose. live it loud.</button>
      </div>
    </section>
  );
}