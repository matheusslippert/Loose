import { useState } from 'react';
import './NewsletterSection.scss';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    // Aqui entra a lógica de envio para a API
    console.log("Enviando e-mail:", email);
    alert("Obrigado por se cadastrar!");
    setEmail(''); // Limpa o campo após o envio
  };

  return (
    <section className="newsletter-section">
      {/* Vitrine de Produtos */}
      <div className="product-grid">
        {/* Renderize os 3 cards aqui com as imagens dos produtos */}
      </div>

      {/* Banner "Solto" */}
      <div className="banner-solto">
        <img src="/assets/institucional/so-lto-bg.jpg" alt="Solto" className="bg-img" />
        <img src="/assets/icons/mascote-skate.png" alt="Mascote" className="mascote" />
        <img src="/assets/icons/smiley.png" alt="Sorriso" className="smiley" />
      </div>

      {/* Newsletter */}
      <div className="newsletter-box">
        <p>Cadastre-se para ficar por dentro das novidades do mundo streetwear.</p>
        <div className="input-group">
          <input 
            type="email" 
            placeholder="SEU E-MAIL" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSend}>enviar.</button>
        </div>
      </div>
    </section>
  );
}