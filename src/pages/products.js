import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/Book">A Book</Link>
        </li>
        <li>
          <Link to="/products/produto2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/produto3">Product 3</Link>
        </li>
        <li>
          <Link to="/products/produto4">Product 4</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
