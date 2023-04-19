import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>Products</h2>
        <div className="products">
          {products.map((product) => {
            return (
              <article key={product.id}>
                <h3>{product.name}</h3>
                <img className="img" src={product.image} alt={product.name}/>
                <Link to={`/products/${product.id}`} className="btn">more info</Link>
                <hr/>
              </article>
            )
          })}
        </div>
        <Link to="/" className="btn">Home</Link>
      </section>
    </>
  );
};

export default Products;
