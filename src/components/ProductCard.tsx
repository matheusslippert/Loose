import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { useFavorites } from './FavoritesContext';
import './ProductCard.scss';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  images: string[];
}

export function ProductCard({ id, name, price, images }: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const favorito = isFavorite(id);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id, name, price, image: images[0], quantity: 1 });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <div className="product-card" onClick={() => navigate(`/produto/${id}`)}>
      <div className="carousel-wrapper">
        <img src={images[currentImgIndex]} alt={name} className="product-image" />
        {images.length > 1 && (
          <>
            <button className="carousel-btn left" onClick={prevImage}>‹</button>
            <button className="carousel-btn right" onClick={nextImage}>›</button>
          </>
        )}
      </div>

      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">R$ {price.toFixed(2)}</p>

        <div className="acoes-card">
          <button className="btn-add-cart" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </button>

          <button className={`btn-fav ${favorito ? 'ativo' : ''}`} onClick={handleToggleFavorite}>
            {favorito ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF6B6B" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}