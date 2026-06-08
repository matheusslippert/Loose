import './Header.scss';

export function Header() {
  return (
    <header className="header-wrapper">
      
      <div className="top-bar">
        <a href="#ajuda">ajuda</a>
        <span className="separator">|</span>
        <a href="#junte-se">junte-se a nós</a>
        <span className="separator">|</span>
        <a href="#entrar">entrar</a>
      </div>

      <div className="header">
        
        {/* LOGO */}
        <div className="logo">
          <img src="/assets/icons/logo.png" alt="Loose" className="logo-img" />
        </div>

        <nav className="nav-links">
          <a href="#novidades">novidades</a>
          <a href="#masculino">masculino</a>
          <a href="#feminino">feminino</a>
          <a href="#acessorios">acessórios</a>
          <a href="#skate">skate</a>
        </nav>

        <div className="actions">
          
          <div className="search-box">
            <img src="/assets/icons/search.png" alt="Buscar" className="icon" />
            <input type="text" placeholder="Buscar" />
          </div>

          <button className="icon-btn">
            <img src="/assets/icons/heart.png" alt="Favoritos" className="icon" />
          </button>
          
          <button className="icon-btn">
            <img src="/assets/icons/bag.png" alt="Carrinho" className="icon" />
          </button>

          <button className="menu-mobile-btn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
}