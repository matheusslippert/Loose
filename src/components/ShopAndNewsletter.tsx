import { useState } from 'react';
import './ShopAndNewsletter.scss';

export function ShopAndNewsletter() {
  // Lógica da Newsletter 
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault(); 
    
    if (email.trim() !== '') {
      setShowNotification(true); // Mostra o Toast no canto
      setEmail(''); // Limpa o campo para poder digitar outro
      
      // Timer para a notificação sumir sozinha após 10 segundos (10000 ms)
      setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    }
  };

  return (
    <section className="shop-newsletter-section">
      {/* --- PARTE 1: VITRINE DE PRODUTOS --- */}
      <div className="container">
        <div className="products-grid">
          
          {/* Produto 1 */}
          <div className="product-card">
            <div className="image-wrapper">
              <img src="/assets/produtos/camisa2.png" alt="Camiseta Off White" />
            </div>
            <div className="product-info">
              <span className="badge">apenas em</span>
              <h3>camiseta blv channel off white.</h3>
              <p className="category">camiseta masculina</p>
              <p className="colors">2 Cor</p>
              <div className="price-row">
                <span className="price">R$80,00</span>
                <button className="btn-comprar">comprar</button>
              </div>
            </div>
          </div>

          {/* Produto 2 */}
          <div className="product-card">
            <div className="image-wrapper">
              <img src="/assets/produtos/camisa3.3.png" alt="Camiseta Preta" />
            </div>
            <div className="product-info">
              <span className="badge">apenas em</span>
              <h3>camiseta good times preta.</h3>
              <p className="category">camiseta masculina</p>
              <p className="colors">1 cor</p>
              <div className="price-row">
                <span className="price">R$99,00</span>
                <button className="btn-comprar">comprar</button>
              </div>
            </div>
          </div>

          {/* Produto 3 */}
          <div className="product-card">
            <div className="image-wrapper">
              <img src="/assets/produtos/camisa1.png" alt="Camiseta Azul" />
            </div>
            <div className="product-info">
              <span className="badge">apenas em</span>
              <h3>camiseta blv channel azul.</h3>
              <p className="category">camiseta masculina</p>
              <p className="colors">2 Cor</p>
              <div className="price-row">
                <span className="price">R$80,00</span>
                <button className="btn-comprar">comprar</button>
              </div>
            </div>
          </div>

        </div>

        {/* --- PARTE 2: BANNER "SOLTO" --- */}
        <div className="banner-solto">
          <img src="/assets/institucional/bg-casal.png" alt="Casal" className="bg-casal" />
          <img src="/assets/institucional/so-lto.png" className="overlay-solto" />
          <img src="/assets/institucional/mascote-branco.png" alt="Mascote" className="overlay-mascote" />
          <img src="/assets/institucional/smiley.png" alt="Sorriso" className="overlay-smiley" />
        </div>

        {/* --- PARTE 3: NEWSLETTER --- */}
        <div className="newsletter-banner">
          <div className="newsletter-content">
<h2>
      Cadastre-se para ficar por dentro<br />
      das novidades do mundo streetwear.
    </h2>            
            <div className="form-wrapper">
              {/* O formulário agora é renderizado sempre */}
              <form onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="SEU EMAIL" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-enviar">enviar.</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* --- NOTIFICAÇÃO FLUTUANTE (TOAST) --- */}
      {showNotification && (
        <div className="notification-toast">
          <p>Inscrição realizada com sucesso! Fique de olho na sua caixa de entrada.</p>
        </div>
      )}
    </section>
  );
}