import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* COLUNA 1: LINKS LINKS */}
        <div className="footer-links">
          <div className="link-group">
            <a href="#sobre">sobre a loose.</a>
            <a href="#noticias">notícias.</a>
            <a href="#carreira">carreira.</a>
            <a href="#sustentabilidade">sustentabilidade.</a>
          </div>

          <div className="link-group">
            <a href="#status">status do pedido.</a>
            <a href="#entrega">entrega.</a>
            <a href="#pagamento">opções de pagamento.</a>
          </div>
        </div>

        {/* COLUNA CENTRAL: MASCOTE DO DISCO */}
        <div className="footer-mascote">
          <img src="/assets/institucional/mascote-vinil.png" alt="Mascote Vinil Loose" />
        </div>

        {/* COLUNA 3: MANIFESTO TEXTO */}
        <div className="footer-brand-text">
          <h2>marca brasileira de<br />streetwear premium.</h2>
          <p>peças que duram mais que uma estação — <br/> e fazem você parecer mais interessante <br/> do que parecia 5 minutos antes.</p>
        </div>

        {/* COLUNA 4: SOCIAIS */}
        <div className="footer-socials">
          <a href="#twitter" className="social-icon"><img src="/assets/icons/twitter.png" alt="Twitter" /></a>
          <a href="#facebook" className="social-icon"><img src="/assets/icons/facebook.png" alt="Facebook" /></a>
          <a href="#youtube" className="social-icon"><img src="/assets/icons/youtube.png" alt="Youtube" /></a>
          <a href="#instagram" className="social-icon"><img src="/assets/icons/instagram.png" alt="Instagram" /></a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2026 loose, inc. todos direitos reservados</p>
      </div>
    </footer>
  );
}