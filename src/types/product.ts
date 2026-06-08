export interface SKU {
  id: string;
  size: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imagePath: string; // [cite: 67]
  skus: SKU[];       // [cite: 67]
}