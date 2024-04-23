import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { CartItem } from "../types.ts";
import { Product } from "../types.ts";
import { useEffect, useState } from "preact/hooks";

type Props = {
  cart: Signal<CartItem[]>;
  page: Signal<string>;
};

const Products: FunctionComponent<Props> = ({ cart, page }) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch(`https://shop-products.deno.dev/products/${page.value}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [page.value]);
  const addProduct = (product: Product, cart: CartItem[]) => {
    const newCart = [...cart];
    const found = newCart.find((item) => item.product.id === product.id);
    if (found) {
      found.quantity++;
    } else {
      newCart.push({ product, quantity: 1 });
    }
    return newCart;
  };

  return (
    <div class="products">
      <h1>Products</h1>
      {products.map((product) => (
        <div class="item" key={product.id}>
          <span class="name">{product.name}</span>
          <span class="price">{product.price}€</span>
          <img src={product.image} alt={product.name} />
          <span class="description">{product.description}</span>
          <span
            class="add"
            onClick={() => {
              cart.value = addProduct(product, cart.value);
            }}
          >
            +
          </span>
        </div>
      ))}
    </div>
  );
};

export default Products;
