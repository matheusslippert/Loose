import { useFavorites } from './FavoritesContext';
import { useCart } from './CartContext';
import { produtosMock } from '../data/products';
import './MiniCart.scss'; 

export function MiniFavorites() {
  const { favorites, isFavoritesOpen, toggleFavoritesOpen, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const favProducts = produtosMock.filter(p => favorites.includes(p.id));

  const handleAddAllToCart = () => {
    favProducts.forEach(p => {
      addToCart({ id: p.id, name: p.name, price: p.price, image: p.images[0], quantity: 1 });
    });
    toggleFavoritesOpen(); 
  };

  if (!isFavoritesOpen) return null;

  return (
    <>
      <div className="minicart-overlay" onClick={toggleFavoritesOpen}></div>
      <div className="minicart-drawer">
        <div className="minicart-header">
          <h2>Meus Favoritos</h2>
          <button onClick={toggleFavoritesOpen} className="close-btn">X</button>
        </div>

        <div className="minicart-items">
          {favProducts.length === 0 ? (
            <p className="empty-cart">Você ainda não curtiu nenhum produto.</p>
          ) : (
            favProducts.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.name} />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p className="price">R$ {item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => toggleFavorite(item.id)} className="remove-btn">🗑️</button>
              </div>
            ))
          )}
        </div>

        <div className="minicart-footer">
          <button 
            className="checkout-btn" 
            style={{ backgroundColor: '#brand-purple', color: 'white' }}
            onClick={handleAddAllToCart}
            disabled={favProducts.length === 0}
          >
            Adicionar Todos ao Carrinho
          </button>
        </div>
      </div>
    </>
  );
}