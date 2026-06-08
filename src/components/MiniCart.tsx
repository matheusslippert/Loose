import { useState } from 'react';
import { useCart } from './CartContext';
import './MiniCart.scss';

export function MiniCart() {
  const { cart, isCartOpen, toggleCart, removeFromCart, clearCart, cartTotal } = useCart();

  const [mostrarNotificacao, setMostrarNotificacao] = useState(false);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    setMostrarNotificacao(true);
    clearCart();

    setTimeout(() => {
      setMostrarNotificacao(false);
      toggleCart();
    }, 3000);
  };

  return (
    <>
      {mostrarNotificacao && (
        <div className="toast-compra-sucesso">
          <div className="toast-icone">✓</div>
          <div className="toast-textos">
            <h4>Compra Finalizada!</h4>
            <p>Seu pedido está sendo processado com muito carinho.</p>
          </div>
        </div>
      )}

      {isCartOpen && !mostrarNotificacao && (
        <>
          <div className="minicart-overlay" onClick={toggleCart}></div>
          <div className="minicart-drawer">
            <div className="minicart-header">
              <h2>Seu Carrinho</h2>
              <button onClick={toggleCart} className="close-btn">X</button>
            </div>

            <div className="minicart-items">
              {cart.length === 0 ? (
                <p className="empty-cart">Seu carrinho está vazio.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>Qtd: {item.quantity}</p>
                      <p className="price">R$ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">🗑️</button>
                  </div>
                ))
              )}
            </div>

            <div className="minicart-footer">
              <div className="total">
                <span>Total:</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <button
                className="checkout-btn"
                onClick={handleCheckout}
                disabled={cart.length === 0}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}