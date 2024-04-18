export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export enum Pages {
  BREAKFAST = "breakfast",
  LUNCH = "lunch",
  CART = "cart",
  CHECKOUT = "checkout",
}
