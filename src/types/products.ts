export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface CartItems {
  id: number;
  product: Product;
  quantity: number;
}

export interface ResponseProduct {
  content: Product[];
  last: boolean;
}
