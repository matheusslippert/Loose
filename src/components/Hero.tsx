import './Hero.scss';

export function Hero() {
  return (
    <section className="hero">
      {/* "moda séria é chata" com a fonte e peso corrigidos */}
      <p className="floating-left">moda séria<br/>é chata.</p>
      
      <p className="floating-center">chegou drop novo. corre.</p>
      
      {/* Disponível a partir de quinta com a cor e fonte da sua imagem */}
      <p className="floating-right">disponível a partir de quinta · 18h</p>

      <div className="hero-content">
        <span className="tag">DROP 04</span>
        
        {/* Envelope ajustado para o sol centralizar melhor */}
        <div className="title-wrapper">
          <img src="/assets/institucional/sol.png" alt="" className="starburst" />
          <h1>
            pôr-do-sol<br />
            <span className="highlight">no centro.</span>
          </h1>
        </div>

        <div className="subtitle-wrapper">
          <p className="subtitle">"a coleção que veste a hora de ouro"</p>
          <img src="/assets/institucional/linha.png" alt="" className="yellow-line" />
        </div>

        <div className="description">
          <p className="bold">12 peças. tudo limitado.</p>
          <p>friozinho de junho. desenhada com referências do skate<br/>
          cores quentes, tecidos pesados, peças que aguentam o<br/>
          paulistano e da estação da luz num sábado de tarde.</p>
        </div>

        <button className="cta-button">quero.</button>
      </div>
    </section>
  );
}