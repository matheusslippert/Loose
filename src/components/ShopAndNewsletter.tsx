import { useState } from 'react';
import { useCart } from './CartContext';
import './ShopAndNewsletter.scss';

export function ShopAndNewsletter() {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const { addToCart, toggleCart } = useCart();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() !== '') {
      setShowNotification(true);
      setEmail('');

      setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    }
  };

  const handleComprar = (produto: { id: string, name: string, price: number, image: string }) => {
    addToCart({ ...produto, quantity: 1 });
    toggleCart();
  };

  return (
    <section className="shop-newsletter-section">
      <div className="container">
        <div className="products-grid">

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
                <button
                  className="btn-comprar"
                  onClick={() => handleComprar({
                    id: 'sn-1',
                    name: 'camiseta blv channel off white.',
                    price: 80.00,
                    image: '/assets/produtos/camisa2.png'
                  })}
                >
                  comprar
                </button>
              </div>
            </div>
          </div>

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
                <button
                  className="btn-comprar"
                  onClick={() => handleComprar({
                    id: 'sn-2',
                    name: 'camiseta good times preta.',
                    price: 99.00,
                    image: '/assets/produtos/camisa3.3.png'
                  })}
                >
                  comprar
                </button>
              </div>
            </div>
          </div>

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
                <button
                  className="btn-comprar"
                  onClick={() => handleComprar({
                    id: 'sn-3',
                    name: 'camiseta blv channel azul.',
                    price: 80.00,
                    image: '/assets/produtos/camisa1.png'
                  })}
                >
                  comprar
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="banner-solto">
          <img src="/assets/fundos/bg-casal.png" alt="Casal" className="bg-casal" />
          <img src="/assets/fundos/bg-so-lto.png" className="overlay-solto" />
          <img src="/assets/icons/mascote-stret.png" alt="Mascote" className="overlay-mascote" />
          <img src="/assets/icons/smiley.png" alt="Sorriso" className="overlay-smiley" />
        </div>

        <div className="newsletter-banner">
          <div className="newsletter-content">
            <h2>
              Cadastre-se para ficar por dentro<br />
              das novidades do mundo streetwear.
            </h2>
            <div className="form-wrapper">
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

      {showNotification && (
        <div className="notification-toast">
          <p>Inscrição realizada com sucesso!</p>
        </div>
      )}
    </section>
  );
}