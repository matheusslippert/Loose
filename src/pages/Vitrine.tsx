import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { produtosMock } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import './Vitrine.scss';

export function Vitrine() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaAtiva = searchParams.get('categoria') || 'Todos';
  const buscaAtiva = searchParams.get('busca') || '';

  const [tamanhoAtivo, setTamanhoAtivo] = useState('Todos');
  const [corAtiva, setCorAtiva] = useState('Todas');

  const categorias = ['Todos', 'Masculino', 'Feminino', 'Acessórios', 'Skate'];
  const tamanhos = ['Todos', 'P', 'M', 'G', 'GG', 'Único'];
  const cores = ['Todas', 'Branca', 'Preta', 'Roxo', 'Verde', 'Azul', 'Amarela', 'Marrom', 'Rosa'];

  const mudarCategoria = (cat: string) => {
    setSearchParams(prev => {
      if (cat === 'Todos') prev.delete('categoria');
      else prev.set('categoria', cat);
      return prev;
    });
  };

  const produtosFiltrados = produtosMock.filter(produto => {
    const matchCategoria = categoriaAtiva === 'Todos' || produto.category === categoriaAtiva;

    const termoBuscaLower = buscaAtiva.toLowerCase();
    const nomeSeguro = produto.name ? produto.name.toLowerCase() : '';
    const corSegura = produto.color ? produto.color.toLowerCase() : '';
    const matchBusca = buscaAtiva === '' || nomeSeguro.includes(termoBuscaLower) || corSegura.includes(termoBuscaLower);

    const tamanhosSeguros = produto.sizes || [];
    const matchTamanho = tamanhoAtivo === 'Todos' || tamanhosSeguros.includes(tamanhoAtivo);

    const matchCor = corAtiva === 'Todas' || produto.color === corAtiva;

    return matchCategoria && matchBusca && matchTamanho && matchCor;
  });

  return (
    <div className="vitrine-page">

      <aside className="sidebar-filtros">
        <div className="filtro-grupo">
          <h2>Categorias</h2>
          <ul>
            {categorias.map(cat => (
              <li key={cat}>
                <button className={categoriaAtiva === cat ? 'ativo' : ''} onClick={() => mudarCategoria(cat)}>
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="filtro-grupo">
          <h2>Cores</h2>
          <div className="botoes-grid">
            {cores.map(cor => (
              <button key={cor} className={`btn-filtro ${corAtiva === cor ? 'ativo' : ''}`} onClick={() => setCorAtiva(cor)}>
                {cor}
              </button>
            ))}
          </div>
        </div>

        <div className="filtro-grupo">
          <h2>Tamanhos</h2>
          <div className="botoes-grid">
            {tamanhos.map(tam => (
              <button key={tam} className={`btn-filtro ${tamanhoAtivo === tam ? 'ativo' : ''}`} onClick={() => setTamanhoAtivo(tam)}>
                {tam}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <section className="vitrine-content">
        <div className="vitrine-header">
          <h1>
            {buscaAtiva ? `Resultados para "${buscaAtiva}"` : `Vitrine ${categoriaAtiva !== 'Todos' ? `- ${categoriaAtiva}` : ''}`}
          </h1>
          <p>{produtosFiltrados.length} produto(s) encontrado(s)</p>
        </div>

        <div className="produtos-grid">
          {produtosFiltrados.length === 0 ? (
            <div className="sem-produtos">
              <h3>Nenhum produto encontrado nesta busca.</h3>
              <p>Tente remover alguns filtros ou buscar por termos diferentes.</p>
            </div>
          ) : (
            produtosFiltrados.map(produto => (
              <ProductCard
                key={produto.id} id={produto.id} name={produto.name} price={produto.price} images={produto.images}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}