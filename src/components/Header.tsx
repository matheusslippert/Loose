import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { useFavorites } from './FavoritesContext';


import './Header.scss';


export function Header() {
  const { toggleCart, cart } = useCart();
  const { favorites, toggleFavoritesOpen } = useFavorites(); 


  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && termoBusca.trim() !== '') {
      navigate(`/vitrine?busca=${termoBusca}`);
      setTermoBusca('');
    }
  };

  return (
    <header className="header-wrapper">
      <div className="top-bar">
        <a href="#ajuda">ajuda</a><span className="separator">|</span>
        <a href="#junte-se">junte-se a nós</a><span className="separator">|</span>
        <a href="#entrar">entrar</a>
      </div>

      <div className="header">
        <Link to="/" className="logo">
          <img src="/assets/icons/logo.png" alt="Loose" className="logo-img" />
        </Link>

        <nav className="nav-links">
          <Link to="/vitrine">novidades</Link>
          <Link to="/vitrine?categoria=Masculino">masculino</Link>
          <Link to="/vitrine?categoria=Feminino">feminino</Link>
          <Link to="/vitrine?categoria=Acessórios">acessórios</Link>
          <Link to="/vitrine?categoria=Skate">skate</Link>
        </nav>

        <div className="actions">
          <div className="search-box">
            <img src="/assets/icons/search.png" alt="Buscar" className="icon" />
            <input
              type="text"
              placeholder="Buscar"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>

          <button className="icon-btn" onClick={toggleFavoritesOpen}>
            <img src="/assets/icons/heart.png" alt="Favoritos" className="icon" />
            {favorites.length > 0 && (
              <span style={{ position: 'absolute', top: -5, right: -5, background: '#FF6B6B', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>
                {favorites.length}
              </span>
            )}
          </button>
          <button className="icon-btn" onClick={toggleCart}>
            <img src="/assets/icons/bag.png" alt="Carrinho" className="icon" />
            {cart.length > 0 && (
              <span style={{ position: 'absolute', top: -5, right: -5, background: '#FF6B6B', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>
                {cart.length}
              </span>
            )}
          </button>

          <button className="menu-mobile-btn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}