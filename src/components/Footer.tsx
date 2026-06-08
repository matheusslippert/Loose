import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-main-content">

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

              <div className="footer-mascote">
                <img src="/assets/icons/mascote-vinil.png" alt="Mascote Vinil Loose" />
              </div>
            </div>
          </div>

          <div className="footer-brand-text">
            <h2>marca brasileira de<br />streetwear premium.</h2>
            <p>peças que duram mais que uma estação — e fazem você parecer mais interessante do que parecia 5 minutos antes.</p>
          </div>

        </div>

        <div className="footer-socials">
          <a href="#twitter" className="social-icon"><img src="/assets/icons/twitter.png" alt="Twitter" /></a>
          <a href="#facebook" className="social-icon"><img src="/assets/icons/facebook.png" alt="Facebook" /></a>
          <a href="#youtube" className="social-icon"><img src="/assets/icons/youtube.png" alt="Youtube" /></a>
          <a href="#instagram" className="social-icon"><img src="/assets/icons/instagram.png" alt="Instagram" /></a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 loose, inc. todos direitos reservados</p>
      </div>
    </footer>
  );
}