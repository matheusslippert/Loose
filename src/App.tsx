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




export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Colecoes />
        <Video />
        <Tenis />
        <BannerDuplo />
        <ShopAndNewsletter />
        <Sobre />
        <Footer />  
      </main>
    </>
  );
}