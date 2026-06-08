import './Sobre.scss';

export function Sobre() {
  return (
    <section className="sobre-section">
      <div className="sobre-container">
        
        {/* LADO ESQUERDO: TEXTOS E MISSÃO/VISÃO */}
        <div className="sobre-content">
          <h1>sobre a loose.</h1>
          
          <div className="sobre-text">
            <p>criada em 2026, a loose é uma marca <br /> feita para você que curte o streetwear, <br /> o skate, pra quem não quer passar <br /> despercebido.</p>
            <p>unimos o skate de fim de tarde, o show <br /> de quinta no centro e a primeira grana <br /> do freela em um lugar só. loose não é <br /> uma marca, é um estilo.</p>
          </div>

          {/* Bloco Missão */}
          <div className="card-info info-missao">
            <span className="info-badge">MISSÃO</span>
            <h2>o que fazemos</h2>
            <p>vestir o jovem urbano com <br /> peças que entregam atitude, <br /> <strong>qualidade e identidade.</strong></p>
          </div>

          {/* Bloco Visão */}
          <div className="card-info info-visao">
            <span className="info-badge">VISÃO</span>
            <h2>onde queremos chegar</h2>
            <p>ser, até 2030, a marca de <br /> streetwear premium mais <br /> <strong>relevante da américa latina.</strong></p>
          </div>

          {/* Mascote do Cachorrinho Sentado */}
          <img src="/assets/institucional/mascote-sentado.png"  alt="Mascote Loose" className="mascote-sobre" />
        </div>

        {/* LADO DIREITO: FOTO GRANDE DO HOMEM */}
        <div className="sobre-photo">
          <img src="/assets/institucional/foto-sobre.png" alt="Streetwear Loose" />
        </div>

      </div>
    </section>
  );
}