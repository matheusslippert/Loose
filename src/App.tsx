import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.scss';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Colecoes } from './components/Colecoes';
import { Video } from './components/Video';
import { Tenis } from './components/Tenis';
import { BannerDuplo } from './components/BannerDuplo';
import { ShopAndNewsletter } from './components/ShopAndNewsletter';
import { Sobre } from './components/Sobre';
import { Footer } from './components/Footer';
import { MiniCart } from './components/MiniCart';
import { CartProvider } from './components/CartContext';
import { Vitrine } from './pages/Vitrine';
import { ProdutoDetalhes } from './pages/ProdutoDetalhes';
import { FavoritesProvider } from './components/FavoritesContext';
import { MiniFavorites } from './components/MiniFavorites';
import { ScrollToTop } from './components/ScrollToTop';




function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Colecoes />
      <Video />
      <Tenis />
      <BannerDuplo />
      <ShopAndNewsletter />
      <Sobre />
    </main>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <MiniCart />
          <MiniFavorites />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<ProdutoDetalhes />} />
            <Route path="/vitrine" element={<Vitrine />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </FavoritesProvider>

  );
}