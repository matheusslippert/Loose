import './BannerDuplo.scss';

export function BannerDuplo() {
  return (
    <section className="banner-duplo">
      {/* --- LADO ESQUERDO (AMARELO) --- */}
      <div className="yellow-side">
        {/* Rabisco de fundo da sua versão */}
        <img src="/assets/institucional/rabisco-cinza.png" alt="" className="rabisco-bg" />

        {/* Selo e Skatistas com os seus caminhos de imagem */}
        <img src="/assets/institucional/selo-loose.png" alt="Selo Loose" className="selo selo-yellow" />
        <img src="/assets/institucional/skatebranco.png" alt="Skatista Branco" className="skatista skatista-branco" />
        <img src="/assets/institucional/skatebarbudo.png" alt="Skatista Barbudo" className="skatista skatista-barbudo" />

        {/* Conteúdo de Texto */}
        <div className="content">
          {/* Nova linha superior */}
          <img src="/assets/institucional/linhapreta.png" alt="Linha" className="linha linha-bottom" />

          {/* Título com os pesos de fonte separados */}
          <h2>
            <span className="bold-text">a roupa<br/>veste você.</span><br/>
            <span className="light-text">não o<br/>contário.</span>
          </h2>

          {/* Nova linha inferior */}
          <img src="/assets/institucional/linhapreta.png" alt="Linha" className="linha linha-top" />

          <button className="btn-saber-mais">saber mais.</button>
        </div>
      </div>

      {/* --- LADO DIREITO (FOTO) --- */}
      <div className="photo-side">
        {/* Selo e Skatista Roxo com os seus caminhos */}
        <img src="/assets/institucional/selo-loose.png" alt="Selo Loose" className="selo selo-photo" />
        <img src="/assets/institucional/skateroxo.png" alt="Skatista Roxo" className="skatista skatista-roxo" />

        <p className="text-purple">wear it loose.<br/>live it loud.</p>

        {/* Texto vertical no canto direito */}
        <span className="vertical-text">pertencimento</span>
      </div>
    </section>
  );
}