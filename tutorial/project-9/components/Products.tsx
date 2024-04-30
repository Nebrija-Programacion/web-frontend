import { FunctionComponent } from "preact";
import { Product } from "../types.ts";
import AddProduct from "../islands/AddProduct.tsx";

type Props = {
  products: Product[];
};

const Products: FunctionComponent<Props> = ({ products }) => {
  return (
    <div class="products">
      <h1>Products</h1>
      {products.map((product) => (
        <div class="item" key={product.id}>
          <span class="name">{product.name}</span>
          <span class="price">{product.price}€</span>
          <img src={product.image} alt={product.name} />
          <span class="description">{product.description}</span>
          <AddProduct product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
