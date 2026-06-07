// src/utils/products.ts
import { type Product } from '../types/product';

export const productsMock: Product[] = [
  {
    id: 'p1',
    name: 'camiseta loose pôr do sol',
    price: 129.90,
    category: 'camisetas',
    imagePath: '/assets/produtos/camiseta-por-do-sol.png', 
    skus: [
      { id: 'sku-p1-P', size: 'P', stock: 5 },
      { id: 'sku-p1-M', size: 'M', stock: 10 }
    ]
  },
  {
    id: 'p2',
    name: 'tênis air loose creme',
    price: 349.90,
    category: 'tênis',
    imagePath: '/assets/produtos/tenis-creme.png',
    skus: [
      { id: 'sku-p2-39', size: '39', stock: 3 },
      { id: 'sku-p2-40', size: '40', stock: 8 }
    ]
  },
  {
    id: 'p3',
    name: 'mochila expeditions',
    price: 259.90,
    category: 'acessórios',
    imagePath: '/assets/produtos/mochila-expeditions.png',
    skus: [
      { id: 'sku-p3-U', size: 'Único', stock: 15 }
    ]
  }
];