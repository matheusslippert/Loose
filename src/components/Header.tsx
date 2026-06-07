import './Header.scss';

export function Header() {
  const navLinks = ['novidades.', 'homem.', 'mulher.', 'tênis.', 'acessórios.'];

  return (
    <div className="header-wrapper">
      <div className="top-bar">
        <a href="#">ajuda</a> <span className="separator">|</span>
        <a href="#">junte-se a nós</a> <span className="separator">|</span>
        <a href="#">entrar</a>
      </div>

      <header className="header">
        {/* Logo em Imagem */}
        <a href="/" className="logo">
          <img src="/assets/icons/logo.png" alt="loose." className="logo-img" />
        </a>
        
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </nav>

        <div className="actions">
          <div className="search-box">
            <img src="/assets/icons/search.png" alt="Buscar" className="icon" />
            <input type="text" placeholder="Search" />
          </div>
          
          <button className="icon-btn">
            <img src="/assets/icons/heart.png" alt="Favoritos" className="icon" />
          </button>
          
          <button className="icon-btn cart-btn">
            <img src="/assets/icons/bag.png" alt="Sacola" className="icon" />
            {/* O número zero flutuante caso tenha itens */}
          </button>
        </div>
      </header>
    </div>
  );
}