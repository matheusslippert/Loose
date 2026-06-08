import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { produtosMock } from '../data/products';
import { useCart } from '../components/CartContext';
import { useFavorites } from '../components/FavoritesContext';
import './ProdutoDetalhes.scss';

export function ProdutoDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const produto = produtosMock.find((p) => p.id === id);
  const [imagemAtiva, setImagemAtiva] = useState(produto?.images[0] || '');

  if (!produto) {
    return (
      <div className="produto-nao-encontrado">
        <h2>Produto não encontrado</h2>
        <button onClick={() => navigate('/vitrine')}>Voltar para a Vitrine</button>
      </div>
    );
  }

  const favorito = isFavorite(produto.id);

  const handleAddToCart = () => {
    addToCart({
      id: produto.id,
      name: produto.name,
      price: produto.price,
      image: produto.images[0],
      quantity: 1
    });
  };

  return (
    <div className="produto-detalhes-page">
      <button className="btn-voltar" onClick={() => navigate(-1)}>
        &larr; Voltar
      </button>

      <div className="produto-container">
        <div className="galeria-produto">
          <div className="thumbnails">
            {produto.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${produto.name} - foto ${index + 1}`}
                className={imagemAtiva === img ? 'ativa' : ''}
                onClick={() => setImagemAtiva(img)}
              />
            ))}
          </div>
          <div className="imagem-principal">
            <img src={imagemAtiva} alt={produto.name} />
          </div>
        </div>

        <div className="info-produto">
          <span className="categoria-badge">{produto.category}</span>
          <h1>{produto.name}</h1>
          <p className="preco">R$ {produto.price.toFixed(2)}</p>

          <div className="descricao">
          </div>

          <div className="seletor-tamanho">
            <span>Tamanho:</span>
            <div className="tamanhos">
              <button>P</button>
              <button>M</button>
              <button>G</button>
              <button>GG</button>
            </div>
          </div>

          <div className="acoes-produto">
            <button className="btn-comprar-grande" onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </button>

            <button
              className={`btn-favoritar-grande ${favorito ? 'ativo' : ''}`}
              onClick={() => toggleFavorite(produto.id)}
            >
              {favorito ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF6B6B" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}